import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function Product(){
  const {id} = useParams()
  const [p,setP] = useState(null)
  useEffect(()=>{
    const fetch = async ()=>{
      const ref = doc(db,'sarees',id)
      const snap = await getDoc(ref)
      if(snap.exists()) setP({id:snap.id,...snap.data()})
    }
    fetch()
  },[id])

  if(!p) return <div>Loading...</div>
  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={p.imageUrl} alt={p.name} className="w-full h-96 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold text-maroon">{p.name}</h2>
          <p className="mt-4">{p.description}</p>
          <p className="mt-4 font-semibold">Price: ₹{p.price}</p>
          <div className="mt-6">
            <button className="bg-maroon text-cream px-4 py-2 rounded">Enquire</button>
          </div>
        </div>
      </div>

      <section className="mt-6 p-4 border-t">
        <h4 className="font-semibold">Story</h4>
        <p className="mt-2">This Maheshwar piece is handwoven by local artisans along Narmada’s banks, using traditional dyeing and warp techniques.</p>
      </section>
    </div>
  )
}