module.exports = app => {
    const balance = require("../controllers/balance.controllers.js");
  
    var router = require("express").Router();
  
    router.get("/:userAddress", balance.get);

    app.use('/api/balance', router);
}