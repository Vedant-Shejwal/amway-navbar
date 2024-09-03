import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Pdp from './pages/pdp/Pdp';
import Plp from './pages/plp/Plp';
import Cart from './pages/cart/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';


const routes = (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/products/:id' exact element={<Pdp/>}/>
      <Route path='/cart' exact element={<Cart/>}/>
      <Route path='/products/category/:id' exact element={<Plp/>}/>
    </Routes>
);


const App = () => {

  return (
    <>
    <Navbar/>
    <div className='empty-box'></div>
    <div className='pages'>{routes}</div>
    <Footer/>
    </>
  )
}

export default App

