const input = document.getElementById("loginInputEmail")
const senha = document.getElementById("loginInputPassword")
const btn = document.querySelector(".login__button")

const msg = document.getElementById("mensagem")

btn.addEventListener("click", validaDados)

function validaDados(){
  event.preventDefault()

  // Capturando o que foi digitado no input
  const emailValor = input.value
  const senhaValor = senha.value

  if(emailValor == '') {
    msg.textContent = "Por favor, preencha o seu email"
    input.focus()
  } else if (senhaValor == ''){
    msg.textContent = "Por favor, cadastre uma senha"
    senha.focus()
  } else {
    msg.textContent = "Parabéns, cadastro realizado com sucesso"
    input.value = ""
    senha.value = ""
  }
}
