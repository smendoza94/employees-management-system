const db = require('../db/connection');

const displayDatabase = function () {
  const sql = `
  SELECT 
    employees.first_name,
    employees.last_name,
    roles.title,
    roles.salary,
    departments.name AS department
  FROM employees
  LEFT JOIN roles 
  ON employees.role_id = roles.id
  LEFT JOIN departments
  ON roles.department_id = departments.id
  `;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('/nFull Company Information');
    console.table(rows);
  })
};

module.exports = { displayDatabase };