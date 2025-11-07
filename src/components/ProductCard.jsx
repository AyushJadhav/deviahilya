import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({p}){
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <img src={p.imageUrl} alt={p.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-maroon">{p.name}</h3>
        <p className="text-sm mt-1">{p.short || p.description?.slice(0,80)}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">₹{p.price}</span>
          <Link to={`/product/${p.id}`} className="text-sm text-maroon hover:underline">View</Link>
        </div>
      </div>
    </div>
  )
}