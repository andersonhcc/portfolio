let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let size = document.querySelector('#valor');
let password = document.querySelector('#password');

let hide = document.querySelector('#container-password');


let caracteres_senha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
let senha_gerada = "";

size.innerHTML = sliderElement.value;

slider.oninput = function(){
    size.innerHTML = this.value;
}

function GerarSenha(){
    
    let senha = "";
    
    for(let i = 0, n = caracteres_senha.length; i<sliderElement.value; ++i){
        senha+= caracteres_senha.charAt(Math.floor(Math.random()* n));
    }
    
    hide.classList.remove("hide");
    password.innerHTML = senha;
    senha_gerada = senha;
}

function CopiarSenha(){

    navigator.clipboard.writeText(senha_gerada);


}
