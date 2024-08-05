import React from 'react'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
export default function Portfolio() {
  return (
    <>
<div className="bg-white h-screen">
<div className="container mx-auto">
<div className="row ">
    <div className=" w-4/12 p-5">
        <img src={img1} alt="" className='rounded-md'/>
      </div>
      <div className=" w-4/12 p-5">
        <img src={img2} alt="" className='rounded-md'/>
      </div>
      <div className=" w-4/12 p-5">
        <img src={img3} alt="" className='rounded-md'/>
      </div>
      <div className=" w-4/12 p-5">
        <img src={img1} alt="" className='rounded-md'/>
      </div>
      <div className=" w-4/12 p-5">
        <img src={img2} alt="" className='rounded-md'/>
      </div>
      <div className=" w-4/12 p-5">
        <img src={img3} alt="" className='rounded-md'/>
      </div>
      
    </div>
</div>
</div>
    </>
  )
}
