/* validacion email */

const validarEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

/* validacion password */

const tieneMayuscula = (palabra) => palabra.toLowerCase() !== palabra
const validarPassword = (password) =>{
    return password && password !== null && password.length >= 6 && tieneMayuscula(password)
}


const login = () =>{
    const usuario ={
        email: null,
        password: null
    }

    let solicitarEmail = prompt('ingresa tu email')
    while(!validarEmail(solicitarEmail)){
        alert('error: no es un mail valido')
        solicitarEmail = prompt('ingresa un mail valido')
    }
    usuario.email = solicitarEmail

    let solicitarPassword = prompt('ingresa un password que tenga mas de 6 caracteres y al menos 1 mayuscula')
    while(!validarPassword(solicitarPassword)){
        alert('password invalido')
        solicitarPassword = prompt('ingresa un password valido')
    }

    usuario.password = solicitarPassword

    return usuario
}

console.log(login())