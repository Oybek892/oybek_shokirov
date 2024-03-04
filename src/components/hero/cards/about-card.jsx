import React from 'react'
import Icon11 from '../../../assets/icons/icon11'

const AboutCard = ({name,title,img}) => {
    return (
        <div className='pt-10 pb-5 bg-white px-7 rounded-3xl'>
            <div className='flex justify-center'>
                <img src={img} alt="" />
            </div>
            <div>
                <p className='text-2xl pt-5 font-extrabold text-center text-darkblue letter-spacing: -0.05em;'>{name}</p>
                <p className='text-base pt-4 font-normal text-center pb-9 text-davygray letter-spacing: -0.05em;'>{title}</p>
            </div>
        </div>
    )
}

export default AboutCard
