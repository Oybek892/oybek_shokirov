import React, { useEffect } from 'react'
import "./hero-section.css"
import img1 from "../../../assets/prof.svg"
import img2 from "../../../assets/Star.svg"
import { circleData } from '../../../data/data'
import Card1 from '../cards/card1'
import Aos from 'aos'
import "aos/dist/aos.css"


const HeroSection = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className='hero '>
                <div className='container ' data-aos="fade-left">
                    <div>
                        <p className='text-4xl font-normal text-center text-mygreen font-display2 pt-36' >Testimonial</p>
                        <p className='font-extrabold text-[50px] text-center text-darkblue '>What Our Customer Saying?</p>
                    </div>
                    <div className='flex justify-center pt-12'>
                        <div >
                            <img className='rounded-[100px] h-[84px]' src={img1} alt="img" />
                            <img className='ml-[-5px] pt-4' src={img2} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <p className='max-w-[750px] text-center text-davygray pt-8'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        </div>
                    </div>
                    <div>
                        <div className='pt-24 ' data-aos="fade-right">
                            <div className='flex justify-between'>
                                {circleData.map((item) => <Card1 key={item.id} text={item.text} title={item.title} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
