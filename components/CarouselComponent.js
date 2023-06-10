import React from 'react';
import Button from './Button';

const CarouselComponent = ({ data, children }) => {
    return (
        <div className='lg:w-[836px] md:w-[650px] sm:max-h-auto md:max-h-[550px] lg:max-h-[800px] mx-auto w-screen flex flex-col items-center'>
            <div className='flex flex-col items-center mt-12' >
                <h1 className='sm:text-5xl text-2xl font-extrabold z-10 text-center mx-1'>{data.title}</h1>
                <h3 className='text-sm sm:text-xl mt-3 text-text1 text-center font-medium z-10'>{data.subtitle}</h3>
                <Button gradient={data.button_gradient} />
            </div >

            <div className='flex w-full justify-evenly mt-10 relative'>
                <div className='z-10 md:flex flex-col hidden mt-[60px] ml-6'>
                    <img className='drop-shadow max-w-[150] md:max-w-[170px] md:max-h-[140px] lg:max-h-[220px]' src={data.left} />
                </div>
                <div className='z-10  md:w-full flex justify-center'>
                    <img className=' md:max-w-[220px] max-w-[200px] md:max-h-[300px] lg:max-h-[400px]' src={data.phone} />
                </div>
                <div className='z-10  md:flex flex-col hidden mt-[140px] mr-6'>
                    <img className='drop-shadow  max-w-[150] md:max-w-[170px]  md:max-h-[140px] lg:max-h-[220px]' src={data.right} />
                </div>
                <div className={`absolute bottom-[0px] h-[150px] w-[100%] md:w-[680px] lg:w-[866px] z-0 ${data.gradient}`}></div>
                <div className='md:w-[680px] lg:w-[866px] absolute bottom-0 left-0 right-0 justify-center items-center'>
                    {children}
                </div>
            </div>

            {/* <div className='absolute'>
                <div className={`relative bottom-[100px] h-[150px] w-[200px] md:w-[800px] z-0 ${data.gradient}`}></div>
                <YoutubeSVG />
            </div> */}

            {/* <YoutubeSVG />
            <YoutubeSVG />
            <div className=''>
                <YoutubeSVG />
            </div> */}



        </div >
    )
}

export default CarouselComponent