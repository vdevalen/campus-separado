const formulario= document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones = { //expresiones regulares//
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


// formulario.
passwordInput = document.getElementById('password-input');
passwordInput2 = document.getElementById('password-input2');
icon = document.getElementById('icon');
icon2 = document.getElementById('icon2');

function eyeLogo(){
    if(passwordInput.type ==="password"){
        passwordInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
    }else{
        passwordInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
    }
}

function eyeLogo2(){
    if(passwordInput2.type ==="password"){
        passwordInput2.type = "text";
        icon2.classList.replace("uil-eye-slash", "uil-eye");
    }else{
        passwordInput2.type = "password";
        icon2.classList.replace("uil-eye", "uil-eye-slash");
    }
}

//validaciones 

const camos= {
    cedula: false,
    nombre: false,
    apellido: false,
    email: false,
    password-input: false,
    password-input2: false
}
