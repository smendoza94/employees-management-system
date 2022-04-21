const inquirer = require('inquirer');
const { displayDatabase } = require('./displayDatabase');
const { viewDepartments, addDepartments } = require('./departments');
const { viewRoles, addRoles } = require('./roles');
const { viewEmployees, addEmployees, updateEmployees } = require('./employees');

const mainMenu = function () {
  inquirer.prompt([
      {
        type: 'list', name: 'menu', message: 'Main Menu:',
        choices: ['Show All','View Depatments','View Roles','View Employees',
        'Add Department','Add Role','Add Employee','Update Employee']
      }
    ])
    .then((answers) => {
      if (answers.menu === 'Show All') { displayDatabase(); mainMenu(); }
      if (answers.menu === 'View Depatments') { viewDepartments(); mainMenu(); } 
      if (answers.menu === 'View Roles') { viewRoles(); mainMenu(); } 
      if (answers.menu === 'View Employees') { viewEmployees(); mainMenu(); } 
      if (answers.menu === 'Add Department') { addDepartments(); mainMenu(); } 
      if (answers.menu === 'Add Role') { addRoles(); mainMenu(); } 
      if (answers.menu === 'Add Employee') { addEmployees(); mainMenu(); } 
      if (answers.menu === 'Update Employee'){ updateEmployees(); mainMenu(); }
    })
    .catch((error) => {
        console.log(error.message);
    })
};

mainMenu();

module.exports = { mainMenu };