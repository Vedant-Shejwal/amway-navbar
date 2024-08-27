import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
const routes = (
  <Router>
    <Routes>
      <Route path='/' exact element={<Home/>}/> 
    </Routes>
  </Router>
);


const App = () => {

  return (
    <>
    <Navbar/>
    <div>{routes}</div>
    <Footer/>
    </>
  )
}

export default App

