import React from "react";
import Header from "./Common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Feature from "./Page/Feature";
import Footer from "./Common/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
        </Routes>
        <Footer />
      </Router>
    </> 
  );
}