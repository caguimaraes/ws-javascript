
let input = document.querySelector("#name")
let form = document.querySelector("#form")
let addName = document.querySelector('.addName')

form.addEventListener("submit", function(event) {
	event.preventDefault()
    // o prevenDefault ele vai remover o comportamento padrão de carregar a pagina após o submit
    let name = input.value
    addName.innerHTML = name
})

// function mostrarNome(){
//     let name = input.value
//     alert(name)
// }