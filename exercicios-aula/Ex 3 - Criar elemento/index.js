let btn = document.querySelector("#button")

 function minhaFuncao() {
    let criar = document.createElement("p");
    criar.innerHTML = "Este é um novo paragrafo";
    document.body.appendChild(criar);
 }

btn.addEventListener("click", minhaFuncao)

// btn.addEventListener("click", function(){
//     let criar = document.createElement("p");
//     criar.innerHTML = "Este é um novo paragrafo";
//     document.body.appendChild(criar);
// })



