import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import './Gutenberg.css';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./pages/Home";

import Profil from "./components/zadaci/Profil";
import Zadatak1 from "./components/zadaci/Zadatak1";
import Blog from "./components/Blog";
import BlogSingle from "./components/BlogSingle";
import Tecaj from "./components/zadaci/Tecaj";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />



        <Route path="/profil" element={<Profil />} />
        <Route path="/korisnici" element={<Zadatak1 />} />
        <Route path="/blog-page" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/tecaj" element={<Tecaj />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
