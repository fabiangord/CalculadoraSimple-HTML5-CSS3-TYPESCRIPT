"use strict";
const numeroUno = document.querySelector('.uno');
const numeroDos = document.querySelector('.dos');
const formulario = document.querySelector('.formulario');
const btn = document.querySelector('.btn-large');
const btnResta = document.querySelector('.btn-uno');
const resultadoV = document.querySelector('.resultado');
const alerta = document.querySelector('.alert');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    alerta.style.display = 'none';
    const resultadoSuma = parseInt(numeroUno.value) + parseInt(numeroDos.value);
    if (isNaN(resultadoSuma)) {
        alerta.style.display = 'block';
        resultadoV.textContent = '';
    }
    else {
        resultadoV.textContent = `Resultado: ${resultadoSuma}`;
    }
});
btnResta.addEventListener('click', (e) => {
    e.preventDefault();
    alerta.style.display = 'none';
    const resultadoResta = parseInt(numeroUno.value) - parseInt(numeroDos.value);
    if (isNaN(resultadoResta)) {
        alerta.style.display = 'block';
        resultadoV.textContent = '';
    }
    else {
        resultadoV.textContent = `Resultado: ${resultadoResta}`;
    }
});
