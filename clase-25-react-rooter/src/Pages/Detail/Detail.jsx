import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'

const Detail = () => {
    const parametros = useParams()
    const { handleDeleteProduct, buscarProductoPorId, getUserData} = useGlobalContext()
    const userLoged = getUserData()
    
    const { nombre,
        descripcion,
        precio,
        id,
        stock,
        codigo,
        categoria } = buscarProductoPorId(parametros.producto_codigo)


    return (
        <div>
            <Link to={'/'}>Volver</Link>
            <br />
            <h3>{nombre}({codigo})</h3>
            <img src="" alt="" />
            <span>Categoria: {categoria}</span>
            <br />
            <p>{descripcion}</p>
            <br />
            <span>Disponibles: {stock}</span>
            <br />
            <span>Precio: {precio}</span>
            <button>Comprar</button>
            {
                userLoged.role === 'admin' &&
                <button onClick={() => handleDeleteProduct(codigo)}>Eliminar Producto</button>
            }

            <hr />
        </div>
    )
}

export default Detail
