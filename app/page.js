"use client"
import CarouselComponent from "@/components/CarouselComponent";
import React, { useRef } from "react";
import { YoutubeSVG, Image, Voice, GPT } from '../components/SVG';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
  const swiperRef = useRef();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const component_data = [
    {
      id: 1,
      title: <div><h1>Summarize <span className="gradient-yt">Youtube</span> Video</h1></div>, subtitle: "Send a video and transform to short text",
      phone: '/assets/youtube-phone.png',
      left: '/assets/youtube-left.png', right: '/assets/youtube-right.png',
      gradient: 'youtube-gradient',
      button_gradient: 'youtube-button-gradient',
      svg: <YoutubeSVG />
    },
    {
      id: 2,
      title: <div><h1>Ai <span className="gradient-image">Image</span> Generation</h1></div>, subtitle: "You can give it prompts, and it uses AI to generate images",
      phone: '/assets/image-phone.png',
      left: '/assets/image-left.png', right: '/assets/image-right.png',
      gradient: 'image-gradient',
      button_gradient: 'image-button-gradient',
      svg: <Image />
    },
    {
      id: 3,
      title: <div><h1>Transcribe <span className="gradient-voice">Voice</span> Notes</h1></div>, subtitle: "You can send voice notes, and it will transcribe them",
      phone: '/assets/voice-phone.png',
      left: '/assets/voice-left.png', right: '/assets/voice-right.png',
      gradient: 'voice-gradient',
      button_gradient: 'voice-button-gradient',
      svg: <Voice />
    },
    {
      id: 4,
      title: <div><h1>Chat <span className="gradient-gpt">with</span> GPT</h1></div>, subtitle: "You can use chatgpt without waiting or queues",
      phone: '/assets/gpt-phone.png',
      left: '/assets/gpt-left.png', right: '/assets/gpt-right.png',
      gradient: 'gpt-gradient',
      button_gradient: 'gpt-button-gradient',
      svg: <GPT />
    },
  ];

  return (
    <div >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={() => console.log('slide change')}
        style={{
          "--swiper-pagination-color": "#FFF",
          "--swiper-pagination-bullet-inactive-color": "#333",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {component_data.map((item) => <SwiperSlide key={item.id} className='w-screen'><CarouselComponent data={item}>{item.svg}</CarouselComponent></SwiperSlide>)}
        <div ref={prevRef} className="hidden md:flex w-[60px] h-[40px] border-[1px] border-[#454545] flex items-center justify-center rounded-[100px] arrow-right absolute left-[10%] top-[50%] cursor-pointer z-50 hover:border-white" >
          <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16L1.39876e-06 8L8 -1.39876e-06L9.425 1.4L3.825 7L36 6.99999L36 8.99999L3.825 9L9.425 14.6L8 16Z" fill="#A8A8A8" />
          </svg>
        </div>
        <div ref={nextRef} className="hidden md:flex w-[60px] h-[40px]  border-[1px] border-[#454545] flex items-center justify-center rounded-[100px] arrow-right absolute z-50  right-[10%] cursor-pointer top-[50%] hover:border-white" >
          <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 -6.99382e-07L36 8L28 16L26.575 14.6L32.175 9L6.11959e-07 9L7.86805e-07 7L32.175 7L26.575 1.4L28 -6.99382e-07Z" fill="#A8A8A8" />
          </svg>
        </div>
      </Swiper>
    </div >

  )
}
