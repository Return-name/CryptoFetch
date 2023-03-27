const transactionServices = require("../services/transaction.services.js");

const db = require("../models");

exports.get = async (req, res) => {
    const userAddress = req.params.userAddress;
    const transactions = (await transactionServices.fetchAll(userAddress));

    if (transactions.message === "NOTOK") {
        res.status(404).json({ error: "No Transactions found" });
        return;
    }

    let balance = 0;
    transactions.result.map((txn) => {
        if (txn.from === userAddress) {
            balance -= Number(txn.value);
        }
        else if(txn.to === userAddress) {
            balance += Number(txn.value);
        }
    })

    const Price = db.prices;
    const ethPrice = await Price.findOne({ name: "ethereum" }).exec();

    res.json({ balance: balance, ethereum_price: ethPrice.price})
}