// export default CustomCarousel;
import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules


import {Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Swiper styles

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/css';
import 'swiper/css/navigation.css';
// import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const MySwiper = ({arrayImage}) => {


const [swiper, setSwiper] = useState([]);
useEffect(() => {
  setSwiper(arrayImage)
},[])
  return (
    <Swiper
    
    spaceBetween={30}
    slidesPerView={2}
    loop={true}
    // navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500, disableOnInteraction: true }}
    effect="fade"
    breakpoints={{
      0: { slidesPerView: 1, navigation:false }, // When screen width is <= 735px
      736: { slidesPerView: 2, navigation: true }, // When screen width is > 735px
    }}
    className='custom-swiper'
    >
      {swiper.map((item,index) => {
        return (
          <SwiperSlide key={index} style={{ width: "400px", height: "500px"}}>
            <img src={require('../../' + item)} alt={'slide' + index} width={'100%'} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default MySwiper;