import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import rows_white from "./assets/rows_white.png"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [rotation, setRotation] = useState(0);

    const rotateImage = () => {
        setRotation(rotation + 90);
     };

    return(
    <nav>
    <div className='hidden md:flex flex justify-center h-[100px] text-white'>
     {/* menu */}
        <ul className='flex justify-center items-center gap-[6rem] text-lg'>
          <li>
            <Link to="/" className='active:font-bold hover:underline-offset-8'>Home</Link>
          </li>
          <li>
            <NavLink to="/about" className='active:font-bold hover:underline-offset-8'>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className='active:font-bold hover:underline-offset-8'>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/resume" className='active:font-bold hover:underline-offset-8'>Resume</NavLink>
          </li>
        </ul>
      </div>

      <div className="md:hidden px-4 py-10 flex justify-left text-white">
      {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 flex justify-items-start size-10' >
          <img onClick={rotateImage}
          style={{ transform: `rotate(${rotation}deg)` }}
          src={rows_white}
           />
        </div>
      
      {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-black dark:text-white'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Resume</li>
        </ul>      
      </div>
    
    </nav>
 );
}

export default Navbar;
