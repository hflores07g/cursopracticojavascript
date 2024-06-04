const h1 = document.querySelector('h1');

const p = document.querySelector('p');

const parrafito = document.querySelector('.parrafito');

const pid = document.querySelector('#pid');

const input = document.querySelector('input');

console.log ({
    h1,
    p,
    parrafito,
    pid,
    input,

});

h1.innerHTML ='Curso profesional de Javascritp'
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');
console.log(h1.getAttribute('class'));
h1.classList.add('verde');
console.log(h1.getAttribute('class'));
h1.classList.remove('verde');
console.log(h1.getAttribute('class'));
const img =document.createElement('img');
img.setAttribute('src','https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg');

pid.append(img);

const pResult =document.querySelector('#resultado');

const input1 =document.querySelector('#calculo1');
const input2 =document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');

function btnOnclick() {
    const sumaInputs =(input1.value + input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}