import React, {useState} from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage, db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function AdminUpload(){
  const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const [desc,setDesc]=useState('')
  const [file,setFile]=useState(null)
  const [uploading,setUploading]=useState(false)
  const [msg,setMsg]=useState('')

  const submit = async (e)=>{
    e.preventDefault()
    if(!file) return setMsg('Please select an image')
    setUploading(true)
    const storageRef = ref(storage, `sarees/${Date.now()}_${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on('state_changed', null, (err)=>{setMsg(err.message); setUploading(false)}, async ()=>{
      const url = await getDownloadURL(uploadTask.snapshot.ref)
      await addDoc(collection(db,'sarees'),{
        name, price: Number(price), description: desc, imageUrl: url
      })
      setMsg('Uploaded')
      setUploading(false)
      setName(''); setPrice(''); setDesc(''); setFile(null)
    })
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-maroon">Upload Saree</h2>
      {msg && <div className="mt-2">{msg}</div>}
      <form onSubmit={submit} className="mt-4 space-y-3">
        <input className="w-full border p-2 rounded" value={name} onChange={e=>setName(e.target.value)} placeholder="Saree name" />
        <input className="w-full border p-2 rounded" value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" />
        <textarea className="w-full border p-2 rounded" value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" />
        <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])} />
        <button disabled={uploading} className="bg-maroon text-cream px-4 py-2 rounded">{uploading? 'Uploading...':'Upload'}</button>
      </form>
    </div>
  )
}