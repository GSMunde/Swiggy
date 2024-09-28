import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function Category() {
  const [category, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);


  const fetchCategory = async () => {
    const response = await fetch(`https://swiggy-data-lovat.vercel.app/FoodData`);
    const data = await response.json();
    setCategory(data);
    
  }

  useEffect(() => {
    fetchCategory();
  },[]);

  const nextSlide = () => {
    if (category.length - 8 === slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if(slide === 0) return fetchCategory;
    setSlide(slide - 3);
  }

  return (
    <div className='max-w-[1100px] mx-auto pt-[20px] px-2'>
        <div className='flex items-center justify-between'>
            <div className='font-bold text-[25px]'>What's on your mind?</div>
            <div className='flex'>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}><FaArrowLeft/></div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRight/></div>
            </div>
        </div>
        <div className='flex overflow-hidden'>
          {category.map((cat) => {
            return (
              <div key={cat.id} style={{
                transform: `translateX(-${slide * 100}%)`
              }} className='w-[138px] shrink-0 duration-500'>
                <img src={cat.image} alt="foodimage" />
              </div>
            )
          })}
        </div>
        <hr className='my-6 border-[1px]'/>
    </div>
   
  )
}

export default Category;