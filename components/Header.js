'use client'
import React from 'react'
import { LuMoonStar } from 'react-icons/lu';
import { ToggleSlider } from 'react-toggle-slider';
import { useToggleSlider } from "react-toggle-slider"



const Header = () => {
    const [toggleSlider, active] = useToggleSlider({ barBackgroundColor: "#848484", barBackgroundColorActive: '#2B2B2E', barHeight: 16, barWidth: 36, handleSize: 15 });

    return (
        <header className='border-bottom border-text1 h-[10vh]'>
            <div className='max-w-[1280px] mx-auto flex justify-between items-center gap-2 py-6 px-2 md:px-5'>
                <h1 className='md:text-xl text-xs sm:text-sm'><span className='font-medium'>WhatGPT.</span>ai</h1>
                <p className='text-[#9E9A9E] whitespace-nowrap md:text-xl sm:text-sm text-xs'>Discover AI from Whatsapp</p>

                <div className='flex w-20 gap-1 items-center'>
                    <LuMoonStar size={20} />
                    {toggleSlider}
                </div>
            </div>
        </header>
    )
}

export default Header