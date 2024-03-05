import React, { useEffect } from 'react'
import { MainLayout } from '../../layout/main-layout'
import { Button } from '../../components/iu/button'
import { dataBack, dataCard, dataCard2 } from '../../data/data'
import Icon from '../../assets/icons/icon'
import Icon1 from '../../assets/icons/icon1'
import img1 from "../../assets/Image1.svg"
import img2 from "../../assets/Image.svg"
import img4 from "../../assets/img11.svg"
import img8 from "../../assets/img2.svg"
import Icon3 from '../../assets/icons/icon3'
import Card from '../../components/hero/cards/card'
import HeroSection from '../../components/hero/hero-section/hero-section'
import img5 from "../../assets/img12.svg"
import img6 from "../../assets/image10.svg"
import img7 from "../../assets/img14.svg"
import date from "../../assets/Date.svg"
import Icon4 from '../../assets/icons/icon4'
import SearchBack from '../../components/search-back/search-back'
import HeroContent from '../../components/hero-content/hero-content'
import HeroBack from '../../components/hero-back/hero-back'
import { Link, useParams } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"


export const Home = () => {
    const params = useParams();
    const product = dataCard.find((obj) => obj.id === Number(params.slug));
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <MainLayout>
                <section>
                    <div>
                        <div>
                            <div>
                                {dataBack.map((item) => <HeroBack key={item.id} img={item.img} text={item.text} text1={item.text1} />)}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container flex justify-center gap-5 pt-36'>
                        <div data-aos="fade-right">
                            <img className='w-[550px]' src={img1} alt="img" />
                            <p className='absolute font-display2 mt-[-200px] pl-10 font-normal text-4xl text-white'>Natural!!</p>
                            <p className='absolute mt-[-150px] font-extrabold text-white pl-10 text-[40px] w-[360px]'>Get Garden Fresh Fruits</p>
                        </div>
                        <div data-aos="fade-left">
                            <img className='w-[550px]' src={img2} alt="img" />
                            <p className='font-display2 absolute mt-[-200px] pl-10 text-4xl font-normal text-mygreen'>Offer!!</p>
                            <p className='absolute mt-[-150px] font-extrabold text-darkblue pl-10 text-[40px] w-[360px]'>Get 10% off
                                on Vegetables</p>
                        </div>
                    </div>
                </section>
                <section className='pt-32'>
                    <div className=' bg-desertstorm'  >
                        <div className='container'>
                            <div className='flex items-center py-32'>
                                <div data-aos="fade-right">
                                    <img src={img8} alt="img" />
                                </div>
                                <div data-aos="fade-left">
                                    <p className='pb-2 text-4xl font-normal font-display2 text-mygreen'>About Us</p>
                                    <p className='text-5xl font-extrabold pb-7 text-darkblue'>We Believe in Working
                                        Accredited Farmers</p>
                                    <p className='text-lg font-medium pb-12 text-davygray max-w-[750px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                    <div>
                                        <div className='flex items-center gap-5 pb-7' >
                                            <Icon />
                                            <div>
                                                <p className='font-extrabold pb-2 text-[25px] text-darkblue'>Organic Foods Only</p>
                                                <p className='text-lg font-medium text-davygray'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-5'>
                                            <Icon1 />
                                            <div>
                                                <p className='font-extrabold pb-2 text-[25px] text-darkblue'>Quality Standards</p>
                                                <p className='text-lg font-medium text-davygray'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-16'>
                                        <Link to="/shop">
                                            <Button icon={<Icon3 />} variant="primary" >Shop Now  </Button>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div>
                            <div className='grid grid-cols-4 grid-rows-2 gap-4 pt-8' data-aos="fade-right" >
                                {/* {dataCard.map((item) =>
                                    <Link key={item.id} to="/shopmore">
                                        <Card text={item.text} img={item.img} title={item.title} price1={item.price1} price2={item.price2} img1={item.img1} />
                                    </Link>
                                )} */}
                        {dataCard.map((item) => <Link key={item.id} to={`/shopmore/${item.id}`}><Card  text={item.text} img={item.img} title={item.title} price1={item.price1} price2={item.price2} img1={item.img1} /></Link>)}

                            </div>
                        </div>
                        <div>
                            <p className='text-4xl font-normal text-center font-display2 text-mygreen'>Categories </p>
                            <p className='font-extrabold text-[50px] text-darkblue text-center'>Our Products</p>
                        </div>

                        <div className='flex justify-center pt-32'>
                            <Link to="/shop">
                                <Button icon={<Icon3 />} variant="primary" >Load More  </Button>
                            </Link>
                        </div>

                    </div>
                </section>
                <section >
                    <HeroSection />
                </section>
                <section>
                    <div className='bg-darkblue'>
                        <div className='container py-[100px]'>
                            <div>
                                <p className='pb-2 text-4xl font-normal font-display2 text-mygreen'>Offer</p>
                                <div className='flex justify-between'>
                                    <p className='text-[50px] font-extrabold text-white tracking-tighter'>We Offer Organic For You</p>
                                    <div>
                                        <Button icon={<Icon3 />} variant="outline" >View All Product </Button>
                                    </div>
                                </div>

                            </div>
                            <div className='grid grid-cols-4 gap-4 pt-8'>
                                {dataCard2.map((item) => <Link to="/shopmore" key={item.id}>
                                    <Card text={item.text} img={item.img} title={item.title} price1={item.price1} price2={item.price2} img1={item.img1} />
                                </Link>)}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className=''>
                        <div className='flex items-center'>
                            <div>
                                <img className='h-[1100px]' src={img4} alt="img" />
                            </div>
                            <div className='flex  ml-[-90px]' data-aos="fade-left">
                                <div className=' p-20 bg-white max-w-[700px] rounded-3xl'>
                                    <p className='text-4xl font-medium text-mygreen font-display2'>Eco Friendly</p>
                                    <p className='text-[50px] font-extrabold tracking-tighter text-darkblue'>Econis is a Friendly
                                        Organic Store</p>
                                    <div>
                                        <p className='text-2xl font-medium text-darkblue'>Start with Our Company First</p>
                                        <p className='text-lg font-normal text-davygray'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl font-medium text-darkblue'>Learn How to Grow Yourself</p>
                                        <p className='text-lg font-normal text-davygray'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl font-medium text-darkblue'>Farming Strategies of Today</p>
                                        <p className='text-lg font-normal text-davygray'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=''>
                    <div className='bg-desertstorm pb-[350px] pt-32'>
                        <div className='flex justify-between'>
                            <div data-aos="fade-down-right">
                                <div>
                                    <img className='h-[450px] ' src={img5} alt="" />
                                </div>
                                <div className='mt-[-260px] pl-[100px]'>
                                    <Button variant="outline1">Organic Juice</Button>
                                </div>
                            </div >
                            <div data-aos="fade-down">
                                <div>
                                    <img className='h-[450px] ' src={img6} alt="" />
                                </div>
                                <div className='mt-[-260px] pl-[100px]'>
                                    <Button variant="outline1">Organic Food</Button>
                                </div>
                            </div>
                            <div data-aos="fade-down-left">
                                <div>
                                    <img className='h-[450px] ' src={img7} alt="" />
                                </div>
                                <div className='mt-[-260px] pl-[100px]'>
                                    <Button variant="outline1">Nuts Cookis</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container pt-28'>
                        <div>
                            <div>
                                <p className='text-4xl font-medium font-display2 text-mygreen'>News</p>
                                <div className='flex items-center justify-between'>
                                    <p className='text-darkblue text-[50px] font-extrabold tracking-tighter max-w-[800px]'>Discover weekly content about organic food, & more</p>
                                    <div>
                                        <Button icon={<Icon3 />} variant="primary2" >More News</Button>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between '>
                                        <div data-aos="fade-down-right" className='bg-no-repeat bg-hero h-[100vh] max-w-[590px] p-11 rounded-3xl'>
                                            <div>
                                                <img className='w-[82px]' src={date} alt="" />
                                            </div>
                                            <div className='pt-24'>
                                                <div className='max-w-xl py-12 bg-white shadow-2xl rounded-3xl px-14 '>
                                                    <div className='flex items-center gap-2 '>
                                                        <Icon4 />
                                                        <p className='text-lg font-medium text-darkblue'>By Rachi Card</p>
                                                    </div>
                                                    <div>
                                                        <p className='pt-4 text-2xl font-extrabold text-darkblue'>The Benefits of Vitamin D & How to Get It</p>
                                                        <p className='pt-2 text-lg font-normal text-davygray opacity-80'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                                    </div>
                                                    <div className='pt-6'>
                                                        <Button icon={<Icon3 />} variant="outline" >Read More</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-down-left" className=' bg-no-repeat bg-hero2 max-w-[590px] rounded-3xl h-[100vh] p-11'>
                                            <div>
                                                <img className='w-[82px]' src={date} alt="" />
                                            </div>
                                            <div className='pt-24'>
                                                <div className='py-12 bg-white shadow-2xl rounded-3xl px-14'>
                                                    <div className='flex items-center gap-2 '>
                                                        <Icon4 />
                                                        <p className='text-lg font-medium text-darkblue'>By Rachi Card</p>
                                                    </div>
                                                    <div>
                                                        <p className='pt-4 text-2xl font-extrabold text-darkblue'>The Benefits of Vitamin D & How to Get It</p>
                                                        <p className='pt-2 text-lg font-normal text-davygray opacity-80'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                                    </div>
                                                    <div className='pt-6'>
                                                        <Button icon={<Icon3 />} variant="outline" >Read More</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container ' data-aos="fade-up"
                        data-aos-anchor-placement="top-center">
                        <SearchBack />

                    </div>
                </section>
            </MainLayout>
        </div>
    )
}

