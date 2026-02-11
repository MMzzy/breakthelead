import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import './Gutenberg.css';
import "./App.css"

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";

/*
import Profil from "./components/zadaci/Profil";
import Zadatak1 from "./components/zadaci/Zadatak1";
import Tecaj from "./components/zadaci/Tecaj";
*/


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*
        <Route path="/profil" element={<Profil />} />
        <Route path="/korisnici" element={<Zadatak1 />} />
        <Route path="/tecaj" element={<Tecaj />} />
        */}
        <Route path="/blog-page" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceSingle />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
