/* 
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1

*/
/* const contadorHTML = document.querySelector('.contador')
const botonIncrementarHTML = document.querySelector('.btn-incrementar')
const botonDecrementarHTML = document.getElementById('btn-decrementar')
const mensajeError = document.querySelector('.error')

let estadoContador = 1
contadorHTML.innerText = estadoContador

const renderizarContador = () =>{
    contadorHTML.innerText = estadoContador
}
const renderizarError = (textoError) =>{
    mensajeError.innerText = textoError
}
const limpiarError = () =>{
    if(mensajeError.innerText){
        renderizarError('')
    }
}

const incrementar = () => {
    estadoContador = estadoContador + 1
    limpiarError()
    renderizarContador()
}
const decrementar = () => {
    if(estadoContador > 1){
    estadoContador = estadoContador - 1
    renderizarContador()
    }
    else{
        renderizarError('Error, no se puede decrementar a menos de 1')
    }
    
}
botonIncrementarHTML.addEventListener('click', incrementar)
botonDecrementarHTML.addEventListener('click', decrementar) */

/* const btnComprar = document.getElementById('btn-comprar') */

const contenedorHTML = document.getElementById('contenedor')
const btnCompra = () =>{
    contenedorHTML.innerHTML = `<button id="btn-comprar">Comprar</button>`
    const btnComprar = document.getElementById('btn-comprar')
    btnComprar.addEventListener('click', funcionContador)
}

const funcionContador = () =>{
    contenedorHTML.innerHTML = `
        <button id="btn-decrementar">-</button>
        <span id="contador"></span>
        <button id="btn-incrementar">+</button>
    `
    const contadorHTML = document.getElementById('contador')
    const btnDecrementarContadorHTML = document.getElementById('btn-decrementar')
    const btnIncrementarContadorHTML = document.getElementById('btn-incrementar')

    const renderizarContador = () =>{
        contadorHTML.innerText = estadoContador
    }
    let estadoContador = 1
    contadorHTML.innerText = estadoContador

    const incrementar = () => {
        estadoContador = estadoContador + 1
        renderizarContador()
    }
    const decrementar = () => {
        if(estadoContador > 1){
        estadoContador = estadoContador - 1
        renderizarContador()
        }
        else{
            btnCompra()
        }
    }
    btnDecrementarContadorHTML.addEventListener('click', decrementar)
    btnIncrementarContadorHTML.addEventListener('click', incrementar)
}

btnCompra()
