import React from 'react'
import { Button } from '../iu/button'
import Icon3 from '../../assets/icons/icon3'

const HeroBack = ({ img, text, text1 }) => {
    return (
        <div className='pt-4'>
            <div className='bg-hero4 h-[100vh] bg-no-repeat pt-20'>
            <div className='container '>
                <div>
                    <p className='text-4xl font-medium pt-14 font-display2 text-mygreen'>{text}</p>
                    <p className='text-[80px] pt-8 text-darkblue font-extrabold tracking-tighter max-w-[700px]'>{text1}</p>
                </div>
                <div className='pt-12'>
                    <Button variant="outline" icon={<Icon3/>}>Explore Now</Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeroBack
