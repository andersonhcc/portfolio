const emailCerto = 'teste@gmail.com';
const senhaCerta = '123';

function clicou (){
   
   var emailteste = document.querySelector("#email1").value;
   var senhateste = document.querySelector("#senha").value;


if (emailteste != '' && senhateste != '') {

      var resultado = this.login (emailteste,senhateste);

      if (resultado== true) {
         alert("Login efetuado com sucesso.")
      }
      else{
         alert ("Email e/ou senha inválidos.")
      }


}else{

   alert("Por favor, preencha seus dados.");
  }    
}



function login (emailteste,senhateste) {

   if (emailteste == emailCerto && senhateste == senhaCerta) {
      return true;
   }
   else{
      return false
   }

}