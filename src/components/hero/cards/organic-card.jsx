import React from 'react'

const OrganiCard = ({ img, name, title, icon1, icon2, icon3 }) => {
    return (
        <>
            <div>
                <div className='bg-desertstorm rounded-3xl hover:drop-shadow-2xl'>
                    <div><img src={img} alt="" /></div>
                    <div className='px-5'>
                        <p className='text-[25px] font-extrabold text-darkblue pt-14'>{name}</p>
                        <div className='flex justify-between pb-9'>
                            <p className=' text-[22px]  font-medium font-display2 text-mygreen'>{title}</p>
                            <div className='flex gap-4'>
                                <img src={icon1} alt="img" />
                                <img src={icon2} alt="img" />
                                <img src={icon3} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrganiCard
