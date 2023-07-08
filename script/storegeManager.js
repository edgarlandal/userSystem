function saveUser(user) {
    let val = JSON.stringify(user);
    localStorage.setItem("users", val);
}