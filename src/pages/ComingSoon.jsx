import React, { useEffect, useState } from 'react'

export default function ComingSoon({ onClose }) {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    '/homeimage1.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Heritage of Narmada River and Maheshwar ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-cream px-6 max-w-4xl">
          {/* Animated Logo/Icon */}
          <div className="mb-8">
            <div className="inline-block animate-pulse">
              <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>

          {/* Main Heading with Animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Coming Soon
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 animate-fade-in-up animation-delay-300">
            Discover the Heritage of Narmada River & Maheshwar
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-600 max-w-2xl mx-auto">
            We're curating an extraordinary collection inspired by the timeless beauty and rich cultural heritage of the sacred Narmada River and the historic city of Maheshwar. Stay tuned for our unique handwoven treasures.
          </p>

          {/* Animated Elements */}
          <div className="flex justify-center space-x-4 mb-8 animate-fade-in-up animation-delay-900">
            <div className="w-3 h-3 bg-gold rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-gold rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-gold rounded-full animate-bounce animation-delay-400"></div>
          </div>

          {/* Skip to Home Button */}
          <div className="max-w-md mx-auto animate-fade-in-up animation-delay-1200">
            <button
              onClick={onClose}
              className="bg-gold text-maroon px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-lg"
            >
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-gold rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float animation-delay-1000">
        <div className="w-6 h-6 bg-cream rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float animation-delay-2000">
        <div className="w-5 h-5 bg-gold rounded-full opacity-50"></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  )
}