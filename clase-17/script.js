/* const usuario = {
    nombre: 'Tomas',
    apellido: 'Novelli',
    direccion: 'san martin 3214',
    edad: '31'
}

const cajaUsuario = document.getElementById('caja-usuario')
console.dir(cajaUsuario)

cajaUsuario.innerHTML = `
    <h2>Nombre Completo: ${usuario.nombre} ${usuario.apellido}</h2>
    <span>Edad: ${usuario.edad}</span>
    <br>
    <span>Direcicon: ${usuario.direccion}</span>
    ` */

/*     const productos = [
        {
            nombre: 'tv samsung 32"',
            precio: 500,
            id: 1,
            descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
            thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
        },
        {
            nombre: 'tv samsung 42"',
            precio: 1500,
            id: 2,
            descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
            thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
        },
        {
            nombre: 'tv samsung 52"',
            precio: 2500,
            id: 3,
            descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
            thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
        }
    ]
    const productosHTML = document.getElementById('productos')
    let plantillaProductos = ''
    for(const producto of productos ){
        plantillaProductos = plantillaProductos + `
        <div>
            <h2>${producto.nombre}</h2>
            <img width='200px' src="${producto.thumbnail}"/>
            <span>Precio: ${producto.precio}</span>
            <p>${producto.descripcion}</p>
            <button>Comprar</button>
        </div>
        <hr>
        `
    }
    productosHTML.innerHTML = plantillaProductos */

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
        cantidad: 3,
        thumbnail: 'https://carrello.com.ar/ecom/wp-content/uploads/2023/06/71d36o5kqEL.jpg'
    }
]

const carritoHTML = document.getElementById('caja-carrito')

let plantillaCarrito = ''
for(const producto of productos){
    plantillaCarrito = plantillaCarrito + `
    <div>
        <h3>${producto.nombre} Id: ${producto.id}</h3>
        <img width='100px' src="${producto.thumbnail}"/>
        <span>Precio Unitario: ${producto.precio} x ${producto.cantidad} unidades</span>
        <span>Total: ${producto.precio * producto.cantidad}</span>
    </div>
    `
}
carritoHTML.innerHTML = plantillaCarrito

const cajaSpanHMTL = document.getElementById('precio-total')

let total = null
for(const objeto in plantillaCarrito){
    total = total + `${objeto.Total + objeto.Total}`
}
console.log(total)


/* Por debajo del div dobnde renderizamos el carrito, crear en HTML un span que este vacio
Llamar dicho span por JS y cambiar el texto para que diga: TOTAL: ${precio total} */