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
    this.grade1 = parseFloat(g1);
    this.grade2 = parseFloat(g2);
    this.grade3 = parseFloat(g3);
    this.getGPA = ((this.grade1  + this.grade2 + this.grade3) / 3);

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

    let val1 = parseFloat(g1.val());
    let val2 = parseFloat(g2.val());
    let val3 = parseFloat(g3.val());

    if ( val1 > 4.0 || val2 > 4.0 || val3 > 4.0) {
        validation =  false;
        resp+= 'and out range value in a grade';
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
        console.log(user);
        saveUser(user);
        clearForm();
    }
}

function init() {

}

window.onload = init();