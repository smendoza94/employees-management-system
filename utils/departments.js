const inquirer = require("inquirer")

const viewDepartments = function() {
  const sql = `SELECT * FROM department ORDER BY last_name`
}

const addDepartments = function() {
  inquirer.prompt([
    {
      type: '',
    }
  ])
}

module.exports = { viewDepartments, addDepartments };