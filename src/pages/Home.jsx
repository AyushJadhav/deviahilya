import React, {useEffect, useState} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import ProductCard from '../components/ProductCard'

export default function Home(){
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetch = async ()=>{
      const snap = await getDocs(collection(db,'sarees'))
      const arr = snap.docs.map(d=>({id:d.id,...d.data()}))
      setProducts(arr)
      setLoading(false)
    }
    fetch()
  },[])

  return (
    <div>
      <section className="mb-8">
        <div className="bg-white rounded p-6 shadow">
          <h1 className="text-3xl font-bold text-maroon">Devi Ahilya Weavers</h1>
          <p className="mt-2">Celebrating the heritage of <strong>Maheshwar</strong>—handloom saris woven along the banks of the <strong>Narmada</strong>. Each saree carries the story of weavers, traditional motifs, and the river that inspired them.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-maroon mb-4">Saree Catalogue</h2>
        {loading ? <div>Loading...</div> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p=> <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </section>

      <section className="mt-10">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-maroon">About Maheshwar & Narmada</h3>
          <p className="mt-2">Maheshwar is a historic weaving town in Madhya Pradesh, renowned for its delicate motifs and reversible borders. The Narmada river not only provides inspiration but historically supported the weaving communities that produced the iconic Maheshwari sarees.</p>
        </div>
      </section>
    </div>
  )
}