import React from 'react';
import { TbCurrentLocation } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";

function SideMenu() {
  return (
    <div>
        <input type="text" placeholder='Search for area, Street Name...' className='border border-grey-400 w-[350px] p-[10px] shadow m-[30px] mb-[-20px]' />

        <div className='border border-grey-400 w-[350px] p-[15px] m-[30px] '>
            <div className='flex gap-3 cursor-pointer hover:text-[#ff5200]'>
                <TbCurrentLocation className='mt-[5px]'/>
                <h3>Get Current Location</h3>
            </div>
            <p className='pl-[28px] text-[#02060C99]'>Using GPS</p>
        </div>


        <div className='border border-grey-400 w-[350px] m-[30px] p-[10px]'>

            <p className='pl-[28px] text-[15px] text-[#02060C99]'>RECENT SEARCHES</p>

            <div className=' w-[300px] p-[15px]'>
                <div className='flex gap-3 cursor-pointer hover:text-[#ff5200]'>
                    <FaClockRotateLeft className='mt-[5px]'/>
                    <h3>Pimpri Chinchwad</h3>
                </div>
                <p className='pl-[28px] text-[#02060C99]'>Maharashtra, India</p>
            </div>
            
            <div className="border-t-2 border-dashed border-gray-300 "></div>

            <div className=' w-[300px] p-[15px]'>
                <div className='flex gap-3 cursor-pointer hover:text-[#ff5200]'>
                    <FaClockRotateLeft className='mt-[5px]'/>
                    <h3>Pimpri Chinchwad</h3>
                </div>
                <p className='pl-[28px] text-[#02060C99]'>Maharashtra, India</p>
            </div>
        </div>
    </div>
  )
}

export default SideMenu;