import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './Card';

function TopRestaurant() {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const FetchTopRestaurant = async () => {
        const res = await fetch(`https://swiggy-data-lovat.vercel.app/TopRestaurant`);
        const apiData = await res.json();
        setData(apiData);
        console.log(apiData);
        
    }

    useEffect(() => {
        FetchTopRestaurant();
    },[]);


  const handleNext = () => {
    if (currentIndex < data.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

      
  return (
    <div className=' max-w-[1100px] mx-auto px-2 overflow-hidden'> 
        <div className='flex items-center justify-between'>
            <div className='font-bold text-[25px] mb-[20px]'>Top restaurant chains in Pune</div>
            <div className='flex'>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'onClick={handlePrev}><FaArrowLeft/></div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={handleNext}><FaArrowRight/></div>
            </div>
        </div>
        <div className='flex gap-6 shrink-0 duration-500' style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
          }}>
            {data.map((rest) => {
                return (
                        <Card width= "w-full md:w-[250px] " key={rest.id} {...rest} />
                )
            })}

        </div>
        <hr className='my-5 border-[1px]'/>
    </div>
  )
}

export default TopRestaurant;
