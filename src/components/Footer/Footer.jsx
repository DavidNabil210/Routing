import React from 'react'

export default function Footer() {
  return (
  <>
 <div className="bg-gray-950">
 <div className="row justify-between container mx-auto ">
    <div className="text-center w-4/12">
      <p>Location</p>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className="text-center w-4/12">
      <p className='text-2xl'>Around The Web</p>
      <div className="row ml-32 gap-2">
      <i class="fa-brands fa-twitter text-3xl "></i>
      <i class="fa-brands fa-google text-3xl "></i>
      <i class="fa-brands fa-linkedin text-3xl "></i>
      <i class="fa-brands fa-facebook text-3xl "></i>

      </div>
    </div>
    <div className="text-center w-4/12">
      <p className='text-2xl'>About Freelancer</p>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
  </div>
 </div>
  </>
  )
}
