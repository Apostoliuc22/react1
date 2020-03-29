import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstPicture from '../assets/i1.jpeg';
import secondPicture from '../assets/i2.jpeg';
import thirdPicture from '../assets/i3.jpeg';

export default class SliderBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={firstPicture}
                        alt="Scary" >
                    </img>

                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                        src={secondPicture}
                        alt="ss" >

                    </img>

                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                        src={thirdPicture}
                        alt="dd"  >

                    </img>

                </Carousel.Item>
            </Carousel>
        )
    }
}
