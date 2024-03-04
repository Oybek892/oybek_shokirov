import React, { useEffect } from 'react'
import { dataCard } from '../../../data/data'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

const Card = ({ img, img1, price1, price2, im1, title, text }) => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <>
            
                <div className='p-3 bg-desertstorm rounded-3xl hover:drop-shadow-2xl w-[270px] h-[450px]' data-aos="fade-right">
                    <div className='pt-4 '>
                        <button className='px-3 py-1 border rounded-3xl bg-darkblue'>
                            <p className='text-base font-semibold text-center text-white'>{text}</p>
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <img src={img} alt="" />
                    </div>
                    <p className='pt-3 text-xl font-semibold text-darkblue'>{title}</p>
                    <div className='flex items-center justify-between pt-10'>
                        <div className='flex items-center gap-2 '>
                            <p className='line-through text-davygray'>{price1}</p>
                            <p className='text-lg font-extrabold text-davygray '>{price2}</p>
                        </div>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Card
