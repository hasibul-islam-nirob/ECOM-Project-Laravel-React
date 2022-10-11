import React, {Component} from 'react';
import Slider from "react-slick";

class SliderHome extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay:true,
            autoplaySpeed:3000,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <Slider {...settings}>
                    <div >
                        <img className="slider-img " src="https://img.alicdn.com/imgextra/i4/O1CN01y5qqOt1niqDGbf0od_!!6000000005124-0-tps-1976-688.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="slider-img " src="https://img.alicdn.com/imgextra/i4/O1CN01y5qqOt1niqDGbf0od_!!6000000005124-0-tps-1976-688.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="slider-img " src="https://img.alicdn.com/imgextra/i4/O1CN01y5qqOt1niqDGbf0od_!!6000000005124-0-tps-1976-688.jpg" alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SliderHome;