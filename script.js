
const display1 = document.body.querySelector((".Display.first"))
const display2 = document.body.querySelector((".Display.second"))


let operand1=""
let operand2=""
let operator=""

//Used to determine the proceding stage
let fase1 = true // Inputing the first operand and inputing or modifying the operator
let fase2 = false // Inputing the second operand and calling the math function


document.body.addEventListener("click",(event)=>{
    event.target.blur()
    //Stage changue

    if(event.target.classList.value === "button text clear"){
        fase1=true
        fase2=false
        operand1=""
        operand2=""
        operator=""
        display1.innerText=""
        display2.innerText=""
    }

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

    if(event.target.classList.value === "button equal" && fase2 && operand2!==""){
        display2.innerText = operand1 + " " + operator + " " + operand2 + " = "
        let result = mathFunction(operand1,operator,operand2)
        display1.innerText = result
        
        operand1 = result.toString()
        operand2 = ""

        //Changue of state
        fase1 = true
        fase2 = false
    }
})

document.body.addEventListener("keydown",(event)=>{
    event.preventDefault()
    if(event.key === "Delete"){
        
        fase1=true
        fase2=false
        operand1=""
        operand2=""
        operator=""
        display1.innerText=""
        display2.innerText=""
    }
 
    if((event.key == "+" || event.key == "-" || event.key == "%" || event.key == "/" || event.key == "x" || event.key == "*") && fase1 && operand1!="" ){
       
        fase1=false
        fase2=true
    }

    //Fase 1
    
    if(("0123456789").includes(event.key) && fase1){
        operand1 += event.key
        display1.innerText = operand1
    }

    if(event.key =="." && fase1){
        if(!operand1.includes(".")){
            operand1 += event.key
            display1.innerText = operand1
            
        }
    }

    if((event.key === "Backspace") && fase1){
            operand1 = operand1.slice(0,-1)
            display1.innerText = operand1
    }
    
    //Fase 2 
    if("0123456789".includes(event.key) && fase2){
        operand2 += event.key
        display1.innerText = operand2
    }

    if((event.key === ".") && fase2){
        if(!operand2.includes(".")){
            operand2 += event.key
            display1.innerText = operand2   
        }
    }

    if((event.key === "Backspace") && fase2){
            operand2 = operand2.slice(0,-1)
            display1.innerText = operand2
    }
    if("+-%*x/".includes(event.key) && fase2 && operand2===""){
        operator = event.key
        display1.innerText = ""
        display2.innerText = operand1 + " " + operator
    }

    if(event.key === "=" && fase2 && operand2!==""){
        display2.innerText = operand1 + " " + operator + " " + operand2 + " = "
        let result = mathFunction(operand1,operator,operand2)
        display1.innerText = result
        

        operand1 = result.toString()
        operand2 = ""

        //Changue of state
        fase1 = true
        fase2 = false
    }
})

function mathFunction(operand1,operator,operand2){
    operand1=parseFloat(operand1)
    operand2=parseFloat(operand2)

    let result;
    switch (operator){
        case "+":
            result = add(operand1,operand2)
            return result
        case "-":
            result = substract(operand1,operand2)
            return result
        case ("%" || "/"):
            result = divide(operand1,operand2)
            return result
        case ("x" || "*"):
            result = multiply(operand1,operand2)
            return result
    }
}
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