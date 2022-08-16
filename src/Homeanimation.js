  import React from 'react';
  import './assets/css/animate.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/ntfs.css';
import './assets/css/responsive.css';
import './assets/css/shortcodes.css';
import './assets/css/style.css';
import './assets/css/swiper-bundle.min.css';
 import img1 from './assets/images/logo/logo_dark.png';
import dark from './assets/images/logo/logo_dark.png'
import Navbar from './Navbar'; 
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
import category1 from './assets/images/category/category-1.jpg';
import category2 from './assets/images/category/category-2.jpg';
import category3 from './assets/images/category/category-3.jpg';
import category4 from './assets/images/category/category-4.jpg';
import category5 from './assets/images/category/category-5.jpg';
import category6 from './assets/images/category/category-6.jpg'; 
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import Topbar from './Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
  
  const Homeanimation = () => {
    return (
       <>
<div className ="body header-fixed is_dark">

 

<div id="wrapper">
   <div id="page" className ="clearfix">

   <Topbar/>
   <Navbar />


       <section className ="tf-slider">
           <div className ="swiper-container slider ">
               <div className ="swiper-wrapper">
                   <div className ="swiper-slide">
                       <div className ="slider-item">
                           <div className ="overlay"></div>
                           <div className ="slider-inner flex home-1">
                               <div className ="slider-content">
                                   <h1 className ="heading">Discover and collect your favorite digital NTFs</h1>
                                   <p className ="sub-heading">Quis autem vel eum iure reprehenderit qui in ea
                                       voluptates esse quam nihil molestiae consequatur veillum </p>
                                   <div className ="button-slider">
                                       <a href="explore-1.html"
                                           className ="sc-button btn-bordered-white style letter "><span>Explore
                                               More</span></a>
                                       <a href="create-item.html"
                                           className ="sc-button btn-bordered-white style file"><span>Create
                                               Now</span></a>
                                   </div>
                               </div>
                               <div className ="slider-img">
                                   <div className ="img-home-1"><img src="assets/images/slider/img-slider-1.png"
                                           alt="Image"/></div>
                               </div>
                           </div>
                       </div> 
                   </div>
                   <div className ="swiper-slide">
                       <div className ="slider-item ">
                           <div className ="overlay "></div>
                           <div className ="container">
                               <div className ="slider-inner style-2 home-1 flex">
                                   <div className ="slider-content">
                                       <h1 className ="heading">Discover and collect your favorite digital NTFs</h1>
                                       <p className ="sub-heading">Quis autem vel eum iure reprehenderit qui in ea
                                           voluptates esse quam nihil molestiae consequatur veillum </p>
                                       <div className ="button-slider">
                                           <a href="explore-1.html"
                                               className ="sc-button btn-bordered-white style letter "><span>Explore
                                                   More</span></a>
                                           <a href="create-item.html"
                                               className ="sc-button btn-bordered-white style file"><span>Create
                                                   Now</span></a>
                                       </div>
                                   </div>
                                   <div className ="slider-img flex">
                                       <div className ="img-left">
                                           <div className ="img-1"><img src="assets/images/slider/img-slider-3.jpg"
                                                   alt="Image"/></div>
                                           <div className ="img-2"><img src="assets/images/slider/img-slider-4.jpg"
                                                   alt="Image"/></div>

                                       </div>
                                       <div className ="img-right">
                                           <img src="assets/images/slider/img-slider-5.jpg" alt="Image"/>
                                           <div className ="box-avatar flex">
                                               <div className ="list-avatar flex">
                                                   <img src={avt8} alt="Image"/>
                                                   <img src={avt9} alt="Image"/>
                                                   <img src={avt10} alt="Image"/>
                                                   <img src={avt11} alt="Image"/>
                                               </div>
                                               <div className ="icon-plus">
                                                   <a href="#"><i className ="fas fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>

                       </div> 
                   </div>
               </div>
               <div className ="swiper-pagination"></div>
               <div className ="swiper-button-next btn-slide-next "></div>
               <div className ="swiper-button-prev btn-slide-prev"></div>
           </div>
       </section>

       <section className ="tf-live-auctions tf-section bg-color-1">
           <div className ="container">
               <div className ="row">
                   <div className ="col-md-12">
                       <div className ="sc-heading style-2 has-icon">
                           <div className ="content-left">

                               <div className ="inner">
                                   <div className ="group">
                                       <div className ="icon"><i className ="ripple"></i></div>
                                       <h3>Live Auctions</h3>
                                   </div>
                                   <p className ="desc">Most popular gaming digital nft market place </p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className ="col-md-12">
                       <div className ="swiper-container live-auc">
                           <div className ="swiper-wrapper">
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item">
                                           <div className ="product-img active">
                                               <img src={item1} alt="Image"/>
                                               <div className ="countdown">
                                                   <span className ="js-countdown" data-timer="516400"
                                                       data-labels=" :  ,  : , : , "></span>
                                               </div>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item">
                                           <div className ="product-img ">
                                               <img src={item2} alt="Image"/>
                                               <div className ="countdown">
                                                   <span className ="js-countdown" data-timer="516400"
                                                       data-labels=" :  ,  : , : , "></span>
                                               </div>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item">
                                           <div className ="product-img ">
                                               <img src={item3} alt="Image"/>
                                               <div className ="countdown">
                                                   <span className ="js-countdown" data-timer="516400"
                                                       data-labels=" :  ,  : , : , "></span>
                                               </div>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item">
                                           <div className ="product-img ">
                                               <img src={item4} alt="Image"/>
                                               <div className ="countdown">
                                                   <span className ="js-countdown" data-timer="516400"
                                                       data-labels=" :  ,  : , : , "></span>
                                               </div>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item">
                                           <div className ="product-img ">
                                               <img src={item1} alt="Image"/>
                                               <div className ="countdown">
                                                   <span className ="js-countdown" data-timer="516400"
                                                       data-labels=" :  ,  : , : , "></span>
                                               </div>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item">
                                           <div className ="product-img ">
                                               <img src={item2} alt="Image"/>
                                               <div className ="countdown">
                                                   <span className ="js-countdown" data-timer="516400"
                                                       data-labels=" :  ,  : , : , "></span>
                                               </div>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item">
                                           <div className ="product-img ">
                                               <img src={item3} alt="Image"/>
                                               <div className ="countdown">
                                                   <span className ="js-countdown" data-timer="516400"
                                                       data-labels=" :  ,  : , : , "></span>
                                               </div>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                           </div>
                           <div className ="swiper-pagination"></div>
                           <div className ="swiper-button-next btn-slide-next "></div>
                           <div className ="swiper-button-prev btn-slide-prev"></div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       <section className ="tf-latest-collections tf-section bg-color-2"/>
           <div className ="container">
               <div className ="row">
                   <div className ="col-md-12">
                       <div className ="sc-heading style-2">
                           <div className ="content-left">
                               <div className ="inner">
                                   <h3>Latest Collections</h3>
                                   <p className ="desc">Most popular gaming digital nft market place </p>
                               </div>
                           </div>
                       </div>
                       <div className ="swiper-button-next btn-slide-next "></div>
                           <div className ="swiper-button-prev btn-slide-prev"></div>
                   </div>
                   <div className ="col-md-12">
                       <div className ="swiper-container latest-coll style-2">
                           <div className ="swiper-wrapper">
                               <div className ="swiper-slide tf-col-item">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-3 bg-color-dark">
                                           <div className ="product-img ">
                                               <img src={item5} alt="Image"/>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex mg-bt-0">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide tf-col-itemx2">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-4 bg-color-dark">
                                           <div className ="product-img flex">
                                               <div className ="img-left">
                                                   <img src={item6} alt="Image"/>
                                                   <label>BSC</label>
                                               </div>
                                               <div className ="img-right">
                                                   <div className ="top-img flex">
                                                       <img src={item7}
                                                           alt="Image"/>
                                                       <img src={item8}
                                                           alt="Image"/>
                                                   </div>
                                                   <div className ="bottom-img">
                                                       <img src={item9}
                                                           alt="Image"/>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’Multi-purpose 3D
                                                       Space Rocket With Animate Real Special Smoke Premium Quality
                                                       Gaming’’</a> </h5>
                                               <div className ="product-author flex mg-bt-0">
                                                   <div className ="left flex">
                                                       <div className ="avatar">
                                                           <img src={avt7} alt="Image"/>
                                                       </div>
                                                       <div className ="infor">
                                                           <div className ="author-name"><a href="author.html">Daniel M.
                                                                   Bivens</a></div>
                                                           <span>Creator</span>
                                                       </div>
                                                   </div>
                                                   <div className ="button-wishlish">
                                                       <a href="#" className =" wishlish"><i
                                                               className ="fas fa-heart"></i></a>
                                                       <span>152k</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide tf-col-item">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-3 bg-color-dark">
                                           <div className ="product-img ">
                                               <img src={item10} alt="Image"/>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex mg-bt-0">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide tf-col-item">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-3 bg-color-dark">
                                           <div className ="product-img ">
                                               <img src={item11} alt="Image"/>
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex mg-bt-0">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image"/>
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>

                               <div className ="swiper-slide tf-col-itemx2">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-4 bg-color-dark">
                                           <div className ="product-img flex">
                                               <div className ="img-left">
                                                   <img src={item6} alt="Image"/>
                                                   <label>BSC</label>
                                               </div>
                                               <div className ="img-right">
                                                   <div className ="top-img flex">
                                                       <img src={item7}
                                                           alt="Image"/>
                                                       <img src={item8}
                                                           alt="Image"/>
                                                   <div/>
                                                   <div className ="bottom-img">
                                                       <img src={item9}
                                                           alt="Image"/>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’Multi-purpose 3D
                                                       Space Rocket With Animate Real Special Smoke Premium Quality
                                                       Gaming’’</a> </h5>
                                               <div className ="product-author flex mg-bt-0">
                                                   <div className ="left flex">
                                                       <div className ="avatar">
                                                           <img src={avt7} alt="Image"/>
                                                       </div>
                                                       <div className ="infor">
                                                           <div className ="author-name"><a href="author.html">Daniel M.
                                                                   Bivens</a></div>
                                                           <span>Creator</span>
                                                       </div>
                                                   </div>
                                                   <div className ="button-wishlish">
                                                       <a href="#" className =" wishlish"><i
                                                               className ="fas fa-heart"></i></a>
                                                       <span>152k</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide tf-col-item">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-3 bg-color-dark">
                                           <div className ="product-img ">
                                               <img src={item10} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>BSC</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke Premium’’</a> </h5>
                                               <div className ="product-author flex mg-bt-0">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                           </div>
                           <div className ="swiper-pagination"></div>
                          
                       </div>
                   </div>
               </div>
           </div>
       <section/>

       <section className ="tf-best-seller">
           <div className ="best-seller-inner">
               <div className ="row">
                   <div className ="col-md-12">
                       <div className ="sc-heading style-2">
                           <div className ="content-left">
                               <div className ="inner">
                                   <h3>Best Sellers</h3>
                                   <p className ="desc">Most popular gaming digital nft market place </p>
                               </div>
                           </div>
                           <div className ="content-right">
                               <button className ="sc-button style letter style-2"><span>Explore More</span> </button>
                           </div>
                       </div>
                   </div>
                   <div className ="col-lg-2 col-md-4 col-6">
                       <div className ="sc-author">
                           <div className ="card-avatar">
                               <img src={avt1} alt="" />
                           </div>
                           <div className ="infor">
                               <h6> <a href="author.html">Jason M. Stalls</a> </h6>
                               <div className ="details">523.7 ETH</div>
                           </div>
                           <a href="#" className ="sc-button btn-bordered-white"><span>Follow</span></a>
                       </div>
                   </div>
                   <div className ="col-lg-2 col-md-4 col-6">
                       <div className ="sc-author">
                           <div className ="card-avatar">
                               <img src={avt2} alt="" />
                           </div>
                           <div className ="infor">
                               <h6> <a href="author.html">Frank F. Chan</a> </h6>
                               <div className ="details">523.7 ETH</div>
                           </div>
                           <a href="#" className ="sc-button btn-bordered-white"><span>Follow</span></a>
                       </div>
                   </div>
                   <div className ="col-lg-2 col-md-4 col-6">
                       <div className ="sc-author">
                           <div className ="card-avatar">
                               <img src={avt3} alt=" " />
                           </div>
                           <div className ="infor">
                               <h6> <a href="author.html">Robert George</a> </h6>
                               <div className ="details">523.7 ETH</div>
                           </div>
                           <a href="#" className ="sc-button btn-bordered-white"><span>Follow</span></a>
                       </div>
                   </div>
                   <div className ="col-lg-2 col-md-4 col-6">
                       <div className ="sc-author">
                           <div className ="card-avatar">
                               <img src={avt4} alt="" />
                           </div>
                           <div className ="infor">
                               <h6> <a href="author.html">Frank N. Glisson</a> </h6>
                               <div className ="details">523.7 ETH</div>
                           </div>
                           <a href="#" className ="sc-button btn-bordered-white"><span>Follow</span></a>
                       </div>
                   </div>
                   <div className ="col-lg-2 col-md-4 col-6">
                       <div className ="sc-author end">
                           <div className ="card-avatar">
                               <img src={avt5} alt="" />
                           </div>
                           <div className ="infor">
                               <h6> <a href="author.html">Michel ZonaS</a> </h6>
                               <div className ="details">523.7 ETH</div>
                           </div>
                           <a href="#" className ="sc-button btn-bordered-white"><span>Follow</span></a>
                       </div>
                   </div>
                   <div className ="col-lg-2 col-md-4 col-6">
                       <div className ="sc-author end">
                           <div className ="card-avatar">
                               <img src={avt6} alt="" />
                           </div>
                           <div className ="infor">
                               <h6> <a href="author.html">Mizanur Mango</a> </h6>
                               <div className ="details">523.7 ETH</div>
                           </div>
                           <a href="#" className ="sc-button btn-bordered-white"><span>Follow</span></a>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       <section className ="tf-trendy-collections tf-section">
           <div className ="container">
               <div className ="row">
                   <div className ="col-md-12">
                       <div className ="sc-heading style-2">
                           <div className ="content-left">
                               <div className ="inner">
                                   <h3>Trendy Collection</h3>
                                   <p className ="desc">Most popular gaming digital nft market place </p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className ="col-md-12">
                       <div className ="swiper-container trendy">
                           <div className ="swiper-wrapper">
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item13} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item13} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item14} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item15} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item17} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item15} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item16} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img" >
                                               <img src={item17} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item12} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                               <div className ="swiper-slide">
                                   <div className ="slider-item">
                                       <div className ="sc-product-item style-2">
                                           <div className ="product-img">
                                               <img src={item13} alt="Image" />
                                               <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                   className ="sc-button style letter"><span>Place Bid</span></a>
                                               <label>PANDA</label>
                                           </div>
                                           <div className ="product-content">
                                               <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                       Smoke’’</a> </h5>
                                               <div className ="product-author flex">
                                                   <div className ="avatar">
                                                       <img src={avt7} alt="Image" />
                                                   </div>
                                                   <div className ="infor">
                                                       <div className ="author-name"><a href="author.html">Daniel M.
                                                               Bivens</a></div>
                                                       <span>Creator</span>
                                                   </div>
                                               </div>
                                               <div className ="product-price flex">
                                                   <div className ="title">Current Bid</div>
                                                   <div className ="price">
                                                       <span>5.23 ETH</span>
                                                       <span>= $32.420</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div> 
                               </div>
                           </div>
                          
                       </div>
                   </div>

               </div>
           </div>
       </section>

       <section className ="tf-category tf-section">
           <div className ="category-inner">
               <div className ="row">
                   <div className ="col-md-12">
                       <div className ="sc-heading style-2">
                           <div className ="content-left">
                               <div className ="inner">
                                   <h3>Poplar Categories</h3>
                                   <p className ="desc">Most popular gaming digital nft market place </p>
                               </div>
                           </div>
                           <div className ="content-right">
                               <button className ="sc-button style letter style-2"><span>Browse More</span> </button>
                           </div>
                       </div>
                   </div>
                   <div className ="col-lg-4 col-md-6 col-12">
                       <div className ="sc-category">
                           <div className ="card-media">
                               <img src={category1} alt="" />
                           </div>
                           <div className ="card-content">
                               <h5><a href="#"> Browse By Template</a></h5>
                               <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                           </div>
                       </div>
                   </div>
                   <div className ="col-lg-4 col-md-6 col-12">
                       <div className ="sc-category pl-19">
                           <div className ="card-media">
                               <img src={category2} alt="" />
                           </div>
                           <div className ="card-content">
                               <h5><a href="#">UI Template</a></h5>
                               <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                           </div>
                       </div>
                   </div>
                   <div className ="col-lg-4 col-md-6 col-12">
                       <div className ="sc-category pl-40">
                           <div className ="card-media">
                               <img src={category3} alt="" />
                           </div>
                           <div className ="card-content">
                               <h5><a href="#">Graphics Design</a></h5>
                               <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                           </div>
                       </div>
                   </div>
                   <div className ="col-lg-4 col-md-6 col-12">
                       <div className ="sc-category mg-bt-0">
                           <div className ="card-media">
                               <img src={category4} alt="" />
                           </div>
                           <div className ="card-content">
                               <h5><a href="#">Social Network</a></h5>
                               <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                           </div>
                       </div>
                   </div>
                   <div className ="col-lg-4 col-md-6 col-12">
                       <div className ="sc-category mg-bt-0 pl-19">
                           <div className ="card-media">
                               <img src={category5} alt="" />
                           </div>
                           <div className ="card-content">
                               <h5><a href="#">Browse By Template</a></h5>
                               <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                           </div>
                       </div>
                   </div>
                   <div className ="col-lg-4 col-md-6 col-12">
                       <div className ="sc-category mg-bt-0 pl-40 end">
                           <div className ="card-media">
                               <img src={category6} alt="" />
                           </div>
                           <div className ="card-content">
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
</div>

