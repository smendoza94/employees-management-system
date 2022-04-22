# Employees Management System
A command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Description
View and manage the departments, roles, and employees in my company. 

## Demo
Video Demonstration: https://drive.google.com/file/d/1krcGPv-2gkpdEe-vYx6JScrplhd1hx2a/view

![demo thumbnail](/img/demo_of_program.jpg)

## Installation
Ensure you have node.js downloaded. Git Clone the repo into your local drive. Navigate your terminal to the cloned directory (folder). Run $node index.js. Follow the prompts to enter new employees. Once finished a table with all the input data will be saved.

## Uses
- [ ] WHEN I start the application THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- [ ] WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids
- [ ] WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- [ ] WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- [ ] WHEN I choose to add a department THEN I am prompted to enter the name of the department and that department is added to the database
- [ ] WHEN I choose to add a role THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database 
- [ ] WHEN I choose to add an employee THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- [ ] WHEN I choose to update an employee role THEN I am prompted to select an employee to update and their new role and this information is updated in the database
- [ ] BONUS - Update employee managers, View employees by manager, View employees by department, Delete departments, roles, and employees. & View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

![concept mockup](./img/12-sql-homework-demo-01.png)

## License
Refer to [LICENSE](/LICENSE).
