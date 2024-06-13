const numeroHTML = document.getElementById('numero')
const btn1HTML = document.querySelector('.btn-1')
const btn2HTML = document.querySelector('.btn-2')

const renderizarContador = () =>{
    numeroHTML.innerText = estadoContador
}

const sumarNumero = () => {
    estadoContador = estadoContador + 1 
    renderizarContador() 
}

const restarNumero = () => {
    if(estadoContador > 1){
    estadoContador = estadoContador - 1
    }
    
    renderizarContador()
}


let estadoContador = 1
renderizarContador()

btn1HTML.addEventListener('click', sumarNumero)
btn2HTML.addEventListener('click', restarNumero)




