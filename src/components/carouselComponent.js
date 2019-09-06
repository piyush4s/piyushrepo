import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class CarouselComponent extends React.Component {

    render() {
        return (
          
            <Carousel>
                <div>
                    <img src="http://wowslider.com/sliders/demo-93/data1/images/lake.jpg" alt="img1" />
                    <p className="legend">Lake</p>
                </div>
                <div>
                    <img src="http://wowslider.com/sliders/demo-93/data1/images/sunset.jpg" alt="img2"/>
                    <p className="legend">Sunset</p>
                </div>
                <div>
                    <img src="http://wowslider.com/sliders/demo-93/data1/images/landscape.jpg" alt="img3"/>
                    <p className="legend">Landscape</p>
                </div>
            </Carousel>
        )
    }

}
export default CarouselComponent;