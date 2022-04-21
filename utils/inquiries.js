const inquirer = require('inquirer');
const { displayDatabase } = require('./displayDatabase');
const { viewDepartments, addDepartments } = require('./departments');

const inquiries = function () {
  inquirer.prompt([
      {
        type: 'list', name: 'menu', message: 'Main Menu:',
        choices: ['Show All','View Depatments','View Roles','View Employees',
        'Add Department','Add Role','Add Employee','Update Employee']
      }
    ])
    .then((answers) => {
      if (answers.menu === 'Show All') {
        displayDatabase(); inquiries();
      }
      if (answers.menu === 'View Depatments') {
        viewDepartments(); inquiries();
      } 
      if (answers.menu === 'View Roles') {
  
      } 
      if (answers.menu === 'View Employees') {
  
      } 
      if (answers.menu === 'Add Department') {
  
      } 
      if (answers.menu === 'Add Role') {
  
      } 
      if (answers.menu === 'Add Employee') {
  
      } 
      if (answers.menu === 'Update Employee'){
  
      }
    })
    .catch((error) => {
        console.log(error.message);
    })
};

inquiries();

module.exports = inquiries;