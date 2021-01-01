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

// // check if stored data from register-form is equal to entered data in the   login-form
// function check() {

//     // stored data from the register-form
//     var storedName = localStorage.getItem('name1');
//     var storedPw = localStorage.getItem('pw');

//     // entered data from the login-form
//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('userPw');

//     // check if stored data from register-form is equal to data from login form
//     if(userName.value == storedName && userPw.value == storedPw) {
//         alert('You are loged in.');
//     }else {
//         alert('ERROR.');
//     }
// }