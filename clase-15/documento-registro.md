// VALIDACIONES //

const validarTitulo = (titulo) => {
    return titulo && titulo.length > 4
}

const validarPrecio = (numero) => {
    return numero && !isNaN(numero) && numero > 1
}

const validarDescripcion = (descripcion) => {
    return descripcion && descripcion.length > 10
}

const validarCategoria = (categoria) => {
    const categorias = ["tecnologia", "hogar", "otros"]
    if (categorias.includes(categoria)) {
        return categoria
    }
}

const validarMarca = (marca) => {
    return marca && marca.length >= 3
}

// DATOS //

const datos = {
    titulo: {
        mensaje: "Ingrese el titulo del produto:",
        error: "Ingrese un titulo válido, mayor a 4 caracteres:",
        validacion: validarTitulo
    },
    precio: {
        mensaje: "Ingrese el precio de su producto:",
        error: "Ingrese un precio válido, debe ser mayor a 1",
        validacion: validarPrecio
    },
    descripcion: {
        mensaje: "Ingrese la descripción del producto:",
        error: "Ingrese una descripción válida, mayor a 10 caracteres:",
        validacion: validarDescripcion
    },
    categoria: {
        mensaje: "Ingrese la categoría de su producto",
        error: `Ingrese una categoría dentro de las siguientes: "tecnologia", "hogar", "otros" `,
        validacion: validarCategoria
    },
    marca: {
        mensaje: "Ingrese la marca de su producto:",
        error: "Ingrese una marca válida, recuerde que debe tener al menos 3 caracteres",
        validacion: validarMarca
    }
}

// SOLICITUD //

const solicitarDato = (objeto) => {
    let dato = prompt(objeto.mensaje)
    while (!objeto.validacion(dato)) {
        dato = prompt(objeto.error)
    }
    return dato
}

// REGISTRAR //

const registrarProducto = () => {
    const producto = {
        titulo: null,
        precio: null,
        descripcion: null,
        categoria: null,
        marca: null
    }

    producto.titulo = solicitarDato(
        datos.titulo
    )

    producto.precio = solicitarDato(
        datos.precio
    )

    producto.descripcion = solicitarDato(
        datos.descripcion
    )

    producto.categoria = solicitarDato(
        datos.categoria
    )

    producto.marca = solicitarDato(
        datos.marca
    )

    let plantilla = `
    Título: ${producto.titulo}
    Precio: ${producto.precio}
    Descripción: ${producto.descripcion}
    Categoría: ${producto.categoria}
    Marca: ${producto.marca} 
    `

    let confirmar = prompt(`Confirmar ${plantilla}`)
    if (confirmar == null || confirmar == "NO" || confirmar == "CANCELAR") {
        registrarProducto()
    } else if (confirmar == "SI") {
        console.log(producto)
    } else {
        confirmar = prompt(`Confirmar ${plantilla} ingrese alguna de las siguientes opciones: "NO", "CANCELAR", "SI"`)
    }
}

registrarProducto()