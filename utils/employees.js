const inquirer = require("inquirer");
const db = require('../db/connection');
const { mainMenu } = require('./index');

const viewEmployees = function() {
  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("\nEmployees Table")
    console.table(rows);
  });
};

const addEmployees = function() {

};


const updateEmployees = function() {

}


module.exports = { viewEmployees, addEmployees, updateEmployees }