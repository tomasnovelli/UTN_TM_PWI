import { productos } from "../../Pages"


const guardarProductos = (productos) => {
    const productoJSON = JSON.stringify(productos)
    localStorage.setItem('producto', productoJSON)
}

export const obtenerProductos = () =>{
    const productosGuardados = localStorage.getItem('producto')
    if(productosGuardados){
        return JSON.parse(productosGuardados)
    } else{
        guardarProductos(productos)
        return productos
    }
}

export const crearProducto = (nuevoProducto) =>{
    const listaProductos = obtenerProductos()
    listaProductos.push(nuevoProducto)
    guardarProductos(listaProductos)

}

export const buscarProductoPorId = (id) =>{
    const listaProductos = obtenerProductos()
    return listaProductos.find((producto) => Number(producto.id) === Number(id))
    
}

export const eliminarProdcutoPorId = (id) => {
    const listaProductos = obtenerProductos()
    const nuevaLista = listaProductos.filter((producto) => Number(producto.id) !== Number(id))
    guardarProductos(nuevaLista)
    return nuevaLista
}




