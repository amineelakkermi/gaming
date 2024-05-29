import React, { useState } from 'react'
import styles from '../../style'
import { menu , close } from '../../assets'
import "./navbar.css"
import { navItems } from '../../navItems';




const Navbar = () => {
  
  
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  


  return (
    <nav className={`${styles.paddingX}  flex justify-between items-center bg-grey  py-[16px]`}>

    <div className='logo'>
    <h2 className='font-bold text-[32px] text-white'>Eldorado</h2>
    </div>      
     
     

      <ul className=" list-none lg:flex hidden justify-end items-center flex-1  gap-10">
        {navItems.map((nav, index) => (
          <li
            key={nav.id}
            className={`relative text-white font-poppins font-medium cursor-pointer text-[20px] duration-300 hover:text-yellow `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id} `}>{nav.title}</a>
          </li>
        ))}
      </ul>

     
    

      <div

      className={`lg:hidden flex  flex-1 justify-end items-center`}  >
         
         <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-[pointer]"
          onClick={() => setToggle(!toggle) }
          
          />
       
       
      
        <div
          className={`${
            !toggle ? "hidden" : "flex" 
          } z-20 p-6 bg-[dark] absolute top-20 right-0 mx-10 my-2 min-w-[140px] rounded-xl bg-[#011]  justify-center items-center sidebar`}
        >
      
        <ul className="list-none flex justify-center items-center  gap-8 flex-col">
            {navItems.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-white font-medium cursor-pointer text-[20px] 
                hover:text-yellow
                
                ${index === navItems.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title) && setToggle(toggle)
                 
                }
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
     

    </nav>
  );
};


export default Navbar;


{/*
import React from 'react'
import styles from '../../style'
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`${styles.paddingX} flex justify-between items-center bg-grey  py-[16px]`}>
    <div className='logo'>
     <h2 className='font-bold text-[32px] text-white'>Eldorado</h2>
    </div>

    <div className='links'>
        <ul className='links-liste flex gap-[48px]'>
        <li><a href="#" className='text-white font-medium text-[18px] hover:text-yellow transition-[0.4s]'>Currency</a></li>
        <li><a href="#" className='text-white font-medium text-[18px] hover:text-yellow transition-[0.4s]'>Account</a></li>
        <li><a href="#" className='text-white font-medium text-[18px] hover:text-yellow transition-[0.4s]'>Item</a></li>
        <li><a href="#" className='text-white font-medium text-[18px] hover:text-yellow transition-[0.4s]'>Boosting</a></li>
        </ul>
    </div>
    
    
    </div>
  )
}

export default Navbar

*/

}