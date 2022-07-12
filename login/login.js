// const container = document.querySelector(".container"),
// pwShowHide = document.querySelectorAll(".showHidePw"),
// signUp = document.querySelector(".signup-link"),
// login = document.querySelector(".login-link"),
passwordInput = document.getElementById('password');
icon = document.getElementById('icon-login');

function show(){
    if(passwordInput.type ==="password"){
        passwordInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
    }else{
        passwordInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
    }
}

// signUp.addEventListener("click", ( )=>{
//     container.classList.add("active");
// });
// login.addEventListener("click", ( )=>{
//     container.classList.remove("active");
// });

// const URL = 'https://webapiapplication.herokuapp.com/api/account/login'
// fetch(URL)
//     .then()