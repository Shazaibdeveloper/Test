import React from 'react'
import img1 from './assets/images/logo/logo_dark.png'
import sunpng from './assets/images/icon/sun.png';
import moonimg from "./assets/images/icon/moon.png";
import wallet from './assets/images/icon/connect-wallet.svg';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
     <>
      <header id="header_main" className ="header_1 js-header">
            <div className ="container-fluid">
                <div className ="row">
                    <div className ="col-md-12">
                        <div className ="mobile-button"><span></span></div> 
                        <div id="site-header-inner" className ="flex">
                            <div id="site-logo" className ="clearfix">
                                <div id="site-logo-inner">
                                    <a href="#" rel="home" className ="main-logo">
                                        <img id="logo_header" src={img1} alt="nft-gaming" width="151" height="45" data-retina="assets/images/logo/logo_dark@2x.png" data-width="151" data-height="45"/>
                                    </a>
                                </div>
                            </div>
                            <form className ="form-search">
                                <input type="text" placeholder="Search here"/>
                                <button><i className ="far fa-search"></i></button>
                            </form>

                            <div id="site-menu">
                                <nav id="main-nav" className ="main-nav">
                                    <ul id="menu-primary-menu" className ="menu">
                                        <li className ="menu-item menu-item-has-children  current-item">
                                            <a href= '#'>Home</a>
                                            <ul className ="sub-menu" >
                                                <li className ="menu-item "><NavLink to="/">Home 1</NavLink></li>
                                                <li className ="menu-item current-item"><NavLink to="/hometwo">Home 2</NavLink>
                                                </li>
                                                <li className ="menu-item"><NavLink to="/homeanimation">Home Animation</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className ="menu-item menu-item-has-children">
                                            <a href="#">Explore</a>
                                            <ul className ="sub-menu" >
                                                <li className ="menu-item"><NavLink to="/explore1">Explore 1</NavLink></li>
                                                <li className ="menu-item"><NavLink to="/explore2">Explore 2</NavLink></li>
                                                <li className ="menu-item"><NavLink to="/creator">Creator</NavLink></li>
                                                <li className ="menu-item"><NavLink to="/item">Item </NavLink></li>
                                                <li className ="menu-item"><NavLink to="/itemdetails">Item Details</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className ="menu-item menu-item-has-children ">
                                            <a href="#">Community</a>
                                            <ul className ="sub-menu" >
                                                <li className ="menu-item "><NavLink to="/blog">Blog</NavLink></li>
                                                <li className ="menu-item"><NavLink to="/blogdetails">Blog Details</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className ="menu-item menu-item-has-children">
                                            <a href="#">Pages</a>
                                            <ul className ="sub-menu" >
                                                <li className ="menu-item"><NavLink to="/author">Authors</NavLink></li>
                                                <li className ="menu-item"><NavLink to="/connectwallet">Wallet
                                                        Connect</NavLink></li>
                                                <li className ="menu-item"><NavLink to="/createitem">Create Item</NavLink>
                                                </li>
                                                <li className ="menu-item"><NavLink to="/login">Login</NavLink></li>
                                                <li className ="menu-item"><NavLink to="/register">Register</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className ="menu-item ">
                                            <NavLink to= "/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </nav> 
                            </div>
                            <div className ="button-connect-wallet">
                                <Link to="/connectwallet" className ="sc-button wallet  style-2">
                                    <img src={wallet} alt="icon" />
                                    <span>Connect Wallet</span>
                                </Link>
                            </div>

                            <div className ="mode_switcher">
                                <h6><span>Dark Mode</span> <strong>Activate</strong></h6>
                                <a href="#" className ="light d-flex align-items-center">
                                    <img src={sunpng} alt="" />
                                </a>
                                <a href="#" className ="dark d-flex align-items-center is_active">
                                    <img id="moon_dark" src={moonimg} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
     </>
    )
}

export default Navbar;