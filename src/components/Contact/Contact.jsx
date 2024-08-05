import React, { useState } from 'react'

export default function Home() {


  return (

<>
<div className="bg-teal-400">
<div className="container mx-auto px-4 w-screen h-screen pt-4 ">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text"   
 id="name" name="name" className="border bg-slate-200 border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
          <input type="number"   
 id="age" name="age" className="border bg-slate-200 border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold   
 mb-2">Email</label>
          <input type="email" id="email"   
 name="email" className="border border-gray-300 bg-slate-200 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password"   
 name="password" className="border bg-slate-200 border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500" required />
        </div>

        <div className="text-center">
        <button type="submit" className="bg-gray-950 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md">Send   
        Message</button>
        </div>
      </form>
    </div>  
  </div> 
</>
  )
}
