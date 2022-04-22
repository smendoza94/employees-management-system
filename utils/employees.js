const inquirer = require("inquirer");
const db = require('../db/connection');

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
  inquirer.prompt([
    {
      type: 'text',
      name: 'firstName',
      message: 'What is the first name of the employee you want to add?'
    },
    {
      type: 'text',
      name: 'lastName',
      message: 'What is the last name of this employee?'
    },
    {
      type: 'text',
      name: 'role',
      message: 'What is the id role of this employee?'
    },
    {
      type: 'text',
      name: 'manager',
      message: 'What is the manager id of this employee?'
    }
  ])
  .then((answers) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [answers.firstName, answers.lastName, answers.role, answers.manager];
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('Update Successful!');
    })
  })
  .catch((error) => {
    console.log(error.message);
  })
};


const updateEmployees = function() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'updateParam',
      message: 'What employee characteristic would you like to update?',
      choices: [`first_name`, `last_name`, `role_id`, `manager_id`]
    },
    {
      type: 'number',
      name: 'indexNewValue',
      message: 'What is the index value of this employee?'
    },
    {
      type: 'text',
      name: 'newValue',
      message: 'What new value would you like to replace it with?'
    },
  ])
  .then((answers) => {
    const sql = `UPDATE employees SET last_name = ? WHERE id = ?`;
    const params = [answers.newValue, answers.indexNewValue];
    db.query(sql, params, (err, result) => {
      // console.log(sql);
      // console.log(params);
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('Update Successful!');
    })
  })
  .catch((error) => {
    console.log(error.message);
  })
}


module.exports = { viewEmployees, addEmployees, updateEmployees }