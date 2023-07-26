const express = require("express");
require("dotenv").config();
const path = require("path");
const configViewEngine = require("./src/config/viewEngine");
const webRouters = require("./src/routers/web");
const connection = require("./src/config/database");
const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use("/", webRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
