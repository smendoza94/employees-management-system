const inquirer = require('inquirer');
const { displayDatabase } = require('./displayDatabase');
const { viewDepartments, addDepartments } = require('./departments');
const { viewRoles, addRoles } = require('./roles');
const { viewEmployees, addEmployees, updateEmployees } = require('./employees');

const mainMenu = function () {
  inquirer.prompt([
      {
        type: 'list', 
        name: 'menu', 
        message: 'Main Menu:',
        choices: [
          'Show All',
          'View Depatments',
          'View Roles',
          'View Employees',
          'Add Department',
          'Add Role',
          'Add Employee',
          'Update Employee',
          'Exit'
        ]
      }
    ])
    .then((answers) => {
      console.log(answers.menu);
      switch (answers.menu) {
        case 'Show All': displayDatabase(); break;
        case 'View Depatments': viewDepartments(); break;
        case 'View Roles': viewRoles(); break;
        case 'View Employees': viewEmployees(); break;
        case 'Add Department': addDepartments(); break;
        case 'Add Role': addRoles(); break;
        case 'Add Employee': addEmployees(); break;
        case 'Update Employee': updateEmployees(); break;
        default: console.log('Leaving program...'); break;
      }
    })
    .catch((error) => {
        console.log(error.message);
    })
};

module.exports = { mainMenu };