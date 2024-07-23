import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Detail, Home } from './Pages'
import ProductNew from './Pages/ProductNew/ProductNew'
function App() {

	return (	
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/detail/:producto_id' element={<Detail/>} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/product/new' element={<ProductNew />}/>
		</Routes>
	)
}

export default App
