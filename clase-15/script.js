if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}
/* validacion email */
const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra
const validacionEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
const validacionPassword = (password) => password && password.length >= 6 && tieneMayuscula(password)

/* Validacion operador y numero */
const validarOperacion = (operador) => {
    const OPERACIONES_DISPONIBLES = ['+', '-', '*', '/']
    return OPERACIONES_DISPONIBLES.includes(operador)
    
}

const validarNumero = (numero) => numero && !isNaN(numero)

/* funcion CallBack solicitar datos */
const solicitarDato = (objeto) =>{
    let dato = prompt(objeto.mensaje)
    while(!objeto.validacion(dato)){
        dato = prompt(objeto.error)
    }
    return dato
}
const funcionOperacion = (numero1, objetoDeResultado, numero2) => {
    let resultado = 0
    if(objetoDeResultado === '+'){
        
    }
}

const DATOS = {
    EMAIL: {
        mensaje: 'Ingrese un email',
        error: 'Error email invalido: ingrese nuevamente el email',
        validacion: validacionEmail

    },
    PASSWORD: {
        mensaje: 'Ingrese una contraseña con minimo 6 caracteres y 1 mayuscula',
        error: 'Error contraseña invalida, ingresa una contraseña',
        validacion: validacionPassword

    },
    OPERADOR: {
        mensaje: 'Ingresa un operador',
        error: 'error solo son validas las operaciones "+" o "-"',
        validacion: validarOperacion

    },
    NUMERO: {
        mensaje: 'Ingresa un numero',
        error: 'error numero no valido',
        validacion: validarNumero

    }

}


/* funcion login */
const login = () =>{
    const usuario = {
        email: null,
        password: null
        
    }   
    usuario.email = solicitarDato(DATOS.EMAIL)
    usuario.password = solicitarDato(DATOS.PASSWORD)
    alert(`Usuario ${usuario.email} registrado`)
    return usuario 

}

/* guardar en historial el email */
let usuarioRegistrado = login()
localStorage.setItem(
    'historial', 
    JSON.stringify(usuarioRegistrado)
)

/* funcion calculadora */
const calculadora = () => {
    const operacion = {
        operador: '',
        numero1: null,
        numero2: null,
        resultado: null

    }
    operacion.operador = solicitarDato(DATOS.OPERADOR)
    operacion.numero1 = solicitarDato(DATOS.NUMERO)
    operacion.numero2 = solicitarDato(DATOS.NUMERO)
    if(operacion.operador === '+') {
        operacion.resultado = Number(operacion.numero1) + Number(operacion.numero2)

    } 
    else if(operacion.operador === '*'){
        operacion.resultado = operacion.numero1 * operacion.numero2
    }
    else if(operacion.operador === '/'){
        operacion.resultado = operacion.numero1 / operacion.numero2
    }
    else if(operacion.operador === '-'){
        operacion.resultado = operacion.numero1 - operacion.numero2

    }
    alert(`El resultado de ${operacion.numero1} ${operacion.operador} ${operacion.numero2} es ${operacion.resultado} `)
    return operacion
    
}

calculadora()

