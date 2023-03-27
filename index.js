const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const db = require("./src/models");

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require("./src/routes")(app);

require("./src/services");

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, '0.0.0.0', () => {
      console.log(`App listening at http://localhost:${port}`)
    });
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
