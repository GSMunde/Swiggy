import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { TbRosetteDiscount } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import SideMenu from './SideMenu';


function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  } 

  const Links = [
    {
      path:"", logo : <IoSearch/>, title: "Search"
    },
    {
      path:"/offeres", logo : <TbRosetteDiscount/>, title: "Offeres"
    },
    {
      path:"/help", logo : <IoHelpBuoyOutline />, title: "Help"
    },
    {
      path:"/signin", logo : <FaRegUser />, title: "Sign In"
    },
    {
      path:"/cart", logo : <FaCartPlus />, title: "Cart"
    }
  ]

  return (
    <>
      <div className='black-overly w-full h-full fixed duration-500' style={{
        opacity : toggle ? 1 : 0,
        visibility : toggle ? 'visible' : 'hidden',
        zIndex:99999999
      }} onClick={hideSideMenu}>
        <div onClick={(e) => {
            e.stopPropagation();
        }} className='duration-[400ms] w-[400px] bg-white h-full absolute'
        style={{
          left : toggle ? '0%' : '-100%'
        }}><SideMenu/></div>
      </div>
      <header className='p-[10px] shadow-xl sticky top-0 bg-white z-[9999]'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
            <div className='w-[80px]'>
              <img className='w-full' src='/images/logo.png' alt="logo" />
            </div>
            <div className=''>
              <span className='font-bold border-b-[2px] border-[black] cursor-pointer hover:text-[#ff5200] hover:border-[#ff5200]'>Pimpri-Chinchwad</span>, Maharashtra, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold inline text-[#ff5200] cursor-pointer' />
            </div>
            <nav className='hidden md:flex font-medium list-none gap-10 ml-auto px-[20px] text-[18px]'>
                {Links.map((link) => {
                  return <li key={link.id} className='flex items-center gap-2 cursor-pointer hover:text-[#ff5200]'>{link.logo} {link.title}</li>
                })}
            </nav>
        </div>
       
      </header>
    </>
  )
}

export default Header;