import React, { useRef, useState } from "react";



// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Bestseller = () => {
    const categories = [
        {

            name: 'Headphones',
            href: '#',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MG20B1_Hero_800x800_1_2.jpg?v=1657269450&width=300',
            price: '150',
        },
        {

            name: 'Earphones',
            href: '#',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MW08SportGR_Angle_Right_800x800_8a72d3f1-7771-4cb1-8ceb-3106713e47d6_800x800_2.jpg?v=1657269636&width=300',
            price: '150',
        },
        {

            name: 'Speaker',
            href: '#',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MA770_Front_800x800_6fa371dc-5be6-4991-87b2-a70272cdea96_800x800_1.jpg?v=1657269756&width=300',
            price: '150',
        },
        {

            name: 'Collaborations',
            href: '#',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/1200x1200.jpg?v=1657270122&width=300',
            price: '150',
        },
        { name: 'Accessories', href: '#', price: '150', imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MC100_S3_hero_800x800_1.jpg?v=1657269855&width=300' },
    ]
    return (
        <div className="productSlider">
            <div className="container">
           <h1 className="bestseller_title">Best Seller</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                <div className="container">
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <div className="container" >
                                <img src={category.imageSrc} alt='image' className="z-10" />
                                <div className="bottom-10 z-20 relative" >
                                    <h3 className=" z-20 text-black"  >{category.name}</h3>
                                    <p className=" z-20 text-black"  >{category.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            </div>
        </div>
    )
}

export default Bestseller