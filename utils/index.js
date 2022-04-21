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
      console.log(answers);
      switch (answers.menu) {
        case 'Show All': displayDatabase(); break;
        case 'View Depatments': viewDepartments(); break;
        case 'View Roles': viewRoles(); break;
        case 'View Employees': viewEmployees(); break;
        case 'Add Department': addDepartments(); break;
        case 'Add Role': addRoles(); break;
        case 'Add Employee': addEmployees(); break;
        case 'Update Employee': updateEmployees(); break;
      }

      // if (answers.menu === 'Show All') { displayDatabase(); }
      // if (answers.menu === 'View Depatments') { viewDepartments(); } 
      // if (answers.menu === 'View Roles') { viewRoles(); } 
      // if (answers.menu === 'View Employees') { viewEmployees(); } 
      // if (answers.menu === 'Add Department') { addDepartments(); } 
      // if (answers.menu === 'Add Role') { addRoles(); } 
      // if (answers.menu === 'Add Employee') { addEmployees(); } 
      // if (answers.menu === 'Update Employee'){ updateEmployees(); }
    })
    .catch((error) => {
        console.log(error.message);
    })
};

module.exports = { mainMenu };