import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Pdp from './pages/pdp/Pdp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
const routes = (
  <Router>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/products/:id' exact element={<Pdp />}/>
    </Routes>
  </Router>
);


const App = () => {

  return (
    <>
    <Navbar/>
    <div className='empty-box'></div>
    <div>{routes}</div>
    <Footer/>
    </>
  )
}

export default App

