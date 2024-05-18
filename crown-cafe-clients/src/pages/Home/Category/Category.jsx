import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='container mx-auto py-20'>
            <SectionTitle
                subHeading="From 11:00am to 10:00pm"
                Heading="ORDER ONLINE"
            ></SectionTitle>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }} breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-[400px] md:h-[480px] flex items-end justify-center" style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${slide1})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <h1 className="text-white text-4xl font-Cinezl font-semibold pb-10">Salads</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[400px] md:h-[480px] flex items-end justify-center" style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${slide2})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <h1 className="text-white text-4xl font-Cinezl font-semibold pb-10">Soups</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[400px] md:h-[480px] flex items-end justify-center" style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${slide3})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <h1 className="text-white text-4xl font-Cinezl font-semibold pb-10">pizzas</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[400px] md:h-[480px] flex items-end justify-center" style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${slide4})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <h1 className="text-white text-4xl font-Cinezl font-semibold pb-10">desserts</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[400px] md:h-[480px] flex items-end justify-center" style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${slide5})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <h1 className="text-white text-4xl font-Cinezl font-semibold pb-10">Salads</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;