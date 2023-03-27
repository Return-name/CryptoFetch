module.exports = (app) => {
    require("./transaction.routes")(app);
    require("./balance.routes")(app);
}