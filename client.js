$(readyNow);
let employerList = [];
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
    employerList.push(userObject);
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
    for (let userObject of employerList) {
        const employee =
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
        $("#container").append(employee);
    }
}

function monthlyCost() {
    for (let i = 0; i < employerList.length; i++) {
        let fixSalary = Number(employerList[i].annSalary);
        totalMonthlySalary += fixSalary /12;
        //totalMonthlySalary / 12
        return totalMonthlySalary;
    }
}
console.log(monthlyCost(employerList));