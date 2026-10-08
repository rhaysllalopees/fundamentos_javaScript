const formLogin = document.querySelector('#form-login')
const userLogin =document.querySelector('#user-login')
const passawordLogin = document.querySelector('#passaword-login')
const dataUser = document.querySelector('#dados-usuario')

//criar um evento de escuta para o formulario
if(formLogin) {
  formLogin.addEventListener("submit",signIn)
}

//declarar nossa função 
function signIn(event){
  event.preventDefault()

  //condicional; validar os campos. 
  if(userLogin.value === "" ||  passawordLogin.value === ""){
    alert("Fields is required")
  } else{

    const user ={ 
      usuario: userLogin.value,
      senha: passawordLogin.value,
    }

    // salvar no local Storage
    localStorage.setItem("@data-user", JSON.stringify(user))
    window.location.href= " ../pages/painel.html"

  }

}

document.addEventListener('DOMContentLoaded',()=> {
  if (dataUser){
    getDataUser()
  }
});


function getDataUser(){
  const storage = localStorage.getItem('@data-user');

  if (storage){
    const userObj = JSON.parse(storage)
     
    dataUser.textContent = `Bem Vindo: ${userObj.usuario}`;
  } else{dataUser.textContent = 'nenhum usuario logado.';}

}