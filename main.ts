const numeroUno = document.querySelector('.uno')! as HTMLInputElement;
const numeroDos = document.querySelector('.dos')! as HTMLInputElement;
const formulario = document.querySelector('.formulario') as HTMLFormElement;
const btn = document.querySelector('.btn-large') as HTMLButtonElement
const btnResta = document.querySelector('.btn-uno') as HTMLButtonElement
const resultadoV = document.querySelector('.resultado') as HTMLDivElement
const alerta = document.querySelector('.alert') as HTMLDivElement


btn.addEventListener('click', (e:Event)=>{
    e.preventDefault();

    alerta.style.display = 'none'

    const resultadoSuma = parseInt(numeroUno.value) + parseInt(numeroDos.value)
    
    
    
    if(isNaN(resultadoSuma)){
        alerta.style.display = 'block'
        resultadoV.textContent = ''
    }else{
        resultadoV.textContent = `Resultado: ${resultadoSuma}`   
    }
})

btnResta.addEventListener('click', (e)=>{
    e.preventDefault();

    alerta.style.display = 'none'

   
    const resultadoResta = parseInt(numeroUno.value) - parseInt(numeroDos.value)

    if(isNaN(resultadoResta)){
        alerta.style.display = 'block'
        resultadoV.textContent = ''
    }else{
        resultadoV.textContent = `Resultado: ${resultadoResta}`   
    }
})



