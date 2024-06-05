const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra
const validacionEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
const validacionPassword = (password) => {
    return password && password.length >= 6 && tieneMayuscula(password)
}


const login = () => {
    const usuario = {
        email: null,
        password: null
        
    } 
    let email = prompt('Ingrese un email')
    while(!validacionEmail(email)){
        email = prompt('Error email invalido: ingrese nuevamente el email')

    }
    usuario.email = email
    let password = prompt('Ingrese la password que tenga mas de 6 caracteres y una mayuscula')
    while(!validacionPassword(password)){
        password = prompt('Error password invalida, vuelva a ingresar una password de 6 caracteres y una mayuscula')
    
    }
    usuario.password = password
    alert(`Usuario ${usuario.email} registrado`)
    return usuario 

}

/* let usuarioRegistrado = login()
localStorage.setItem(
    'user', 
    JSON.stringify(usuarioRegistrado)
)

console.log(JSON.parse(localStorage.getItem('user'))) */




/* const validarOperacion = (operador) => {
    return operador && operador === '+' || operador === '-'
}

const validarNumero = (numero) => {
    return numero && !isNaN(numero)
}

const calculadora = () =>{
    
    const operacion = {
        numero1: null,
        numero2: null,
        resultado: null
    }

    let operador = prompt('Ingresa un operador')
    while(!validarOperacion(operador)){
        operador = prompt('error solo son validas las operaciones "+" o "-"')

    }

    let numero1 = prompt('Ingresa un numero')
    while(!validarNumero(numero1)){
        numero1 = prompt('error numero no valido')

    }

    let numero2 = prompt('Ingresa un numero')
    while(!validarNumero(numero2)){
        numero2 = prompt('error numero no valido')

    }
    
    return operacion
    
}

calculadora() */

