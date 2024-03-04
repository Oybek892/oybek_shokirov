import React from 'react'

const OfferCard = ({img,text}) => {
    return (
        <>  
            <div>
                <div className='bg-white h[314px]  rounded-3xl  w-[254px] flex justify-center'>
                    <img className='h-72' src={img} alt="" />
                </div>
                <div className='text-center'>
                    <p className=' text-[25px] font-medium text-white pt-6'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default OfferCard
