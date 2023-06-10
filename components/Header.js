'use client'
import React from 'react'
import { LuMoonStar } from 'react-icons/lu';

const Header = () => {

    return (
        <header className='border-bottom border-text1 h-[10vh]'>
            <div className='max-w-[1280px] mx-auto flex justify-between items-center gap-2 py-6 px-2 md:px-5'>
                <h1 className='md:text-xl text-xs sm:text-sm'><span className='font-medium'>WhatGPT.</span>ai</h1>
                <p className='text-[#9E9A9E] whitespace-nowrap md:text-xl sm:text-sm text-xs'>Discover AI from Whatsapp</p>

                <div className='flex w-20 gap-2 items-center'>
                    <LuMoonStar size={20} />
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        </header>
    )
}

export default Header