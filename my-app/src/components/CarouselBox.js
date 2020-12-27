import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import sl1Img from '../assets/sl07.jpg';
import sl2Img from '../assets/sl08.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>       
                <Carousel.Item>
                    <img className="d-block w-100" src={sl1Img} alt = "ERICK OH"/>
                    <Carousel.Caption>
                        <h3>ERICK OH</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={sl2Img} alt = "ERICK OH"/>
                    <Carousel.Caption>
                        <h3 >ERICK OH</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
