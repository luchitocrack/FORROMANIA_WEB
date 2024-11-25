import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page_Inicio from './Components/Inicio'
import Page_Producto from './Components/Producto'
import Page_Nosotros from './Components/Nosotros'
import Page_Info from './Components/Informacion'
import Carrucela from './Components/Carrucel'
import Select from './Components/Producto_Select'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Page_Inicio/>}/>
          <Route path='/Productos' element={<Page_Producto/>}/>
          <Route path='/Nosotros' element={<Page_Nosotros/>}/>
          <Route path='/Informacion' element={<Page_Info/>}/>
          <Route path='/Carrucel' element={<Carrucela/>}/>
          <Route path='/Item' element={<Select/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App