const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  // config tenplate engine
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  //app.use(express.static(__dirname)); // Current directory is root
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
