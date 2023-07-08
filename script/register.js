let email = $("#txtEmail");
let pass = $("#txtPassword");
let fname = $("#txtName");
let lname = $("#txtLastname");
let age = $("#txtAge");
let g1 = $("#txtGrade1");
let g2 = $("#txtGrade2");
let g3 = $("#txtGrade3");

/**
 * Constructor for user 
 * @param {*email for user} e 
 * @param {*password for user} p 
 * @param {*name for user} n 
 * @param {*last name for user} l 
 * @param {*age for user} a 
 * @param {*grade 1 for user} g1 
 * @param {*grade 2 for user} g2 
 * @param {*grade 3 for user} g3 
 */

function User(e, p, n, l, a, g1, g2, g3) {
    this.email = e;
    this.pass = p;
    this.name = n;
    this.last = l;
    this.age = a;
    this.grade1 = g1;
    this.grade2 = g2;
    this.grade3 = g3;
}

function clearForm() {
    email.val("");
    pass.val("");
    fname.val("");
    lname.val("");
    age.val("");
    g1.val("");
    g2.val("");
    g3.val("");
}

function validateUser() {
    var validation = true;
    var resp = "ERROR IN A FORM:";

    if (!email.val()) {
        validation = false;
        resp+= " EMAIL"
    }

    if (!pass.val()) {
        validation = false;
        resp+= " PASSWORD"
    }

    if (!fname.val()) {
        validation = false;
        resp+= " FIRST NAME"
    }

    if (!lname.val()) {
        validation = false;
        resp+= " LAST NAME"
    }

    if (!age.val()) {
        validation = false;
        resp+= " AGE"
    }

    if (!g1.val()) {
        validation = false;
        resp+= " GRADE 1"
    }

    if (!g2.val()) {
        validation = false;
        resp+= " GRADE 2"
    }

    if (!g3.val()) {
        validation = false;
        resp+= " GRADE 3"
    }

    if(!validation){
        alert(resp);
    }

    return validation;
}

function register() {
    if(validateUser()){
        let user = new User(
            email.val(),
            pass.val(),
            fname.val(),
            lname.val(),
            age.val(),
            g1.val(),
            g2.val(),
            g3.val());

        console.log(user.email);
        saveUser(user);
        // clearForm();
    }
}

function init() {

}

window.onload = init();