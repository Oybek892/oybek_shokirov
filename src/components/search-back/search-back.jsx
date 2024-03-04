import React from 'react'
import Icon3 from '../../assets/icons/icon3'
import { Button } from '../iu/button'
const SearchBack = () => {
    return (
        <div className='p-20 bg-hero3 rounded-3xl'>
            <div className='flex items-center'>
                <div>
                    <p className='text-[50px] text-white font-extrabold max-w-[450px]'>Subscribe to
                        our Newsletter
                    </p>
                </div>
                <div className='flex gap-2'>
                    <input className='pl-6 rounded-xl pr-28' type="text" placeholder='Your Email Address' />
                    <div>
                        <Button icon={<Icon3 />} variant="primary" >Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBack
