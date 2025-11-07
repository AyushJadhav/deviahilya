import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <header className="bg-maroon text-cream shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl md:text-2xl font-bold hover:text-gold transition-colors">
          Devi Ahilya Weavers
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex space-x-4 md:space-x-6">
            <Link to="/" className="hover:text-gold transition-colors hover:bg-cream hover:bg-opacity-10 px-3 py-2 rounded">
              Home
            </Link>
            <Link to="/contact" className="hover:text-gold transition-colors hover:bg-cream hover:bg-opacity-10 px-3 py-2 rounded">
              Contact
            </Link>
            <Link to="/admin/login" className="bg-gold text-maroon px-3 py-2 rounded hover:bg-yellow-400 transition-colors font-medium">
              Admin
            </Link>
          </nav>
        )}

        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cream hover:text-gold focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && isOpen && (
        <div className="bg-maroon border-t border-gold">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-cream hover:bg-gold hover:bg-opacity-20 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-cream hover:bg-gold hover:bg-opacity-20 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/admin/login"
              className="block px-3 py-2 bg-gold text-maroon font-medium rounded hover:bg-yellow-400 transition-colors"
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