
function displayUser(userArray) {
    const TBODY = $("#userTable tbody");

    var tr;
    let i = 0;
    userArray.forEach(user => {
        
        tr += `
        <tr id='${i}'>
            <td>${user.email}</td>
            <td>${user.name} ${user.last}</td>
            <td>${user.age}</td>
            <td>${user.grade1}</td>
            <td>${user.grade2}</td>
            <td>${user.grade3}</td>
            <td>${user.getGPA}</td>
        </tr>    
        `;
        i++;
    });

    TBODY.append(tr);


    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].getGPA <= 2.0) {
            $('.table>tbody>#' + i).addClass('fail');
        }
    }

}

function init(){
    let users = readUser();
    displayUser(users);
}

window.onload = init;