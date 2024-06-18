const usuario = {
    nombre: 'Nicolas',
    apellido: 'Iorio',
    direccion: 'Seneca 2021',
    edad: 31
}

const cajaUsuarioHTML = document.getElementById('caja-usuario')

cajaUsuarioHTML.innerHTML = `
    <h2>Nombre Completo: ${usuario.nombre} ${usuario.apellido}</h2>
    <span>Edad: <b>${usuario.edad}</b></span>
    <br>
    <span>Direccion: <b>${usuario.direccion}</b></span>
    
`
/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}
*/
/* eliminarItemPorId() */

/* Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1 */
const carrito = [
    {
        nombre: 'Tv Samsung 32"',
        id: 1,
        precio: 2500,
        cantidad: 3,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'Tv Samsung 50"',
        id: 2,
        precio: 4500,
        cantidad: 3,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'Tv Samsung 62"',
        id: 3,
        precio: 7000,
        cantidad: 1,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
]

const renderizarCarrito = (carrito) => {
    const carritoHTML = document.getElementById('carrito')
    const carritoTotalHTML = document.getElementById('total-carrito')
    let plantillaDeProductos = ''
    let totalCarrito = 0
    for(const producto of carrito){
        totalCarrito = totalCarrito + producto.precio * producto.cantidad
        plantillaDeProductos = plantillaDeProductos + `
        <div>
            <h3>${producto.nombre} id: #${producto.id}</h3>
            <img width="100px" src="${producto.thumbnail}"/>
            <br>
            <span>Precio Unitario: ${producto.precio} x ${producto.cantidad} unidades</span>
            <br>
            <span>Total: ${producto.precio * producto.cantidad}</span>
        </div>
        <hr>
        `
    }
    carritoHTML.innerHTML = plantillaDeProductos
    carritoTotalHTML.innerText = 'TOTAL: $' + totalCarrito
}

renderizarCarrito(carrito)

const eliminarItemPorId = (id) => {
    const itemBuscado = carrito.find((item) => item.id === id)
    if(itemBuscado){
        if(itemBuscado.cantidad === 1){
            /* carrito.splice(itemBuscado, 1) */
            const itemIndex = carrito.findIndex((item) => item.id === id)
            carrito.splice(itemIndex, 1)
        }
        else{
            itemBuscado.cantidad -= 1
        }
        renderizarCarrito(carrito)
    }
    else{
        console.error('Error, Item id inexistente')
    }
}

const agregarItemAlCarrito = (producto) => {
    const itemBuscado = carrito.find((item) => item.id === producto.id)
    if(itemBuscado){
        itemBuscado.cantidad += 1
    }
    else{
        producto.cantidad = 1
        carrito.push(producto)
    }
    renderizarCarrito(carrito)

}

agregarItemAlCarrito(
    {
        nombre: 'Tv Samsung 85"',
        id: 50,
        precio: 10000,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
)
agregarItemAlCarrito(
    {
        nombre: 'Tv Samsung 85"',
        id: 50,
        precio: 10000,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
)
agregarItemAlCarrito(
    {
        nombre: 'Tv Samsung 32"',
        id: 1,
        precio: 2500,
        cantidad: 3,
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
)
eliminarItemPorId(50)