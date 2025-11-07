import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminUpload from './pages/AdminUpload';
import ComingSoon from './pages/ComingSoon';
import Nav from './components/Nav';

export default function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    // Clear localStorage for testing to see coming soon page
    localStorage.removeItem('hasVisitedComingSoon');

    const hasVisited = localStorage.getItem('hasVisitedComingSoon');
    if (!hasVisited) {
      setShowComingSoon(true);
      localStorage.setItem('hasVisitedComingSoon', 'true');
    }
  }, []);

  const handleCloseComingSoon = () => {
    setShowComingSoon(false);
  };

  if (showComingSoon) {
    return <ComingSoon onClose={handleCloseComingSoon} />;
  }

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
