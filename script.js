
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

    //Stage changue

    if(event.target.classList.value === "button operator" && fase1 && operand1!=""){
        fase1=false
        fase2=true
    }

    //Fase 1
    if(event.target.classList.value === "button number" && fase1){
        operand1 += event.target.innerText
        display1.innerText = operand1
    }

    if((event.target.classList.value === "button dot") && fase1){
        if(!operand1.includes(".")){
            operand1 += event.target.innerText
            display1.innerText = operand1
            
        }
    }

    if((event.target.classList.value === "button text delete") && fase1){
            operand1 = operand1.slice(0,-1)
            display1.innerText = operand1
    }

    if((event.target.classList.value === "button text clear") && fase1){
        operand1 = ""
        display1.innerText = operand1

    
    }
    //Fase 2 
    if(event.target.classList.value === "button number" && fase2){
        operand2 += event.target.innerText
        display1.innerText = operand2
    }

    if((event.target.classList.value === "button dot") && fase2){
        if(!operand2.includes(".")){
            operand2 += event.target.innerText
            display1.innerText = operand2   
        }
    }

    if((event.target.classList.value === "button text delete") && fase2){
            operand2 = operand2.slice(0,-1)
            display1.innerText = operand2
    }

    if(event.target.classList.value === "button operator" && fase2 && operand2===""){
        operator = event.target.innerText
        display1.innerText = ""
        display2.innerText = operand1 + " " + operator
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