const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.transactions = require("./transaction.model.js")(mongoose);
db.prices = require("./price.model.js")(mongoose);

module.exports = db;