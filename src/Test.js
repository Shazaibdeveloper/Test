 
import React from 'react'
import img1 from './assets/images/logo/logo_dark.png';
import dark from './assets/images/logo/logo_dark.png'
import sunpng from './assets/images/icon/sun.png';
import moonimg from "./assets/images/icon/moon.png";
import wallet from './assets/images/icon/connect-wallet.svg';   
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import newletter from './assets/images/background/img-newletter.png';
import item1 from './assets/images/product-item/item-1.jpg';
import item2 from './assets/images/product-item/item-2.jpg';
import item3 from './assets/images/product-item/item-3.jpg';
import item4 from './assets/images/product-item/item-4.jpg';
import item5 from './assets/images/product-item/item-5.jpg';
import item6 from './assets/images/product-item/item-6.jpg';
import item7 from './assets/images/product-item/item-7.jpg';
import item8 from './assets/images/product-item/item-8.jpg';
import item9 from './assets/images/product-item/item-9.jpg';
import item10 from './assets/images/product-item/item-10.jpg';
import item11 from './assets/images/product-item/item-11.jpg';
import item12 from './assets/images/product-item/item-12.jpg';
import item13 from './assets/images/product-item/item-13.jpg';
import item14 from './assets/images/product-item/item-14.jpg';
import item15 from './assets/images/product-item/item-15.jpg';
import item16 from './assets/images/product-item/item-16.jpg';
import item17 from './assets/images/product-item/item-17.jpg'; 
import avt1 from './assets/images/avatar/avt-1.jpg';
import avt2 from './assets/images/avatar/avt-2.jpg';
import avt3 from './assets/images/avatar/avt-3.jpg';
import avt4 from './assets/images/avatar/avt-4.jpg';
import avt5 from './assets/images/avatar/avt-5.jpg';
import avt6 from './assets/images/avatar/avt-6.jpg';
import avt7 from './assets/images/avatar/avt-7.jpg';
import avt8 from './assets/images/avatar/avt-8.jpg';
import avt9 from './assets/images/avatar/avt-9.jpg';
import avt10 from './assets/images/avatar/avt-10.jpg';
import avt11 from './assets/images/avatar/avt-11.jpg'; 
import slider1 from './assets/images/slider/img-slider-1.png';
import slider3 from './assets/images/slider/img-slider-3.jpg';
import slider4 from './assets/images/slider/img-slider-4.jpg';
import slider5 from './assets/images/slider/img-slider-5.jpg';
import category1 from './assets/images/category/category-1.jpg';
import category2 from './assets/images/category/category-2.jpg';
import category3 from './assets/images/category/category-3.jpg';
import category4 from './assets/images/category/category-4.jpg';
import category5 from './assets/images/category/category-5.jpg';
import category6 from './assets/images/category/category-6.jpg';
import Topbar from './Topbar';
import Navbar from './Navbar'
import Newsletter from './Newsletter';
import Footer from './Footer';

