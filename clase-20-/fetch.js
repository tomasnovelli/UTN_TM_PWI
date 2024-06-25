/* fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET'
}) */


/* 
Fetch es una funcion que me permite hacer peticiones HTTP, recibe 2 parametros
1) URL (un string que sera la url a la que vamos a consultar o peticionar)
1) un objeto de configuracion de la peticion
*/
/* console.log('hola')
console.log('chau')
 */

/* async await */

/* const solcitarUsuarios = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
    console.log(respuesta)
    const resultado = await respuesta.json()
    console.log(resultado)
    /* Trabajaran la logica de renderizado */


/* solcitarUsuarios() */


/* 
Ejecutar una peticion HTTP con metodo GET a esta direccion: https://jsonplaceholder.typicode.com/posts

Una vez obtenido el JSON de esa direccion deberas renderizar todos los posts en html en un div con la sig estructura

<div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button>♥</button>
</div>
*/

const solicitarPost = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    })
    const resultado = await respuesta.json()
    console.log(resultado)

    let plantillaHTML = ``
    for(const post of resultado){
        plantillaHTML = plantillaHTML + `
        <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button>♥</button>
        </div>
        `
    }
    const contenedorDePosteos = document.getElementById('contenedorDePosteos')

    contenedorDePosteos.innerHTML = plantillaHTML
}


solicitarPost()