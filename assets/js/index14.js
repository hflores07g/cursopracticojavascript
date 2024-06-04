const pResult =document.querySelector('#resultado');

const input1 =document.querySelector('#calculo1');
const input2 =document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
btn.addEventListener('click',btnOnclick);

function btnOnclick() {
    const sumaInputs =(input1.value + input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}