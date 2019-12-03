// toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }


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

            var ifyousignin = document.getElementById("ifyousignin");
            ifyousignin.style.display = "flex";
            var ifyounotsignin = document.getElementById("ifyounotsignin");
            ifyounotsignin.style.display = "none";

        }
        else if (uservalid == false) {
            alert("This username/email has not been used for register *Or* wrong password.");
            // var alert = document.getElementById("alert");
            // alert.style.display = "flex";
        }

        });
}

// if ("username"&&"id" in localStorage) {
//     var ifyousignin = document.getElementById("ifyousignin");
//     ifyousignin.style.display = "flex";
// }else {
//     var ifyounotsignin = document.getElementById("ifyounotsignin");
//     ifyounotsignin.style.display = "none";
// }

// if (localStorage.getItem("username") == null) {
//     var ifyounotsignin = document.getElementById("ifyounotsignin");
//     ifyounotsignin.style.display = "none";
// }
// else {
//     var ifyousignin = document.getElementById("ifyousignin");
//     ifyousignin.style.display = "flex"; 
// }

// if(typeof(localStorage.getItem('username'))==="null") {
//     var ifyounotsignin = document.getElementById("ifyounotsignin");
//     ifyounotsignin.style.display = "none";
// }
// else {
//     var ifyousignin = document.getElementById("ifyousignin");
//     ifyousignin.style.display = "flex";
// }

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