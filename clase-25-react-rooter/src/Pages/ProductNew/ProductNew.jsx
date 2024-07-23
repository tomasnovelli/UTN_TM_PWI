import React, { useState } from 'react'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'

const ProductNew = () => {
    const {handleCreateProduct} = useGlobalContext()
    const plantillaNuevoProducto= {
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        codigo: '',
        categoria:'',
        thumbnail: ''
    }
    const [nuevoProducto, setNuevoProducto] = useState(plantillaNuevoProducto)

    const handleChangeValue = (e) =>{
        const valueToChange = e.target.name
        const newValue = e.target.value
        setNuevoProducto({...nuevoProducto, [valueToChange]: newValue})
        
    }

    return (
        <div>
            <form onSubmit={(e) => handleCreateProduct(e, {...nuevoProducto})} action="">
                <label htmlFor="nombre">Nombre</label>
                <input name='nombre' type="text" id='nombre' onChange={handleChangeValue} value={nuevoProducto.nombre}/>
                <br />
                <label htmlFor="descripcion">descripcion</label>
                <input name='descripcion' type="text" id='descripcion' onChange={handleChangeValue} value={nuevoProducto.descripcion} />
                <br />
                <label htmlFor="precio">Precio</label>
                <input name='precio' type="text" id='precio' onChange={handleChangeValue} value={nuevoProducto.precio}/>
                <br />
                <label htmlFor="stock">Stock</label>
                <input name='stock' type="text" id='stock' onChange={handleChangeValue} value={nuevoProducto.stock}/>
                <br />
                <label htmlFor="codigo">Codigo</label>
                <input name='codigo' type="text" id='codigo' onChange={handleChangeValue} value={nuevoProducto.codigo}/>
                <br />
                <label htmlFor="categoria">Categoria</label>
                <input name='categoria' type="text" id='categoria' onChange={handleChangeValue} value={nuevoProducto.categoria}/>
                <br />
                <label htmlFor="thumbnail">thumbnail</label>
                <input name='thumbnail'type="text" id='thumbnail' onChange={handleChangeValue} value={nuevoProducto.thumbnail}/>
                <br />
                <button type='submit'>enviar</button>
            </form>
        </div>
    )
}

export default ProductNew
