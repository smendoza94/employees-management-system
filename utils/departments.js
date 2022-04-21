const inquirer = require("inquirer");
const db = require('../db/connection');
const { mainMenu } = require('./index');

const viewDepartments = function() {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("\nDepartments Table")
    console.table(rows);
  });
};

const addDepartments = function() {
  inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is the name of the department you want to add?'
    }
  ])
  .then((answers) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [answers.name];
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('Update Successful!', body);
    })
  })
  .catch((error) => {
    console.log(error.message);
  })
};

module.exports = { viewDepartments, addDepartments };