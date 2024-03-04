import React from 'react'
import { Button } from '../../iu/button'

const Card3 = ({img,title}) => {
    return (
        <>
            <div className=''>
                <img className=' h-[400px] ' src={img} alt="img" />
            </div>
            <div className='absolute'>
                <Button>{title}</Button>
            </div>
        </>
    )
}

export default Card3
