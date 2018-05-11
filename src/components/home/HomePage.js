import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="jumbotron text-center jumbotron-image">
                    <div className="image-layer"></div>
                    <div className="jumbotron-content">
                        <div className="display-4">ZD Motor Canada</div>
                        <p className="lead">we pride ourselves in offering you world class products at the most competitive prices found in the industry.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Find More About Us</a>
                    </div>
                </div>
                <div className="product-intro">
                    <div className="product-intro-title">Our Products</div>
                    <div className="product-intro-subtitle">All our motors, gearboxes and accessories are produced upon order, ensuring the viability of all parts used in manufacturing</div>
                    <div>
                        <div className="jumbotron bg-gray-light">
                            <Link to={'/product/ac'}>
                                AC Motor & AC Gear Motor
                            </Link>
                        </div>
                        <div className="jumbotron bg-gray-light">
                            <Link to={'/product/bldc'}>
                                BLDC Motor & BLDC Gear Motor
                            </Link>
                        </div>
                        <div className="jumbotron bg-gray-light">
                            <Link to={'/product/dc'}>
                                DC Motor & DC Gear Motor
                            </Link>
                        </div>
                        <div className="jumbotron bg-gray-light">
                            <Link to={'/product/planetary'}>
                                Planetary Gearbox
                            </Link>
                        </div>
                        <div className="jumbotron bg-gray-light">
                            <Link to={'/product/accessory'}>
                                Accessories
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
