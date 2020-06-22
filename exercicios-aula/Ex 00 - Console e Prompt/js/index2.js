let box = document.querySelector('#box')
let btn = document.querySelector('#btn')

// function showAlert(){
//     alert('Hello World');
// }

function showAlert(e){
    console.alert(e);
}

function showAlert(e){
    // box.innerHTML = "Event:" + e.type + "<br>";
    // box.innerHTML += "Event type:" + e.target + "<br>";
    // box.innerHTML += "Event Id:" + e.target.id + "<br>";
}

// btn.addEventListener("click", showAlert )

btn.addEventListener("mousedown", showAlert )


// MOUSE EVENTS

function inputEvents(e){
    box.innerHTML = "Event:" + e.type + "<br>";
}

// btn.addEventListener("mousedown", inputEvents )
// btn.addEventListener("mouseup", inputEvents )
// btn.addEventListener("mouseover", inputEvents )
// btn.addEventListener("mouseleave", inputEvents )
btn.addEventListener("mouseenter", inputEvents )


// INPUT EVENTS

function inputEvents (e){
    box.innerHTML = "Event:" + e.type;
    console.log(e.type)
}

let input = document.querySelector('input[type="text"]')

// input.addEventListener("keydown", inputEvents)
// input.addEventListener("keyup", inputEvents)
input.addEventListener("focus", inputEvents)
input.addEventListener("blur", inputEvents)