
function sum(){

    const firstValue = document.getElementsByClassName("first-value")[0].value;
    const secondValue = document.getElementsByClassName("second-value")[0].value;
    const sum = parseInt(firstValue) + parseInt(secondValue);

    document.getElementsByClassName("result")[0].innerHTML = sum;
   
}

function subtraction(){

    const firstValue = document.getElementsByClassName("first-value")[0].value;
    const secondValue = document.getElementsByClassName("second-value")[0].value;
    const subtraction = parseInt(firstValue) - parseInt(secondValue);

    document.getElementsByClassName("result")[0].innerHTML = subtraction;

}

function multiplication(){

    const firstValue = document.getElementsByClassName("first-value")[0].value;
    const secondValue = document.getElementsByClassName("second-value")[0].value;
    const multiplication = parseInt(firstValue) * parseInt(secondValue);

    document.getElementsByClassName("result")[0].innerHTML = multiplication;

}

function division(){

    const firstValue = document.getElementsByClassName("first-value")[0].value;
    const secondValue = document.getElementsByClassName("second-value")[0].value;
    const division = parseInt(firstValue) / parseInt(secondValue);

    document.getElementsByClassName("result")[0].innerHTML = division;

}

function potentiation(){

    const firstValue = document.getElementsByClassName("first-value")[0].value;
    const secondValue = document.getElementsByClassName("second-value")[0].value;
    const potentiation = parseInt(firstValue) ** parseInt(secondValue);

    document.getElementsByClassName("result")[0].innerHTML = potentiation;

}

function highestValue(){

    const firstValue = document.getElementsByClassName("first-value")[0].value;
    const secondValue = document.getElementsByClassName("second-value")[0].value;
    
    const highestValue = parseInt(firstValue) > parseInt(secondValue) ?  
    document.getElementsByClassName("result")[0].innerHTML = "O primeiro valor é maior!" :
    document.getElementsByClassName("result")[0].innerHTML = "O segundo valor é maior!";


}

