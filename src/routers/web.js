const express = require("express");
const {
  getHomepage,
  postNewUsers,
  getCreatePage,
  getEditPage,
  updateUsers,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/create", getCreatePage);

router.get("/edit/:id", getEditPage);

router.post("/create-user", postNewUsers);

router.post("/update-user", updateUsers);

module.exports = router;
