import React from 'react';
import Button from './Button';

const CarouselComponent = ({ data }) => {
    return (
        <div className='lg:w-[836px] md:w-[650px] w-[300px] sm:max-h-auto md:max-h-[550px] relative lg:max-h-[800px] mx-auto w-screen flex flex-col items-center'>
            <div div className='flex flex-col items-center mt-12' >
                <h1 className='sm:text-5xl text-2xl font-extrabold z-10 text-center mx-1'>{data.title}</h1>
                <h3 className='text-sm sm:text-xl mt-3 text-text1 text-center font-medium z-10'>{data.subtitle}</h3>
                <Button gradient={data.button_gradient} />
            </div >
            <div className='flex w-full justify-evenly mt-10'>
                <div className='z-10 md:flex max-w-[220px]  flex-col hidden mt-[60px] md:mx-20'>
                    <img className='drop-shadow max-w-[210px] max-w-[200] ' src={data.left} />
                </div>
                <div className='z-10  md:w-full max-w-[220px]  flex justify-center'>
                    <img className='max-w-[210px] max-w-[200]' src={data.phone} />
                </div>
                <div className='z-10  md:flex max-w-[220px]  flex-col hidden mt-[140px] md:mx-20'>
                    <img className='drop-shadow max-w-[210px] max-w-[200] ' src={data.right} />
                </div>
            </div>
            <div className={`absolute bottom-[0px] h-[150px] w-full z-0 ${data.gradient}`}></div>
            <div className='lg:w-[836px] md:w-[650px] absolute bottom-0 left-0 right-0'>
                {data.svg}
            </div>

        </div>
    )
}

export default CarouselComponent