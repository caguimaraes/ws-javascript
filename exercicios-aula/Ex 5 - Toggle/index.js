// Capturar os botões e a div a ser escondida

let btnEsconder = document.querySelector(".esconder")
let btnMostrar = document.querySelector(".mostrar")
let div = document.getElementById("minhaId")

// Criar função que esconde a div utilizando uma classe criada no CSS
btnEsconder.addEventListener("click", function (){
    div.classList.add("hide")
})

// Criar função que msotra a div retirando uma classe criada no CSS
btnMostrar.addEventListener("click", function(){
    div.classList.remove("hide")
})