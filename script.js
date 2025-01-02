
const display1 = document.body.querySelector((".Display.first"))
const display2 = document.body.querySelector((".Display.second"))


let operand1=""
let operand2=""
let operator=""

//Used to determine the proceding stage
let fase1 = true // Inputing the first operand
let fase2 = false // Inputing the operator or modifyng operator
let fase3 = false // Inputing the second operand


document.body.addEventListener("click",(event)=>{

    if(event.target.classList.value === "button number" && fase1){
        operador1 += event.target.innerText
    }
})

function add(a,b){
    return a + b
}

function substract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a/b
}