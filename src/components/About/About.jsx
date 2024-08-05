import React, { useState } from 'react'

export default function About() {
  let [count, setCount] = useState(0);
  
  return (
    <div className="bg-teal-400 h-screen flex items-center justify-center w-screen">
    <div className=" text-white container ">
        <h1 className="text-3xl font-bold mb-4  text-center">ABOUT COMPONENT</h1>
       <div  className='flex flex-wrap justify-between '>
       <p className="text-sm w-1/2 p-3">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets   
       for easy customization.</p>
       <p className="text-sm w-1/2 p-3">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets   
       for easy customization.</p>
        </div>   

    </div>
</div>
  )
}
