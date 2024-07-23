import { createContext, useContext, useState } from "react";
import { crearProducto, eliminarProdcutoPorId, obtenerProductos } from "../Components/helpers/productos";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [productos, setProductos] = useState(obtenerProductos())
    const navigation = useNavigate()

    const handleDeleteProduct = (id) => {
        setProductos(eliminarProdcutoPorId(id))
        navigation('/')
    }
    const handleCreateProduct = (e, nuevoProducto) =>{
        e.preventDefault()
        setProductos(crearProducto(nuevoProducto))
        navigation('/')
    }

    return (
        <GlobalContext.Provider value={
            {
                productos: productos,
                handleDeleteProduct: handleDeleteProduct,
                handleCreateProduct: handleCreateProduct,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{

        return useContext(GlobalContext)

}