import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Page/Home';
import Feature from './Page/Feature';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
