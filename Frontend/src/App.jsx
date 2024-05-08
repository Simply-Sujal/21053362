import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element=<ProductList /> />
          <Route path='/product/:id' Component={<ProductDetailPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
