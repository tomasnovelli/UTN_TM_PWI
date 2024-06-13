const productos = [
    {
        nombre: 'celular Samsung galaxy s24 ultra',
        id: 1,
        precio: 2500,
        cantidad: 2,
        thumbnail: 'https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/0/0/00-sm-s928_galaxys24ultra_all-logo_4_2.png'
    },
    {
        nombre: 'celular Samsung galaxy A74',
        id: 2,
        precio: 500,
        cantidad: 4,
        thumbnail: 'https://www.91-cdn.com/hub/wp-content/uploads/2022/12/galaxy-a74.jpg'
    },
    {
        nombre: 'celular Samsung galaxy A54',
        id: 3,
        precio: 350,
        cantidad: 1,
        thumbnail: 'https://carrello.com.ar/ecom/wp-content/uploads/2023/06/71d36o5kqEL.jpg'
    }
]


const renderizarCarrito = (carrito) =>{
    const carritoHTML = document.getElementById('caja-carrito')
    const cajaSpanHMTL = document.getElementById('precio-total')
    let total = 0
    let plantillaCarrito = ''
    for(const producto of productos){
        total = total + (producto.precio * producto.cantidad)
        plantillaCarrito = plantillaCarrito + `
        <div>
            <h3>${producto.nombre} Id: ${producto.id}</h3>
            <img width='100px' src="${producto.thumbnail}"/>
            <span>Precio Unitario: ${producto.precio} x ${producto.cantidad} unidades</span>
            <span>Total: ${producto.precio * producto.cantidad}</span>
            <hr>
        </div>
        `
    }
    carritoHTML.innerHTML = plantillaCarrito
    cajaSpanHMTL.innerText = 'Total: $' + total

}

renderizarCarrito(productos)

const eliminarItemPorId = (id) =>{
    const productoBuscado = productos.find((item) => item.id === id)
    if(productoBuscado){
        if(productoBuscado.cantidad === 1){
            const posicionProducto = productos.findIndex((item) => item.id === id) 
            productos.splice(posicionProducto, 1)   
        }
        else{
            productoBuscado.cantidad = productoBuscado.cantidad - 1
        }
        renderizarCarrito(productos)
    }
    else{
        console.error('Error: item con id inexistente')
    }
}


eliminarItemPorId(2)
