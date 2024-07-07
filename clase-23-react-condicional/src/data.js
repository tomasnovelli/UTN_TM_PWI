
/*
Van a crear un componente llamado Navbar y van a pasarle por props el objeto userData
Si isLogged es false entonces mostraran un button que diga 'login'
Si isAdmin es true mostraran un <button></button> que diga 'crear producto'
OPCIONAL:
Si lang esta en 'en' todos los textos deben ser en ingles
Si lang esta en 'es' todos los textos deben ser en español
*/

const userData = {
    isLogged: false,
    isAdmin: true,
    lang: 'es'
}

const dataLenguaje = {
    en: {
        home: 'Home',
        loguear: 'LogIn',
        create: 'Create Product',
    },
    es: {
        home: 'Inicio',
        loguear: 'Registrarse',
        create: 'Crear Producto'
    }
}

export { userData, dataLenguaje }