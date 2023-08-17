import React, { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';



const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    
    <nav className='z-40 w-full fixed top-0 py-6 bg-dark-accent-1 '>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold text-white ">SC</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            
            
            <Link href="/Login" className='text-white '>
              Login
            </Link>
            <Link href="/Register" className='text-white '>
              SignUp
            </Link>
              
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
            <Link href="/Home">
              Home
            </Link>
              
            <Link href="/Home">
              Home
            </Link>
             
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
