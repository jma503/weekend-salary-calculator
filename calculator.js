    let infoInput = document.getElementById("infoInput");
    infoInput.addEventListener("submit", (event) => {
        event.preventDefault();
     
    let firstNameVal = document.querySelector('#firstName').value;
    let lastNameVal = document.querySelector('#lastName').value;
    let IDVal = document.querySelector('#ID').value;
    let titleVal = document.querySelector('#title').value;
    let annualSalaryVal = document.querySelector('#annualSalary').value;

    
    let employeeTable = document.querySelector('#employeeData');
    employeeTable.innerHTML += `
        <tr>
            <td>${firstNameVal}</td>
            <td>${lastNameVal}</td>
            <td>${IDVal}</td>
            <td>${titleVal}</td>
            <td>${annualSalaryVal}</td>
            <td><button onClick = 'deleteRow(event)' class="Employees">Delete</button></td>
        </tr>`;
        
    calculateTotalAnnualSalaries();
    });

//append total monthly cost to the DOM by adding all annual salary and dividing it by 12
function calculateTotalAnnualSalaries (){
    let table = document.getElementById("employeeData");
    let totalAnnualSalaries = Array.from(table.rows).reduce((total, row) => {
    let salary = row.cells[4].innerHTML;
    return total + parseFloat(salary);
  }, 0);
    document.getElementById("totalMonthlyCost").innerHTML = "$" + (totalAnnualSalaries /12).toFixed(2);
  }
  
  
//delete function to delete row in the table
function deleteRow(event) {
    console.log(event.target.parentElement);
    event.target.parentElement.parentElement.remove();
}
