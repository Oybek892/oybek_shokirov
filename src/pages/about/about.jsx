import React from 'react'
import HeroBack from '../../components/hero-back/hero-back'
import { dataAbout, dataBack, dataBack1, offetData, organicDta } from '../../data/data'
import { Button } from '../../components/iu/button'
import Icon7 from '../../assets/icons/icon7'
import Icon3 from '../../assets/icons/icon3'

import Back from '../../components/back/back'
import img1 from "../../assets/about1.svg"
import img2 from "../../assets/about5.svg"
import Icon5 from '../../assets/icons/icon5'
import Icon6 from '../../assets/icons/icon6'
import SearchBack from '../../components/search-back/search-back'
import AboutCard from '../../components/hero/cards/about-card'
import OrganiCard from '../../components/hero/cards/organic-card'
import OfferCard from '../../components/hero/cards/offer-card'
import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/footer'

export const About = () => {
    return (
        <>
        <Header/>
            <section>
                <div>
                    {dataBack1.map((item) => <Back key={item.id} img={item.img} text={item.text} />)}
                </div>
            </section>
            <section>
                <div className='pt-36'>
                    <div className='container'>
                        <div className='flex items-center py-32'>
                            <div>
                                <img src={img1} alt="img" />
                            </div>
                            <div>
                                <p className='pb-2 text-4xl font-normal font-display2 text-mygreen'>About Us</p>
                                <p className='text-5xl font-extrabold pb-7 text-darkblue'>We do Creative
                                    Things for Success</p>
                                <p className='text-lg font-medium pb-12 text-davygray max-w-[750px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <p className='text-lg font-medium pb-12 text-davygray max-w-[750px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-5 pb-7'>
                                        <Icon5 />
                                        <div>
                                            <p className='font-extrabold pb-2 text-[20px] max-w-[280px] text-darkblue'>Modern Agriculture
                                                Equipment
                                            </p>

                                        </div>
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <Icon6 />
                                        <div>
                                            <p className='font-extrabold pb-2 text-[20px] max-w-[260px] text-darkblue'>No growth hormones are used</p>

                                        </div>
                                    </div>
                                </div>
                                <div className='pt-16'>
                                    <Button icon={<Icon3 />} variant="primary" >Explore More  </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='py-40 bg-desertstorm'>
                    <div className='container'>
                        <div className='flex items-center justify-between gap-10'>
                            <div>
                                <div>
                                    <p className='text-4xl font-normal font-display2 text-mygreen'>Why Choose us?</p>
                                    <p className='text-[50px] font-extrabold text-darkblue max-w-[650px] tracking-tighter pt-2'>We do not buy from the
                                        open market & traders.</p>
                                    <p className='text-lg font-normal pb-8 text-davygray max-w-[800px] tracking-tighter'> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                                </div>
                                <div>
                                    <div className='px-5 bg-grey rounded-3xl py-7 max-w-[400px]'>
                                        <div className='flex items-center gap-2 '>
                                            <Icon7 />
                                            <p className='text-xl font-medium'>100% Natural Product</p>
                                        </div>
                                    </div>
                                    <p className='text-lg font-normal  p-8 text-davygray max-w-[800px] tracking-tighter'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                                    <div>
                                        <div className='px-5 bg-grey rounded-3xl py-7 max-w-[400px]'>
                                            <div className='flex items-center gap-2 '>
                                                <Icon7 />
                                                <p> Increases resistance</p>
                                            </div>
                                        </div>
                                        <p className='text-lg font-normal  p-8 text-davygray max-w-[800px] tracking-tighter'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className='rounded-3xl' src={img2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between gap-7 '>
                                {dataAbout.map((item) => <AboutCard key={item.id} img={item.img} name={item.name} title={item.title} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div>
                        <p className='pt-24 text-4xl font-normal text-center font-display2 text-mygreen'>Team</p>
                        <p className='text-darkblue text-[50px] font-extrabold text-center'>Our Organic Experts</p>
                        <div className='flex justify-center'>
                            <p className=' pb-16 pt-5    text-lg font-medium text-center text-davygray max-w-[1000px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-7'>
                        {organicDta.map((item) => <OrganiCard key={item.id} name={item.name} img={item.img} title={item.title} icon1={item.icon1} icon2={item.icon2} icon3={item.icon3} />)}
                    </div>
                </div>
            </section>
            <section className='pb-32'>
                <div className='py-40 bg-darkblue'>
                    <div className='container '>
                        <div>
                            <p className='text-4xl font-medium text-center font-display2 text-mygreen '>About Us</p>
                            <p className='text-[50px]  text-center font-extrabold text-white pt-8'>What We Offer for You</p>
                        </div>
                        <div>
                            <div className='flex justify-between pt-24'>
                                {offetData.map((item)=><OfferCard key={item.id} img={item.img} text={item.text} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <SearchBack />
                </div>
            </section>
            <Footer/>
        </>
    )
}

