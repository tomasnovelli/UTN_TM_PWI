/* const nombre2 = ['maria', 'pedro', 'lionel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']
 */
/* 
let posicionLionel = nombre2.indexOf('lionel')
const eliminarLionel = nombre2.splice(posicionLionel, 1)

let poscionLucas = nombre2.indexOf('lucas')
const eliminarAnteriorLucas = nombre2.splice((poscionLucas - 1), 1)

let poscionAbril = nombre2.indexOf('abril')
const agregarSofia = nombre2.splice(poscionAbril, 0, 'sofia')
console.log(nombre2)
 */


/* const nombres2 = ['maria', 'pedro', 'lionel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

let resultado = null

for(let index = 0; index < nombres2.length; index = index + 1){
    resultado = resultado + nombres2[index].length
}

console.log('La cantidad de caracteres es ' + resultado) */


/* const array = ['pepe', 'lucas', 'PEDRO', 'JuaN']
const arrayMayuscula = []
const estaEnMinuscula = (indice) => indice == indice.toLowerCase()
const tieneMayuscula = (indice) => !estaEnMinuscula(indice)

for(let index of array){
    if(tieneMayuscula(index)){
        arrayMayuscula.push(index)
    }
}
console.log(arrayMayuscula) */


const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 6000,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 6000,
        marca: 'samsung'
    },
]

/* crear un array llamado samsung que contenga los productos que sean de la marca samsung */

/* const samsung = []


for(const producto of productos){
    if(producto.marca === 'samsung'){
        samsung.push(producto)
    }
}

console.log(samsung)

 */
/* 

crear una funcion que se llame buscaProducto(string) recibira un string y por cada producto del array de productos verificara si el titulo tiene incluido el string buscado 

esta funcion debe retornar un array de productos

buscar producto ('celular')
*/






const buscarProducto = (busqueda) => {
    const resultadoBusqueda= []
    for(const producto of productos){
        if(producto.title.includes(busqueda)){
            resultadoBusqueda.push(producto)
        }            
    }
    return resultadoBusqueda
}
console.log(buscarProducto('noblex'))