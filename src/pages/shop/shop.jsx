import React from 'react'
import { dataBack2, dataCard } from '../../data/data'
import Back from '../../components/back/back'
import SearchBack from '../../components/search-back/search-back'
import Card from '../../components/hero/cards/card'
import { Link } from 'react-router-dom'

const Shop = () => {
    return (
        <>
            <section>
                <div>
                    <div className='py-[50px] pb-16'>
                        {dataBack2.map((item) => <Back key={item.id} img={item.img} text={item.text} />)}
                    </div>
                </div>
            </section>
            <section>
                <div className='container pt-48'>
                    <div className='inline-grid grid-cols-4 gap-10'>
                        {dataCard.map((item) => <Link key={item.id} to={`/shopmore/${item.id}`}><Card  text={item.text} img={item.img} title={item.title} price1={item.price1} price2={item.price2} img1={item.img1} /></Link>)}
                    </div>
                </div>
            </section>
            <section>
                <div className='container pt-32'>
                    <SearchBack />
                </div>
            </section>
        </>
    )
}

export default Shop
