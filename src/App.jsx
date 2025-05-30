import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Hom1Page from './Hom1/Hom1Components.jsx';
import Hom2Page from './Hom2/Hom2Components.jsx';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Hom1" element={<Hom1Page />} />
      <Route path="/Hom2" element={<Hom2Page />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
