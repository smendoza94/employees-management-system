const inquirer = require("inquirer");
const db = require('../db/connection');
// const { mainMenu } = require('./index');

// const departments = function() {
//   const sql = `SELECT departments.name FROM departments`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     let departmentList = [];
//     for (i = 0; i < rows.length; i++) {
//       let row = rows[i].name;
//       departmentList = departmentList.push(row);
//     };
//     return departmentList;
//   })
// }; 

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
  // let list = [];
  // const sqlDisp = `SELECT departments.name FROM departments`;
  // db.query(sqlDisp, (err, rows) => {
  //   if (err) {
  //     console.log(err.message);
  //     return;
  //   }
  //   // console.log(rows);
  //   for (i = 0; i < rows.length; i++) {
  //     list.push(row[i].name);
  //   };
  // });

  inquirer.prompt([
    {
      type: 'text',
      name: 'title',
      message: 'What is the title of the role you want to add?'
    },
    {
      type: 'number',
      name: 'salary',
      message: 'What is the salary of this role?'
    },
    {
      type: 'text',
      name: 'department',
      message: 'what department does this role belong?',
      // choices: list, // list is from db.query for department names list
    }
  ])
  .then((answers) => {
    const sql = `INSERT INTO roles (title, salary, department) VALUES (?,?,?)`;
    const params = [answers.title, answers.salary, answers.department];
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

module.exports = { viewRoles, addRoles };