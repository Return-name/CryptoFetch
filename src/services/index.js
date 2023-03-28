const cron = require('node-cron');

const priceServices = require("./price.service");

const db = require("../models");

const updateEthereumPrice = async () => {
    const Price = db.prices;

    const price = await priceServices.fetchPrice("ethereum");

    if (!price.ethereum)
      return;

    const query = { _id: "ethereum" },
          update = { _id: "ethereum", name: "ethereum", price: price.ethereum.inr},
          options = { upsert: true, new: true, setDefaultsOnInsert: true};

    Price.findOneAndUpdate(query, update, options)
      .then(() => {
        console.log('Updated Ethereum Price');
      })
      .catch((err) => {
        console.log('Error in updating Ethereum Price', err);
      });

}

// the following cron job runs every 10 minutes
cron.schedule('*/10 * * * *', function() {
  try {
    updateEthereumPrice();
  }
  catch (err) {
    console.log('ERROR in cron job updateEthereumPrice:', err);
  }
});