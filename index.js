const { mainMenu } = require('./utils/index.js');
mainMenu();

// const db = require('./db/connection');

// const getDepartmentList = () => {
//   const sql = `SELECT departments.name FROM departments`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     // console.log(rows);
//     const list = [];
//     for (i = 0; i < rows.length; i++) {
//       list.push(row[i].name);
//     };
//     return list;
//   })
// };
// console.log(getDepartmentList());