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

