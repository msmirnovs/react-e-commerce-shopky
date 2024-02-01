import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ProductsPage from './pages/Products.js';
import PaymentPage from './pages/Payment.js';
import CheckoutPage from './pages/Checkout.js';
import ProductInfoPage from './pages/Product_info.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/products" element={<ProductsPage />} />
         
      <Route path="/payment" element={<PaymentPage />} />
         
      <Route path="/checkout" element={<CheckoutPage />} />
         
      <Route path="/productinfo" element={<ProductInfoPage />} />
    </Routes>
  );
}

export default App;
