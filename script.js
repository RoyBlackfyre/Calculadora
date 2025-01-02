

let operador1=""


document.body.addEventListener("click",(event)=>{

    if(event.target.classList.value === "button number"){
        operador1 += event.target.innerText
    }
    console.log(operador1)
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