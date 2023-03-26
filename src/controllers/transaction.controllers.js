const transactionServices = require("../services/transaction.services.js");

const db = require("../models");
const Transactions = db.transactions;

exports.getAll = async (req, res) => {
    const userAddress = req.params.userAddress;
    const transactions = await transactionServices.fetchAll(userAddress);

    Transactions.insertMany(transactions.result)

    res.json({ "Transactions": transactions.result});
}