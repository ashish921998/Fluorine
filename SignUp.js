// Name and Password from the register-form
var name_1 = document.getElementById('name_1');
var pw = document.getElementById('pw');
var email = document.getElementById("email")
// storing input from register-form
function store() {
    localStorage.setItem('name_1', name_1.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('email',email.value )
}
