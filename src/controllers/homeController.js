const connection = require("../config/database");
const {
  getAllUser,
  getUserById,
  updateEditUser,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  const users = await getAllUser();
  return res.render("home.ejs", { listUsers: users });
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const getEditPage = async (req, res) => {
  const { id } = req.params;
  const rows = await getUserById(id);
  return res.render("edit.ejs", { listEditUsers: rows[0] });
};

const postNewUsers = async (req, res) => {
  const { fname, email, address } = req.body;
  const [rows, fields] = await connection.query(
    `INSERT INTO Users(email, name, city)
    VALUES (?, ?, ?);`,
    [email, fname, address]
  );
  res.send("Create news user successfully!!");
};

const updateUsers = async (req, res) => {
  const { id, fname, email, address } = req.body;
  await updateEditUser(email, address, fname, id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  postNewUsers,
  getCreatePage,
  getEditPage,
  updateUsers,
};
