$(readyNow);
let employeeList = [];
let fixSalary = 0;
let totalMonthlySalary = 0;

function readyNow() {
    //console.log('helloworld')
    $("#submit").on('click', addUser);
    $("#container").on('click', "#deleteBtn", refreshList);
}
function refreshList() {
    // $(this).parent().parent().remove();
    $(this).closest(`tr`).remove();

}

function addUser() {
    $("userObject").empty();
    //const userName = $(`#firstName`).val()//getter
    //console.log(userName)
    let userObject = {
        userName: $("#firstName").val(),
        userLastName: $("#lastName").val(),
        userId: $("#idNumber").val(),
        userTitle: $("#jobTitle").val(),
        annSalary: $("#annualSalary").val()
    }
    //console.log(userObject)
    employeeList.push(userObject);
    userObject = {
        userName: $("#firstName").val(''),
        userLastName: $("#lastName").val(''),
        userId: $("#idNumber").val(''),
        userTitle: $("#jobTitle").val(''),
        annSalary: $("#annualSalary").val('')
    }
    render();
    monthlyCost();
}
//console.log(employerList)
function render() {
    $("#container").empty();
    for (let userObject of employeeList) {
        const employeeInfo =
            $(`
    <tr> 
        <td>${userObject.userName}</td>
        <td>${userObject.userLastName}</td>
        <td>${userObject.userId}</td>
        <td>${userObject.userTitle}</td>
        <td>${userObject.annSalary}</td>
        <td><button id="deleteBtn">DELETE</button></td>
    </tr>
`);
        $("#container").append(employeeInfo);
    }
}

function monthlyCost() {
    //$("#monthlySal").empty();
    let totalSalary = 0;
    for (let i = 0; i < employeeList.length; i++) {
        let fixSalary = Number(employeeList[i].annSalary);
        totalSalary += fixSalary;
    }
    totalMonthlySalary = totalSalary / 12;
    //totalMonthlySalary / 12
    //console.log(totalMonthlySalary);    
   if (totalMonthlySalary > 20000){
       $("#monthlySal").addClass("redbackground")
   }
    $("#monthlySal").text(formatCurrency(totalMonthlySalary));
}

function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    }).format(number);
  }