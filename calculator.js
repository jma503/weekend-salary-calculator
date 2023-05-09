
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

    });


// function totalMonthlyCosts (totalAnnualSalary) {
//     let months = 12;
//     return totalAnnualSalary / months;
//     document.querySelector('#totalMonthlyCost').innerHTML = `Total Costs: ${totalMonthlyCosts}`;
// }   

//Need to calculate monthly costs and append to DOM
   

function deleteRow(event) {
    console.log(event.target.parentElement);
    event.target.parentElement.parentElement.remove();
}

// document.querySelector("#totalMonthlyCost").innerHTML = `Total Costs: ${totalMonthlyCosts}`;