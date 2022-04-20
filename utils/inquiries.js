const inquirer = require('inquirer');

inquirer.prompt([
    {
      type: 'list', name: 'menu', message: 'Main Menu:',
      choices: ['View Depatments','View Roles','View Employees',
      'Add Department','Add Role','Add Employee','Update Employee']
    }
  ])
  .then((answers) => {
    if (answers === 'View Depatments') {
      
    } else if (answers === 'View Roles') {

    } else if (answers === 'View Employees') {

    } else if (answers === 'Add Department') {

    } else if (answers === 'Add Role') {

    } else if (answers === 'Add Employee') {

    } else if (answers === 'Update Employee'){

    }
  })
  .catch((error) => {
      console.log(error.message);
  })