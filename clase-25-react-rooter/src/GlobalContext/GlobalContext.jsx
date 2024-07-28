import { createContext, useContext, useState } from "react";
import { crearProducto, eliminarProdcutoPorId, obtenerProductos } from "../Components/helpers/productos";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [productos, setProductos] = useState(obtenerProductos())
    const navigation = useNavigate()

    const handleDeleteProduct = (codigo) => {
        setProductos(eliminarProdcutoPorId(codigo))
        navigation('/')
    }
    const handleCreateProduct = (e, nuevoProducto) => {
        console.log('producto creado')
        e.preventDefault()
        setProductos(crearProducto(nuevoProducto, nuevoProducto.id = uuid()))
        
    }
    const buscarProductoPorId = (codigo) => {
        const listaProductos = obtenerProductos()
        return listaProductos.find((producto) => producto.codigo === codigo)
    }
    const getUserData = () => {
        const userLoged = JSON.parse(localStorage.getItem('user'))
        return userLoged
    }
    const logout = () => {
        localStorage.removeItem('user')
        navigation('/')
    }


    return (
        <GlobalContext.Provider value={
            {
                productos: productos,
                handleDeleteProduct: handleDeleteProduct,
                handleCreateProduct: handleCreateProduct,
                buscarProductoPorId: buscarProductoPorId,
                getUserData: getUserData,
                logout: logout
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {

    return useContext(GlobalContext)

}