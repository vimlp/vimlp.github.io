import React from "react";
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./pages/Home"
import ViMLPDemo from "./pages/ViMLPDemo";
import Data from "./pages/Data";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/demo/muong-viet' element={<ViMLPDemo />} />
        <Route path='/data/muong-viet' element={<Data />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;