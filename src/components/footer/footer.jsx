import React from 'react'
import logo from "../../assets/Logo.svg"
import img from "../../assets/1.svg"
import img1 from "../../assets/2.svg"
import img2 from "../../assets/3.svg"
import img3 from "../../assets/4.svg"

export const Footer = () => {
    return (
        <div className='container'>
            <div className='flex items-center justify-between pt-32 pb-6'>
                <div className=''>
                    <p className='text-3xl font-bold text-darkblue'>Contact Us</p>
                    <p className='text-xl font-bold text-darkblue'>Email</p>
                    <p className='text-lg font-medium text-davygray'>needhelp@Organia.com</p>
                    <p className='text-xl font-bold text-darkblue'>Phone</p>
                    <p className='text-lg font-medium text-davygray'>666 888 888</p>
                    <p className='text-xl font-bold text-darkblue'>Address</p>
                    <p className='text-lg font-medium text-davygray'>88 road, borklyn street, USA</p>
                </div>
                <div>
                    <div className='h-[236px] w-[0.1px] bg-grey'>

                    </div>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <img src={logo} alt="" />
                    </div>
                    <p className='max-w-[600px] py-5 text-lg font-normal text-davygray'>Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing </p>
                    <div className='flex justify-center gap-3 pt-10'>
                        <img src={img} alt="icon" />
                        <img src={img1} alt="icon" />
                        <img src={img2} alt="icon" />
                        <img src={img3} alt="icon" />
                    </div>
                </div>
                <div className='h-[236px] w-[0.1px] bg-grey'>

                </div>
                <div>
                    <p className='pt-2 text-3xl font-bold text-darkblue'>Utility Pages</p>
                    <p className='pt-2 text-lg font-normal text-davygray'>Style Guide</p>
                    <p className='pt-2 text-lg font-normal text-davygray'>404 Not Found</p>
                    <p className='pt-2 text-lg font-normal text-davygray'>Password Protected</p>
                    <p className='pt-2 text-lg font-normal text-davygray'>Licences</p>
                    <p className='pt-2 text-lg font-normal text-davygray'>Changelog</p>
                </div>
            </div>
        </div>
    )
}

