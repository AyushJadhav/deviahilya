import React from 'react'

export default function Contact(){
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-maroon">Contact Us</h2>
      <p className="mt-2">For orders and enquiries email: <strong>contact@deviahilyaweavers.example</strong> or call +91 98765 43210</p>
      <form className="mt-4 space-y-3 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="Your name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <textarea className="w-full border p-2 rounded" placeholder="Message" rows={4} />
        <button className="bg-maroon text-cream px-4 py-2 rounded">Send</button>
      </form>
    </div>
  )
}