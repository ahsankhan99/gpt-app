import React from 'react'
// import wa from '../assets/wa.png';


const Button = ({ gradient }) => {
    return (
        <div className={`p-2 mt-5 md:w-[250px] w-[200px] flex justify-center cursor-pointer items-center rounded-md ${gradient} button`}>
            <img src='/assets/wa.png' alt='Whatsapp Icon' />
            <p className='text-md font-medium ml-3'>Open in whatsapp</p>
        </div>
    )
}

export default Button