import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo.svg"
import korzinka from "../../assets/korzonka.svg"
import search from "../../assets/search.svg"



export const Header = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex items-center justify-between pt-3'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex gap-8 text-darkblue '>
                        <Link className='text-xl font-bold' to='/'>Home</Link>
                        <Link className='text-xl font-bold' to='/about'>about</Link>
                        <select className='text-xl font-bold' name="pages" id="pages">
                            <option value="page">Pages</option>
                        </select>
                        <Link className='text-xl font-bold ' to="/shop">Shop</Link>
                        <Link className='text-xl font-bold'>Projects</Link>
                        <Link className='text-xl font-bold'>News</Link>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='flex'>
                            <input className='py-4 pl-3 border border-gray rounded-3xl' placeholder='Search' type="text" />
                            <img className='absolute ml-[159px] cursor-pointer ' src={search} alt="" />
                        </div>
                        <div className='flex items-center px-1 py-1 border rounded-full border-gray'>
                            <img src={korzinka} alt="img" />
                            <p className='text-lg font-semibold text-darkblue'>Cart(0)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

