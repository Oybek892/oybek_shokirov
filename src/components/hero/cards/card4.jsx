import React from 'react'
import { Button } from '../../iu/button'
import Icon3 from '../../../assets/icons/icon3'
import { dataCard } from '../../../data/data'

const Card4 = ({ img, text, title, img1, price1, price2 }) => {

   

    return (
        <>
            <div>
                <div className='flex justify-center'> 
                    <div>
                        <img className='h-[500px] ' src={img} alt="img" />
                        <button  className='absolute px-3 py-1 border rounded-3xl bg-darkblue mt-[-400px]'>
                            <p className='text-base font-semibold text-center text-white'>{text}</p>
                        </button>
                    </div>
                    <div>
                        <p className='font-semibold text-[40px] text-darkblue'>{title}</p>
                        <img className='pb-4' src={img1} alt="" />
                        <div className='flex items-center gap-2 '>
                            <p className='text-lg line-through text-darkblue'>{price1}</p>
                            <p className='text-2xl font-bold text-davygray'>{price2}</p>
                        </div>
                        <p className='py-8 text-lg font-medium text-davygray '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <div>
                            <div className='flex items-center gap-8'>
                                <p className='text-xl font-bold text-darkblue'>Quantity :</p>
                                <Button variant="outline2">1</Button>
                                <Button variant="primary" icon={<Icon3 />}>Add To Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card4
