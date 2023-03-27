module.exports = app => {
    const transactions = require("../controllers/transaction.controllers.js");
  
    var router = require("express").Router();
  
    router.get("/:userAddress", transactions.getAll);

    app.use('/api/transactions', router);
}