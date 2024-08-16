import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-gray-100/20 text-gray-800   py-4 px-6 flex items-center justify-between">
      <NavLink 
        to={'/'} 
        className="w-10 h-10 flex items-center justify-center bg-white rounded-lg font-bold shadow-md"
      >
        <p className='blue-gradient_text'>PR</p>
      </NavLink>
      <nav className="space-x-4">
        <NavLink 
          to="/movies"
          className={({ isActive }) => 
            `text-gray-800 hover:text-gray-600 transition-colors duration-200 ${isActive ? 'text-blue-500' : ''}`
          }
        >
          Movie List
        </NavLink>
        <NavLink 
          to="/add-review" 
          className={({ isActive }) => 
            `text-gray-800 hover:text-gray-600 transition-colors duration-200 ${isActive ? 'text-blue-500' : ''}`
          }
        >
          Add Review
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
