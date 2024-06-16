
/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/

const categorias = ['tecnologia', 'hogar', 'otros']
const validarTitulo = (titulo) => titulo && isNaN(titulo) && titulo.length >= 4
const validarPrecio = (precio) => precio && !isNaN(precio) && precio >= 1
const validarDescripcion = (descripcion) => descripcion && isNaN(descripcion) && descripcion.length >= 10

const validarCatergoria = (categoria) => categorias.includes(categoria)

const validarMarca = (marca) => marca && isNaN(marca) && marca.length >= 3

/* TODO: hacer el diccionario de datos */

const registrarProducto = () =>{
    const producto ={
        titulo: '',
        precio: null,
        descripcion: '',
        categoria: '',
        marca: ''
    }

    let solicitarTitulo = prompt('ingresa un titulo con mas de 4 caracteres')
    while(!validarTitulo(solicitarTitulo)){
        alert('ERROR DE DATOS')
        solicitarTitulo = prompt('ingresa un titulo con mas de 4 caracteres alfabeticos')
    }
    producto.titulo = solicitarTitulo

    let solicitarPrecio = prompt('ingresa un precio')
    while(!validarPrecio(solicitarPrecio)){
        alert('ERROR DE DATOS')
        solicitarPrecio = prompt('ingresa un precio positivo mayor a 1')
    }
    producto.precio = `$${solicitarPrecio}`

    let solicitarDescripcion = prompt('ingresa una descripcion del producto')
    while(!validarDescripcion(solicitarDescripcion)){
        alert('ERROR DE DATOS')
        solicitarDescripcion = prompt('ingresa una descripcion con min 10 caracteres alfabeticos')
    }
    producto.descripcion = solicitarDescripcion

    let solicitarCategoria = prompt('ingresa una categoria entre tecnologia, hogar, otros')
    while(!validarCatergoria(solicitarCategoria)){
        alert('ERROR DE DATOS')
        solicitarCategoria = prompt('solo podes ingresar categorias tecnologia, hogar, otros')
    }
    producto.categoria = solicitarCategoria

    let solicitarMarca = prompt('ingresa una marca con al menos 3 caracteres')
    while(!validarMarca(solicitarMarca)){
        alert('ERROR DE DATOS')
        solicitarMarca = prompt('ingresar una marca con al menos 3 caracteres')
    }
    producto.marca = solicitarMarca

    let plantilla = `
        Titulo: ${producto.titulo}
        Precio: ${producto.precio}
        Descripcion: ${producto.descripcion}
        Categoria: ${producto.categoria}
        Marca: ${producto.marca}
    `

    let confirmacion = prompt(`Desea confirmar? ${plantilla}`)
    if(confirmacion === null || confirmacion === 'no' || confirmacion === 'cancelar'){
        registrarProducto()
    }
    else if(confirmacion === 'si'){
        console.log(producto)
    }
    

}

registrarProducto()