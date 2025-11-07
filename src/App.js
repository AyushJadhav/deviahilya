import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminUpload from './pages/AdminUpload';
import Nav from './components/Nav';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Nav />
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/upload" element={<AdminUpload />} />
        </Routes>
      </main>
    </div>
  );
}
