const transactionServices = require("../services/transaction.services.js");

const db = require("../models");
const Transactions = db.transactions;

exports.getAll = async (req, res) => {
    const userAddress = req.params.userAddress;
    const transactions = await transactionServices.fetchAll(userAddress);

    if (transactions.message === 'OK') {
        const transactionsWithID = transactions.result.map((txn) => ({...txn, _id: txn.hash}));
        Transactions
            .insertMany(transactionsWithID, {ordered : false })
            .catch( err => {});
        res.json({ "Transactions": transactions.result});
    }
    else {
        res.status(404).json({ error: "User Address Invalid"});
    }
}