<a id="scroll-top"></a>

<div className ="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog" aria-hidden="true">
   <div className ="modal-dialog modal-dialog-centered" role="document">
       <div className ="modal-content">
           <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
           </button>
           <div className ="modal-body space-y-20 pd-40">
               <h3 className ="text-center">Your Bidding
                   Successfuly Added</h3>
               <p className ="text-center">your bid <span className ="price color-popup">(5.23ETH) </span> has been listing
                   to our database</p>
               <a href="#" className ="btn btn-primary"> Watch the listings</a>
           </div>
       </div>
   </div>
</div>
<div className ="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true">
   <div className ="modal-dialog modal-dialog-centered" role="document">
       <div className ="modal-content">
           <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
           </button>
           <div className ="modal-body space-y-20 pd-40">
               <h3>Place a Bid</h3>
               <p className ="text-center">You must bid at least <span className ="price color-popup">5.23 ETH</span>
               </p>
               <input type="text" className ="form-control" placeholder="00.00 ETH"/>
               <p>Enter quantity. <span className ="color-popup">1 available</span>
               </p>
               <input type="text" className ="form-control quantity" value="1" />
               <div className ="hr"></div>
               
               <div className ="d-flex justify-content-between">
                   <p> Current Bid</p>
                   <p className ="text-right price color-popup"> 5.23 ETH </p>
               </div>
               <a href="#" className ="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success"
                   data-dismiss="modal" aria-label="Close"> Place a bid</a>
           </div>
       </div>
   </div>
</div>

</div>
       </>
    )
  }
  
  export default Homeanimation;



 