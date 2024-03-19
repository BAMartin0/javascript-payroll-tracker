// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeeArray = [];
let advance = true;


// Collect employee data
const collectEmployees = function () {
   // TODO: Get user input to create and return an array of employee objects
  while (advance) {
    const firstName = prompt("What is your first name?");
    const lastName = prompt("What is your last name?");
    const salary = prompt("What is your salary?");

  console.log(firstName)
  console.log(lastName)
  console.log(salary)

const employee = {
  firstName,
  lastName,
  salary: parseInt(salary),
}

employeeArray.push(employee)

const cont = confirm("Would you like to add another Employee?");
  if (!cont) {
    advance = false
  } 
  }
  console.log(employeeArray)
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // const sum() = peopleFacts[2]
  let sum = 0;
   for (let i = 0; i < employeeArray.length; i++) {
     console.log(employeeArray[i].salary)
     sum = sum + employeeArray[i].salary
   }
  const averageSalary = (sum / employeeArray.length); 
  
   console.log(`The average salary for our ${employeeArray.length} employee(s) is ${averageSalary}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeeArray.length);

console.log(employeeArray[randomIndex])
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line: 
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);