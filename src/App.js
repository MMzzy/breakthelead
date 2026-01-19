import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./pages/Home";

import Profil from "./components/zadaci/Profil";
import Zadatak1 from "./components/zadaci/Zadatak1";

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
