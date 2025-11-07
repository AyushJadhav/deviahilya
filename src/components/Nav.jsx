import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header style={{backgroundColor: '#7b1e1e', color: '#fff8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem'}}>
        <Link to="/" style={{fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '700', color: '#fff8f0', textDecoration: 'none'}}>
          Devi Ahilya Weavers
        </Link>

        {/* Desktop Navigation */}
        <nav style={{display: 'flex', gap: '1.5rem'}}>
          <Link to="/" style={{color: '#fff8f0', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem', transition: 'background-color 0.3s'}} onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 248, 240, 0.1)'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Home</Link>
          <Link to="/contact" style={{color: '#fff8f0', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem', transition: 'background-color 0.3s'}} onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 248, 240, 0.1)'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Contact</Link>
          <Link to="/admin/login" style={{backgroundColor: '#d4af37', color: '#7b1e1e', padding: '0.5rem 1rem', borderRadius: '0.25rem', textDecoration: 'none', fontWeight: '500', transition: 'background-color 0.3s'}} onMouseOver={(e) => e.target.style.backgroundColor = '#f5d76e'} onMouseOut={(e) => e.target.style.backgroundColor = '#d4af37'}>
            Admin
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{display: 'none', color: '#fff8f0', border: 'none', background: 'none', cursor: 'pointer'}}
          aria-label="Toggle menu"
        >
          <svg style={{width: '1.5rem', height: '1.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div style={{display: 'block', backgroundColor: '#7b1e1e', borderTop: '1px solid #d4af37'}} className="md:hidden">
          <div style={{padding: '0.5rem'}}>
            <Link
              to="/"
              style={{display: 'block', padding: '0.5rem 0.75rem', color: '#fff8f0', textDecoration: 'none'}}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              style={{display: 'block', padding: '0.5rem 0.75rem', color: '#fff8f0', textDecoration: 'none'}}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/admin/login"
              style={{display: 'block', padding: '0.5rem 0.75rem', backgroundColor: '#d4af37', color: '#7b1e1e', textDecoration: 'none', fontWeight: '500'}}
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}