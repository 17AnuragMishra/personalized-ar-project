import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import ArTryOn from './pages/ArTryOn'; // Import AR Try-On page
import Navbar from './components/Navbar';
import VirtualStorefront from './pages/VirtualStorefront';
import PersonalizedTryOn from './pages/PersonalizedTryOn';
import ARExperiencePage from './pages/ARExperiencePage';
import SomeExistingPage from './pages/SomeExistingPage';
// import TryOn from './pages/TryOn'; // Assuming you have this already
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/tryon" element={<ArTryOn />} /> {/* Add AR Try-On route */}
        <Route path="/storefront" element={<VirtualStorefront />} />
        <Route path="/ar-experience" element={ARExperiencePage}/>
        <Route path="/existing-page" component={SomeExistingPage} />
        {/* <Route path="/personalized-tryon" component={PersonalizedTryOn} /> */}
        
        {/* <Route path="/tryon" element={<TryOn />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