const Test = () => {
  return (
    <>
    <div class="body header-fixed is_dark">
    <div id="wrapper">
        <div id="page" class="clearfix">

        <Topbar/>
           <Navbar />

 

            <section class="tf-slider">
                <div class="swiper-container slider ">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="slider-item">
                                <div class="overlay"></div>
                                <div class="slider-inner flex home-1">
                                    <div class="slider-content">
                                        <h1 class="heading">Discover and collect your favorite digital NTFs</h1>
                                        <p class="sub-heading">Quis autem vel eum iure reprehenderit qui in ea
                                            voluptates esse quam nihil molestiae consequatur veillum </p>
                                        <div class="button-slider">
                                            <a href="explore-1.html"
                                                class="sc-button btn-bordered-white style letter "><span>Explore
                                                    More</span></a>
                                            <a href="create-item.html"
                                                class="sc-button btn-bordered-white style file"><span>Create
                                                    Now</span></a>
                                        </div>
                                    </div>
                                    <div class="slider-img">
                                        <div class="img-home-1"><img src= {slider1}
                                                alt="Image" /></div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="swiper-slide">
                            <div class="slider-item ">
                                <div class="overlay "></div>
                                <div class="container">
                                    <div class="slider-inner style-2 home-1 flex">
                                        <div class="slider-content">
                                            <h1 class="heading">Discover and collect your favorite digital NTFs</h1>
                                            <p class="sub-heading">Quis autem vel eum iure reprehenderit qui in ea
                                                voluptates esse quam nihil molestiae consequatur veillum </p>
                                            <div class="button-slider">
                                                <a href="explore-1.html"
                                                    class="sc-button btn-bordered-white style letter "><span>Explore
                                                        More</span></a>
                                                <a href="create-item.html"
                                                    class="sc-button btn-bordered-white style file"><span>Create
                                                        Now</span></a>
                                            </div>
                                        </div>
                                        <div class="slider-img flex">
                                            <div class="img-left">
                                                <div class="img-1"><img src={slider3} alt="Image" /></div>
                                                <div class="img-2"><img src={slider4} alt="Image" /></div>

                                            </div>
                                            <div class="img-right">
                                            <img src={slider5} alt="Image" />
                                                <div class="box-avatar flex">
                                                    <div class="list-avatar flex">
                                                    <img src={avt8} alt="Image" />
                                                    <img src={avt9} alt="Image" />
                                                    <img src={avt10} alt="Image" />
                                                    <img src={avt11} alt="Image" />
                                                    </div>
                                                    <div class="icon-plus">
                                                        <a href="#"><i class="fas fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> 
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next btn-slide-next "></div>
                    <div class="swiper-button-prev btn-slide-prev"></div>
                </div>
            </section>

            <section class="tf-live-auctions tf-section bg-color-1">
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
                            <div class="swiper-container live-auc">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item">
                                                <div class="product-img active">
                                                    <img src= {item1} alt="Image" />
                                                    <div class="countdown">
                                                        <span class="js-countdown" data-timer="516400"
                                                            data-labels=" :  ,  : , : , "></span>
                                                    </div>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />

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
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item">
                                                <div class="product-img ">
                                                <img src= {item2} alt="Image" />
                                                    <div class="countdown">
                                                        <span class="js-countdown" data-timer="516400"
                                                            data-labels=" :  ,  : , : , "></span>
                                                    </div>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
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
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item">
                                                <div class="product-img ">
                                                <img src= {item3} alt="Image" />
                                                    <div class="countdown">
                                                        <span class="js-countdown" data-timer="516400"
                                                            data-labels=" :  ,  : , : , "></span>
                                                    </div>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
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
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item">
                                                <div class="product-img ">
                                                <img src= {item4} alt="Image" />
                                                    <div class="countdown">
                                                        <span class="js-countdown" data-timer="516400"
                                                            data-labels=" :  ,  : , : , "></span>
                                                    </div>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
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
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item">
                                                <div class="product-img ">
                                                <img src={item1} alt="Image" />
                                                    <div class="countdown">
                                                        <span class="js-countdown" data-timer="516400"
                                                            data-labels=" :  ,  : , : , "></span>
                                                    </div>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
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
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item">
                                                <div class="product-img ">
                                                <img src={item2} alt="Image" />
                                                    <div class="countdown">
                                                        <span class="js-countdown" data-timer="516400"
                                                            data-labels=" :  ,  : , : , "></span>
                                                    </div>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
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
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item">
                                                <div class="product-img ">
                                                <img src={item3} alt="Image" />
                                                    <div class="countdown">
                                                        <span class="js-countdown" data-timer="516400"
                                                            data-labels=" :  ,  : , : , "></span>
                                                    </div>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
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

            <section class="tf-latest-collections tf-section bg-color-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sc-heading style-2">
                                <div class="content-left">
                                    <div class="inner">
                                        <h3>Latest Collections</h3>
                                        <p class="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="swiper-container latest-coll style-2">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide tf-col-item">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-3 bg-color-dark">
                                                <div class="product-img ">
                                                <img src= {item5} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex mg-bt-0">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide tf-col-itemx2">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-4 bg-color-dark">
                                                <div class="product-img flex">
                                                    <div class="img-left">
                                                    <img src= {item6} alt="Image" />
                                                        <label>BSC</label>
                                                    </div>
                                                    <div class="img-right">
                                                        <div class="top-img flex">
                                                        <img src= {item7} alt="Image" />
                                                        <img src= {item8} alt="Image" />
                                                        </div>
                                                        <div class="bottom-img">
                                                        <img src= {item9} alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’Multi-purpose 3D
                                                            Space Rocket With Animate Real Special Smoke Premium Quality
                                                            Gaming’’</a> </h5>
                                                    <div class="product-author flex mg-bt-0">
                                                        <div class="left flex">
                                                            <div class="avatar">
                                                            <img src={avt7} alt="" />
                                                            </div>
                                                            <div class="infor">
                                                                <div class="author-name"><a href="author.html">Daniel M.
                                                                        Bivens</a></div>
                                                                <span>Creator</span>
                                                            </div>
                                                        </div>
                                                        <div class="button-wishlish">
                                                            <a href="#" class=" wishlish"><i
                                                                    class="fas fa-heart"></i></a>
                                                            <span>152k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide tf-col-item">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-3 bg-color-dark">
                                                <div class="product-img ">
                                                <img src= {item10} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex mg-bt-0">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide tf-col-item">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-3 bg-color-dark">
                                                <div class="product-img ">
                                                <img src= {item11} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex mg-bt-0">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>

                                    <div class="swiper-slide tf-col-itemx2">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-4 bg-color-dark">
                                                <div class="product-img flex">
                                                    <div class="img-left">
                                                    <img src= {item6} alt="Image" />
                                                        <label>BSC</label>
                                                    </div>
                                                    <div class="img-right">
                                                        <div class="top-img flex">
                                                        <img src= {item7} alt="Image" />
                                                        <img src= {item8} alt="Image" />
                                                        </div>
                                                        <div class="bottom-img">
                                                        <img src= {item9} alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’Multi-purpose 3D
                                                            Space Rocket With Animate Real Special Smoke Premium Quality
                                                            Gaming’’</a> </h5>
                                                    <div class="product-author flex mg-bt-0">
                                                        <div class="left flex">
                                                            <div class="avatar">
                                                            <img src={avt7} alt="" />
                                                            </div>
                                                            <div class="infor">
                                                                <div class="author-name"><a href="author.html">Daniel M.
                                                                        Bivens</a></div>
                                                                <span>Creator</span>
                                                            </div>
                                                        </div>
                                                        <div class="button-wishlish">
                                                            <a href="#" class=" wishlish"><i
                                                                    class="fas fa-heart"></i></a>
                                                            <span>152k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide tf-col-item">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-3 bg-color-dark">
                                                <div class="product-img ">
                                                <img src= {item10} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div class="product-author flex mg-bt-0">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
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

            <section class="tf-best-seller">
                <div class="best-seller-inner">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sc-heading style-2">
                                <div class="content-left">
                                    <div class="inner">
                                        <h3>Best Sellers</h3>
                                        <p class="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div class="content-right">
                                    <button class="sc-button style letter style-2"><span>Explore More</span> </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="sc-author">
                                <div class="card-avatar">
                                    <img src={avt1} alt="" />
                                </div>
                                <div class="infor">
                                    <h6> <a href="author.html">Jason M. Stalls</a> </h6>
                                    <div class="details">523.7 ETH</div>
                                </div>
                                <a href="#" class="sc-button btn-bordered-white"><span>Follow</span></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="sc-author">
                                <div class="card-avatar">
                                <img src={avt2} alt="" />
                                </div>
                                <div class="infor">
                                    <h6> <a href="author.html">Frank F. Chan</a> </h6>
                                    <div class="details">523.7 ETH</div>
                                </div>
                                <a href="#" class="sc-button btn-bordered-white"><span>Follow</span></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="sc-author">
                                <div class="card-avatar">
                                <img src={avt3} alt="" />
                                </div>
                                <div class="infor">
                                    <h6> <a href="author.html">Robert George</a> </h6>
                                    <div class="details">523.7 ETH</div>
                                </div>
                                <a href="#" class="sc-button btn-bordered-white"><span>Follow</span></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="sc-author">
                                <div class="card-avatar">
                                <img src={avt4} alt="" />
                                </div>
                                <div class="infor">
                                    <h6> <a href="author.html">Frank N. Glisson</a> </h6>
                                    <div class="details">523.7 ETH</div>
                                </div>
                                <a href="#" class="sc-button btn-bordered-white"><span>Follow</span></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="sc-author end">
                                <div class="card-avatar">
                                <img src={avt5} alt="" />
                                </div>
                                <div class="infor">
                                    <h6> <a href="author.html">Michel ZonaS</a> </h6>
                                    <div class="details">523.7 ETH</div>
                                </div>
                                <a href="#" class="sc-button btn-bordered-white"><span>Follow</span></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="sc-author end">
                                <div class="card-avatar">
                                <img src={avt6} alt="" />
                                </div>
                                <div class="infor">
                                    <h6> <a href="author.html">Mizanur Mango</a> </h6>
                                    <div class="details">523.7 ETH</div>
                                </div>
                                <a href="#" class="sc-button btn-bordered-white"><span>Follow</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="tf-trendy-collections tf-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sc-heading style-2">
                                <div class="content-left">
                                    <div class="inner">
                                        <h3>Trendy Collection</h3>
                                        <p class="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="swiper-container trendy">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item12} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src={item13} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item14} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item15} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item16} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item15} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item16} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item17} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item12} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-product-item style-2">
                                                <div class="product-img">
                                                <img src= {item13} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        class="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div class="product-content">
                                                    <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke’’</a> </h5>
                                                    <div class="product-author flex">
                                                        <div class="avatar">
                                                        <img src={avt7} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <div class="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                    <div class="product-price flex">
                                                        <div class="title">Current Bid</div>
                                                        <div class="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="swiper-button-next btn-slide-next "></div>
                                <div class="swiper-button-prev btn-slide-prev"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="tf-category tf-section">
                <div class="category-inner">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sc-heading style-2">
                                <div class="content-left">
                                    <div class="inner">
                                        <h3>Poplar Categories</h3>
                                        <p class="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div class="content-right">
                                    <button class="sc-button style letter style-2"><span>Browse More</span> </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="sc-category">
                                <div class="card-media">
                                <img src={category1} alt="Image" />
                                </div>
                                <div class="card-content">
                                    <h5><a href="#"> Browse By Template</a></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="sc-category pl-19">
                                <div class="card-media">
                                <img src={category2} alt="Image" />
                                </div>
                                <div class="card-content">
                                    <h5><a href="#">UI Template</a></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="sc-category pl-40">
                                <div class="card-media">
                                <img src={category3} alt="Image" />
                                </div>
                                <div class="card-content">
                                    <h5><a href="#">Graphics Design</a></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="sc-category mg-bt-0">
                                <div class="card-media">
                                <img src={category4} alt="Image" />
                                </div>
                                <div class="card-content">
                                    <h5><a href="#">Social Network</a></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="sc-category mg-bt-0 pl-19">
                                <div class="card-media">
                                <img src={category5} alt="Image" />
                                </div>
                                <div class="card-content">
                                    <h5><a href="#">Browse By Template</a></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="sc-category mg-bt-0 pl-40 end">
                                <div class="card-media">
                                    <img src={category6} alt="" />
                                </div>
                                <div class="card-content">
                                    <h5><a href="#">Browse By Template</a></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
       <Footer />

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

export default Test


 