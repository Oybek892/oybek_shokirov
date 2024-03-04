import React from 'react'

const Back = ({img,text}) => {
    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p className='font-extrabold text-7xl text-darkblue mt-[-245px] flex justify-center'>{text}</p>
            </div>
        </div>
    )
}

export default Back
