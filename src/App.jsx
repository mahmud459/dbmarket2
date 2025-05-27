import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Hom1Page from './Hom1/Hom1Components.jsx';
// import Performance from './TopPerformance1.jsx';
// import ArticlesS from './BlogsArticle.jsx';
// import SiteFooter from './Footer.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hom1Page />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
