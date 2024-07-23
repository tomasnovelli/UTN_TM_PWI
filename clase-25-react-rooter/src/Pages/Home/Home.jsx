import React from 'react'
import ProductList from '../../Components/ProductList/ProductList'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'
import { Link } from 'react-router-dom'


const Home = () => {

    const {productos} = useGlobalContext()
    
    return (
        <div>
            <h1>Elige nuestros productos</h1>
            <ProductList products={productos} />
            <Link to={'/product/new'}>
            <button>Agregar Producto</button>
            </Link>

        </div>
    )
}

export default Home
