let user = $("#txtEmail");
let pass = $("#txtPass");

function init() {
    /* hook event */

    $('#btnLogin').on("click", () => {
        var username = user.val();
        var password = pass.val();

        if(!username || !password) {
            alert('missing values');
        } else {
            findUser(username, password);
        }

    });
}

window.onload =init;