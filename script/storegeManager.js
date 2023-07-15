const KEY = "users";

function saveUser(user) {
    let usersList = readUser();
    usersList.push(user);
    let val = JSON.stringify(usersList);

    localStorage.setItem(KEY, val);
}

function readUser() {
    let users = localStorage.getItem(KEY);
    
    if (!users) {
        return []; 
    } else {
        return JSON.parse(users);
    }
}

function findUser(user, pass) {
    let users = readUser();
    let flagUser = true;

    for (let i = 0; i < users.length; i++) {
        const u = users[i];

        if(u.email === user){
            flagUser = true
            if(u.pass === pass ) {
                alert("login correct");
                window.location.href = "./user.html";
            } else {
                alert("Password no valid!")
            }
            break;
        } else {
            flagUser = false;
        }
        
    }

    if (!flagUser) {
        alert("User not exist");
    }
}
