import { BrowserRouter, Routes, Route } from "react-router";
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './pages/Home';


function App() {
    return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element= {<Contact />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;