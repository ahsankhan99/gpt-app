import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';

const CarouselComponent = () => {
    return (
        <Carousel>
            <div>
                <Header />
            </div>
            <div>
                <Footer />
            </div>
            <div>
                <Button />
            </div>
        </Carousel>
    )
}

export default CarouselComponent