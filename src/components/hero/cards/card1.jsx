import React from 'react'

const Card1 = ({ title, text }) => {
    return (
        <div className='p-[2px] border-4 rounded-full border-mygreen'>
            <div className='  flex justify-center items-center w-[211px] h-[211px] rounded-full bg-grey'>
                <div className=''>
                    <p className='text-center text-[50px] font-extrabold text-darkblue'>{text}</p>
                    <p className='text-lg font-semibold text-center text-darkblue '>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card1
