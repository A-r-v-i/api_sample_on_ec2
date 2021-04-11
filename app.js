const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.port || 8000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const routes = require("./routes/index");
app.use(routes);

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
