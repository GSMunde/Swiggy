import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

function OnlineDelivery() {
    const [data, setData] = useState([]);
    const elementRef = useRef(null);
    const [isTop, setIsTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          if (rect.top <= 0) {
            setIsTop(true);
          } else {
            setIsTop(false);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup listener on unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const FetchTopRestaurant = async () => {
        const res = await fetch(`https://swiggy-data-lovat.vercel.app/TopRestaurant`);
        const apiData = await res.json();
        setData(apiData);
        console.log(apiData);
        
    }

    useEffect(() => {
        FetchTopRestaurant();
    },[]);


  return (
    <div className='max-w-[1100px] mx-auto px-2' ref={elementRef}>
        <div className='flex items-center justify-between'>
            <div className='font-bold text-[25px] mb-[20px]'>Restaurants with online food delivery in Pune</div>
        </div>
        
        <div className={isTop ? 'fixed top-0 z-[999999] hover:bg-grey bg-white w-full left-0' : ''}>
            <div className='max-w-[1100px] mx-auto flex my-4 gap-3'>
                <div className='cursor-pointer py-2 px-3 rounded-lg shadow border border-grey-500'>Filter</div>
                <div className='cursor-pointer py-2 px-4 rounded-lg shadow border border-grey-500'>Sort by</div>

                <div className='cursor-pointer py-2 px-3 rounded-lg shadow border border-grey-500'>Fast Delivery</div>
                <div className='cursor-pointer py-2 px-4 rounded-lg shadow border border-grey-500'>New on Swiggy</div>
                <div className='cursor-pointer py-2 px-3 rounded-lg shadow border border-grey-500'>Ratings 4.0+</div>
                <div className='cursor-pointer py-2 px-4 rounded-lg shadow border border-grey-500'>Pure Veg</div>
                <div className='cursor-pointer py-2 px-3 rounded-lg shadow border border-grey-500'>Offers</div>
                <div className='cursor-pointer py-2 px-4 rounded-lg shadow border border-grey-500'>Rs. 300Rs - 600Rs</div>
                <div className='cursor-pointer py-2 px-3 rounded-lg shadow border border-grey-500'>Less than 300Rs</div>
            </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {data.map((e) => {
                return <Card {...e} key={e.id}/>
            })}
        </div>
        <hr className='my-5 border-[1px]'/>
    </div>
  )
}

export default OnlineDelivery;