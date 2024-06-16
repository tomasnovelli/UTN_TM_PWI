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
const categoriasDeProducto = ['tecnologia', 'hogar', 'otros']
const validarStringConMinimo = (valor, minimo) => valor && isNaN(valor) && valor.length >= minimo
const validarTitulo = (titulo) => validarStringConMinimo(titulo, 4)
const validarPrecio = (precio) => precio && !isNaN(precio) && precio > 1
const validarDescripcion = (descripcion) => validarStringConMinimo(descripcion, 10)
const validarCategoria = (categoria) => categoriasDeProducto.includes(categoria)
const validarMarca = (marca) => validarStringConMinimo(marca, 3)
const validarNegacion = (confirmacion) => confirmacion === null || confirmacion.toLowerCase() === 'no' || confirmacion.toLowerCase() === 'cancelar'

const crearObjetoConfeccion = (mensaje, error, validacion) => {
    return{
        mensaje: mensaje,
        error: error,
        validacion : validacion
    }
}
const DATOS = {
    TITULO: crearObjetoConfeccion(
        'ingresa un titulo con mas de 4 caracteres',
        'Error de titulo',
        validarTitulo
    ),
    PRECIO: crearObjetoConfeccion(
        'ingresa un precio mayor a 1',
        'Error de precio',
        validarPrecio
    ),
    DESCRIPCION: crearObjetoConfeccion(
        'ingresa una descripcion con mas de 10 carcteres',
        'Error de descripcion',
        validarDescripcion
    ),
    CATEGORIA: crearObjetoConfeccion(
        'elegi una categoria entre: (' + categoriasDeProducto.join(', ') + ')',
        'Error de categoria',
        validarCategoria
    ),
    MARCA: crearObjetoConfeccion(
        'ingresa una marca con mas de 3 caracteres',
        'Error de marca',
        validarMarca
    )
}

const validarDato = (objeto) => {
    let dato = prompt(objeto.mensaje)
    while(!objeto.validacion(dato)){
        alert(objeto.error)
        dato = prompt(objeto.mensaje)
    }
    return dato
}

const registrarProducto = () =>{
    
    titulo = validarDato(DATOS.TITULO)
    precio = validarDato(DATOS.PRECIO)
    descripcion = validarDato(DATOS.DESCRIPCION)
    categoria = validarDato(DATOS.CATEGORIA)
    marca = validarDato(DATOS.MARCA)

    let plantillaProducto = `
        Desea confirmar producto?
        -Titulo: ${titulo}
        -Precio: ${precio}
        -Descripcion: ${descripcion}
        -Categoria: ${categoria}
        -Marca: ${marca}
        `
    let confirmacion = prompt(plantillaProducto)
    if(validarNegacion(confirmacion)){
        registrarProducto()
    }
    else if(confirmacion.toLowerCase() === 'si'){
        const producto = {
            titulo,
            precio,
            descripcion,
            categoria,
            marca
        }
        console.log(producto)
    }

}
registrarProducto()