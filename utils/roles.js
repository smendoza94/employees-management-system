const inquirer = require("inquirer");
const db = require('../db/connection');
const { mainMenu } = require('./index');

const viewRoles = function() {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("\nRoles Table")
    console.table(rows);
  });
};

const addRoles = function() {

};

module.exports = { viewRoles, addRoles };