import React from 'react'
import { dataBack3 } from '../../data/data'
import Back from '../../components/back/back'
import SearchBack from '../../components/search-back/search-back'
import { Button } from '../../components/iu/button'
import { dataCard } from '../../data/data'
import Card from '../../components/hero/cards/card'
import Card4 from '../../components/hero/cards/card4'
import { Link, useParams } from 'react-router-dom'


const ShopMore = () => {

    const params = useParams();
    const product = dataCard.find((obj) => obj.id === Number(params.slug));

    console.log(product);

    const randomproducts = dataCard
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    const randomproducts1 = dataCard
        .sort(() => Math.random() - 0.5)
        .slice(0, 1);

    return (
        <>
            <section>
                <div className='pb-64'>
                    {dataBack3.map((item) => <Back key={item.id} text={item.text} img={item.img} />)}
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className=''>
                        <Card4 title={product.title} img={product.img}/>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='flex justify-center gap-3 '>
                        <Button variant="primary">Product Description</Button>
                        <Button variant="outline2">Additional Info</Button>
                    </div>
                    <div>
                        <p className='pt-10 text-lg font-medium text-center text-davygray'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div>
                        <p className='text-darkblue font-extrabold text-[50px] text-center pt-32'>Related Products</p>
                    </div>
                    <div>
                        <div className='flex justify-between gap-10 pt-32'>
                            {randomproducts.map((item) => <Card key={item.id} text={item.text} img={item.img} title={item.title} price1={item.price1} price2={item.price2} img1={item.img1} />)}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='pt-32'>
                        <SearchBack />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopMore
