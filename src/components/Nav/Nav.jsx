import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };



  return (
    <nav className="bg-gray-800 w-screen">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-white font-bold">Title</div>
        <div className="space-x-4">
        <Link to={"About"}>
        <button
            className={`text-white hover:text-white ${activeButton === 'About' ? 'bg-teal-400' : ''}`}
            onClick={() => handleButtonClick('About')}
          >
            About
          </button>
        </Link>
         <Link to={"Contact"}>
         <button
            className={`text-white hover:text-white ${activeButton === 'Home' ? 'bg-teal-400' : ''}`}
            onClick={() => handleButtonClick('Home')}
          >
            Contact
          </button>
         </Link>
         <Link to={"Portfolio"}>
         <button
            className={`text-white hover:text-white ${activeButton === 'Portfolio' ? 'bg-teal-400' : ''}`}
            onClick={() => handleButtonClick('Portfolio')}
            
          >
            Portfolio
          </button>
         </Link>
        </div>
      </div>
      
    </nav>
  );
}
