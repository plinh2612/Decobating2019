var btnsignin = document.getElementById("btn-signIn");
var username = document.getElementById("username-or-email");
var password = document.getElementById("password");
var btnsignup = document.getElementById("btn-signUp");


// con PLinh lm sign up cái đã

btnsignin.addEventListener('click', clksignin);
async function clksignin() {
    console.log("username/password: " + username.value);
    console.log("password: " + password.value);

    let uservalid = false
    let userid = ''
    let userNameEmail = ''
    // get data
    await db.collection('user').get().then((snapshot) => {
        // console.log(snapshot);
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
            console.log(doc.data().username);
            console.log(doc.data().email);
            console.log(doc.data().password);
            console.log(doc.id);
            if ((doc.data().username === username.value || doc.data().email === username.value) && doc.data().password === password.value) {
                uservalid = true
                userid = doc.id;
                userNameEmail = doc.data().username;
                console.log(doc.id);
            }
        });
        if (uservalid == true) {
            console.log("Login successfully");
            console.log(username.value);
            console.log(password.value);
            localStorage.setItem('id', userid);
            localStorage.setItem('username', userNameEmail);
        }
        else if (uservalid == false) {
            alert("This username/email has not been used for register *Or* wrong password.");
        }

        });
}

// // có nút logout r :) sau khi đã login n có cái value trong local storage n bla bla bla
// var hello = document.getElementById("text-SignIn");
// function afterlogin() {
//     hello.textContent = str("Hello" + username);
//     // hide cais nuts login n sign up ddee thanhf log out
// }

// function btnlogout() {
//     localStorage.clear();
//     hello.textContent = "Sign in";
// }
var ifyounotsignin = document.getElementById("ifyounotsignin");
var ifyousignin = document.getElementById("ifyousignin");
setInterval (function() {
    if (localStorage.getItem('id') === null){
    ifyousignin.style.display = "none";
    ifyounotsignin.style.display = "flex";
    console.log("failed to get id");
}
    else {
    ifyounotsignin.style.display = "none";
    ifyousignin.style.display = "flex";
}}, 100);

var log_out = document.getElementById("log-out");
log_out.addEventListener('click', logout);
function logout() {
    localStorage.clear();
    location.reload();
}