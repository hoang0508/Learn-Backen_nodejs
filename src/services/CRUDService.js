const connection = require("../config/database");

const getAllUser = async () => {
  const [rows, fields] = await connection.query("SELECT * FROM `Users`");
  return rows;
};

const getUserById = async (id) => {
  const [rows, fields] = await connection.query(
    `SELECT * FROM Users WHERE id = ?`,
    [id]
  );
  return rows;
};

const updateEditUser = async (email, address, fname, id) => {
  const [rows, fields] = await connection.query(
    `UPDATE  Users
    SET email = ? , city = ? , name = ?  WHERE id = ?;`,
    [email, address, fname, id]
  );
};

module.exports = {
  getAllUser,
  getUserById,
  updateEditUser,
};
