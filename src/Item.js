 
import React from 'react'
import img1 from './assets/images/logo/logo_dark.png';
import dark from './assets/images/logo/logo_dark.png'
import  Navbar from './Navbar';   
import item1 from './assets/images/product-item/item-1.jpg';
import item2 from './assets/images/product-item/item-2.jpg';
import item3 from './assets/images/product-item/item-3.jpg';
import item4 from './assets/images/product-item/item-4.jpg';
import item5 from './assets/images/product-item/item-5.jpg';
import item6 from './assets/images/product-item/item-6.jpg';
import item30 from './assets/images/product-item/item-30.jpg';
import item31 from './assets/images/product-item/item-31.jpg';
import avt7 from './assets/images/avatar/avt-7.jpg';
import avt8 from './assets/images/avatar/avt-8.jpg';
import avt9 from './assets/images/avatar/avt-9.jpg';
import avt10 from './assets/images/avatar/avt-10.jpg';
import avt11 from './assets/images/avatar/avt-11.jpg';  
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import newletter from './assets/images/background/img-newletter.png';
import Topbar from './Topbar';


const Item = () => {
  return (
    <>
    <div class="body header-fixed is_dark">

    
<div id="wrapper">
    <div id="page" class="clearfix">

    <Topbar/>
    <Navbar />


        

         <section class="fl-page-title">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page-title-inner flex">
                            <div class="page-title-heading">
                                <h2 class="heading">Item (Auctions)</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Item (Auctions)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tf-section auctions-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sc-heading style-2 has-icon">
                            <div class="content-left">

                                <div class="inner">
                                    <div class="group">
                                        <div class="icon"><i class="ripple"></i></div>
                                        <h3>Live Auctions</h3>
                                    </div>
                                    <p class="desc">Most popular gaming digital nft market place </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="swiper-container popular-coll-2">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                    <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                                <img src= {item1} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                        <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product-img">
                                            <img src= {item2} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item3} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item4} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item5} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item6} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item1} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item5} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item30} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item31} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item3} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item2} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item5} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider-item">
                                        <div class="sc-product-item style-6">
                                            <div class="product-item-top flex">
                                                <div class="avatar-box">
                                                <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                </div>

                                                <div class="dropdown-options">
                                                    <div class="options flex">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <ul class="menu target-menu">
                                                        <li><a href="#" class="nolink">Refresh Metadata</a></li>
                                                        <li><a href="#" class="nolink">Share</a></li>
                                                        <li><a href="#" class="nolink">Report</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div class="product-img">
                                            <img src= {item4} alt="Image" />
                                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                    class="sc-button style letter"><span>Place Bid</span></a>
                                                <label>BSC</label>
                                            </div>
                                            <div class="product-content">
                                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                        Smoke Premium’’</a> </h5>
                                                <div class="product-author flex">
                                                    <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                    </div>
                                                    <div class="infor">
                                                        <div class="author-name"><a href="author.html">Daniel M.
                                                                Bivens</a></div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <div class="title">Current Bid</div>
                                                    <div class="price">
                                                        <span>5.23 ETH</span>
                                                        <span>= $32.420</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next btn-slide-next "></div>
                            <div class="swiper-button-prev btn-slide-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="new-letter">
            <div class="container">
                <div class="new-letter-inner flex">
                    <div class="new-letter-content">
                        <h3 class="heading">Newsletters</h3>
                        <p class="sub-heading">Most popular gaming digital nft market place </p>
                        <div class="form-subcribe">
                            <form id="subscribe-form" action="#" method="GET" accept-charset="utf-8"
                                class="form-submit">
                                <input name="email" value="" class="email" type="email"
                                    placeholder="Enter Email Address" required="" />
                                <button name="submit" type="submit" id="submit"
                                    class="sc-button style letter style-2"><span>Browse More</span> </button>
                            </form>
                        </div>
                    </div>
                    <div class="new-letter-img">
                    <img src= {newletter} alt="Image" />
                    </div>
                </div>
            </div>
        </section>

        <footer id="footer" className ="clearfix bg-style ft-home-1">
                <div className ="container">
                    <div className ="row">
                        <div className ="col-lg-3 col-md-6 col-12">
                            <div className ="widget widget-logo">
                                <div className ="logo-footer" id="logo-footer">
                                    <a href="index.html">
                                        <img id="logo_footer" src={dark} alt="nft-gaming"
                                            width="151" height="45" data-retina="assets/images/logo/logo_dark@2x.png"
                                            data-width="151" data-height="45" />
                                    </a>
                                </div>
                                <p className ="sub-widget-logo">Sed ut perspiciatis unde omnis iste natus error sit voluptate
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaes</p>
                                <div className ="widget-social">
                                    <ul>
                                        <li><a href="#" className ="active"><i className ="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className ="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className ="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className ="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className ="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className ="widget widget-menu menu-marketplace">
                                <h5 className ="title-widget">Marketplace</h5>
                                <ul>
                                    <li><a href="item.html">Gaming </a></li>
                                    <li><a href="item.html">Product </a></li>
                                    <li><a href="item.html">All NFTs</a></li>
                                    <li><a href="item.html">Social Network</a></li>
                                    <li><a href="item.html">Domain Names</a></li>
                                    <li><a href="item.html">Collectibles</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className ="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className ="widget widget-menu menu-supports">
                                <h5 className ="title-widget">Supports</h5>
                                <ul>
                                    <li><a href="contact.html">Setting & Privacy </a></li>
                                    <li><a href="contact.html">Help & Support </a></li>
                                    <li><a href="item.html">Live Auctions</a></li>
                                    <li><a href="item-details.html"> Item Details</a></li>
                                    <li><a href="contact.html"> 24/7 Supports</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className ="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className ="widget widget-post">
                                <h5 className ="title-widget">News & Post</h5>
                                <ul className ="post-new">
                                    <li>
                                        <div className ="post-img">
                                            <img src={new4} alt="Post New" />
                                        </div>
                                        <div className ="post-content">
                                            <h6 className ="title"><a href="blog-details.html">Roll Out New Features Without
                                                    Hurting Loyal Users</a></h6>
                                            <a href="blog-details.html" className ="post-date"><i
                                                    className ="far fa-calendar-week"></i> 25 JAN 2022</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className ="post-img">
                                            <img src={new5} alt="Post New" />
                                        </div>
                                        <div className ="post-content">
                                            <h6 className ="title"><a href="blog-details.html">An Overview The Most Comon UX
                                                    Design Deliverables</a></h6>
                                            <a href="blog-details.html" className ="post-date"><i
                                                    className ="far fa-calendar-week"></i> 25 JAN 2022</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
            <div className ="bottom">
                <div className ="container">
                    <div className ="bottom-inner">
                        Copyright © 2022 Bidzen | NFT Marketplace HTML Template. Designed by <a
                            href="https://themeforest.net/user/themesflat/portfolio"> Themesflat</a>
                    </div>
                </div>
            </div>
    </div>
 </div>
 
<a id="scroll-top"></a>

 <div class="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body space-y-20 pd-40">
                <h3 class="text-center">Your Bidding
                    Successfuly Added</h3>
                <p class="text-center">your bid <span class="price color-popup">(5.23ETH) </span> has been listing
                    to our database</p>
                <a href="#" class="btn btn-primary"> Watch the listings</a>
            </div>
        </div>
    </div>
</div>
<div class="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body space-y-20 pd-40">
                <h3>Place a Bid</h3>
                <p class="text-center">You must bid at least <span class="price color-popup">5.23 ETH</span>
                </p>
                <input type="text" class="form-control" placeholder="00.00 ETH" />
                <p>Enter quantity. <span class="color-popup">1 available</span>
                </p>
                <input type="text" class="form-control quantity" value="1" />
                <div class="hr"></div>
                
                <div class="d-flex justify-content-between">
                    <p> Current Bid</p>
                    <p class="text-right price color-popup"> 5.23 ETH </p>
                </div>
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success"
                    data-dismiss="modal" aria-label="Close"> Place a bid</a>
            </div>
        </div>
    </div>
</div>

  
</div>
    </>
   )
}

export default Item


 