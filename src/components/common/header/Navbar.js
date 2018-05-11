import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/Logo_ZD.png';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md box-shadow p-2 navbar-wrapper">
                <div className="container">
                    <span className="navbar-brand">
                        <NavLink to="/">
                            <img src={logo} height="40" alt="logo"/>
                        </NavLink>
                        <span className="brand-title">ZD Motors</span>
                    </span>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-controls="navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        <NavLink className='nav-link p-3' to="">
                            Home
                        </NavLink>

                        <NavLink className="nav-link p-3 ml-3" to="/product">
                            Products
                        </NavLink>

                        <NavLink className="nav-link p-3 ml-3" to="/test">
                            Test
                        </NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Navbar;
