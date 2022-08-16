 
 import img1 from './assets/images/logo/logo_dark.png';
 import dark from './assets/images/logo/logo_dark.png'
 import Navbar from './Navbar'; 
 import item5 from './assets/images/product-item/item-5.jpg';
 import item6 from './assets/images/product-item/item-6.jpg';
 import item7 from './assets/images/product-item/item-7.jpg';
 import item8 from './assets/images/product-item/item-8.jpg';
 import item9 from './assets/images/product-item/item-9.jpg';
 import item10 from './assets/images/product-item/item-10.jpg';
 import avt7 from './assets/images/avatar/avt-7.jpg';
 import avt8 from './assets/images/avatar/avt-8.jpg';
 import avt9 from './assets/images/avatar/avt-9.jpg';
 import avt10 from './assets/images/avatar/avt-10.jpg';
 import avt11 from './assets/images/avatar/avt-11.jpg'; 
 import collect1 from './assets/images/product-item/item-collect-1.jpg';
 import collect2 from './assets/images/product-item/item-collect-2.jpg';
 import collect3 from './assets/images/product-item/item-collect-3.jpg';
 import collect4 from './assets/images/product-item/item-collect-4.jpg';
 import collect5 from './assets/images/product-item/item-collect-5.jpg';
 import collect6 from './assets/images/product-item/item-collect-6.jpg';
 import collect7 from './assets/images/product-item/item-collect-7.jpg';
 import collect8 from './assets/images/product-item/item-collect-8.jpg';
 import collect9 from './assets/images/product-item/item-collect-9.jpg';
 import collect10 from './assets/images/product-item/item-collect-10.jpg';
 import collect11 from './assets/images/product-item/item-collect-11.jpg';
 import collect12 from './assets/images/product-item/item-collect-12.jpg'; 
 import newletter from './assets/images/background/img-newletter.png';
 import new4 from './assets/images/post/post-recent-new-4.jpg';
 import new5 from './assets/images/post/post-recent-new-5.jpg'; 
 import React from 'react'
import Topbar from './Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
 
 const Explore1 = () => {
   return (
      <>
      <div class="body header-fixed is_dark">

 <div class="preload preload-container">
    <div class="preload-logo"></div>
</div>
 
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
                                <h2 class="heading">Explore</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Explore</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tf-section our-latest-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sc-heading">
                            <h3>Our Latest Collections</h3>
                            <p class="desc">Most popular gaming digital nft market place </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="sc-product-item style-3">
                            <div class="product-img ">
                                <img src={item5} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>BSC</label>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex mg-bt-0">
                                    <div class="avatar">
                                        <img src={avt7} alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="sc-product-item style-4">
                            <div class="product-img flex">
                                <div class="img-left">
                                    <img src={item6} alt="Image" />
                                    <label>BSC</label>
                                </div>
                                <div class="img-right">
                                    <div class="top-img flex">
                                        <img src={item7} alt="Image" />
                                        <img src={item8} alt="Image" />
                                    </div>
                                    <div class="bottom-img">
                                        <img src={item9} alt="Image" />
                                    </div>
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’Multi-purpose 3D Space Rocket With
                                        Animate Real Special Smoke Premium Quality Gaming’’</a> </h5>
                                <div class="product-author flex mg-bt-0">
                                    <div class="left flex">
                                        <div class="avatar">
                                            <img src={avt7} alt="Image" />
                                        </div>
                                        <div class="infor">
                                            <div class="author-name"><a href="author.html">Daniel M. Bivens</a>
                                            </div>
                                            <span>Creator</span>
                                        </div>
                                    </div>
                                    <div class="button-wishlish">
                                        <a href="#" class=" wishlish"><i class="fas fa-heart"></i></a>
                                        <span>152k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="sc-product-item style-3 mg-bt-0-mb">
                            <div class="product-img ">
                                <img src={item10} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>BSC</label>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex mg-bt-0">
                                    <div class="avatar">
                                        <img src={avt7} alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tf-section trendy-colection-page style-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="wg-drop-category seclect-box">
                            <div id="all-items" class="dropdown">
                                <a href="#" class="btn-selector nolink">All Categories</a>
                                <ul class="">
                                    <li><span>NFT</span></li>
                                    <li><span>Crypto</span></li>
                                    <li><span>Token</span></li>
                                </ul>
                            </div>
                            <div id="new-items" class="dropdown">
                                <a href="#" class="btn-selector nolink">New Items</a>
                                <ul class="">
                                    <li><span>New bestsellers</span></li>
                                    <li><span>New releases</span></li>
                                </ul>
                            </div>
                            <div id="buy" class="dropdown">
                                <a href="#" class="btn-selector nolink">Buy Now</a>
                                <ul class="">
                                    <li><span>Wallet</span></li>
                                    <li><span>Website</span></li>
                                </ul>
                            </div>
                            <div id="sort-by" class="dropdown">
                                <a href="#" class="btn-selector nolink">Sort By</a>
                                <ul class="">
                                    <li><span>View</span></li>
                                    <li><span>Rating</span></li>
                                    <li><span>Sale</span></li>
                                    <li><span>Date</span></li>
                                </ul>
                            </div>
                            <button class="sc-button style letter style-2"><span>Filter</span> </button>
                        </div>
                    </div>


                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect1} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                    <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src={avt7} alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect2} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect3} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect4} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect5} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-6.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect7} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect8} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect9} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect10} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src={avt7} alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect11} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect12} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-1.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-2.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-3.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-4.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect5} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect6} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect6} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src={collect7} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-1.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-2.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-1.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl-item col-xl-3 col-lg-4 col-md-6">
                        <div class="sc-product-item style-5">
                            <div class="product-img">
                                <img src="assets/images/product-item/item-collect-2.jpg" alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <label>RUN</label>
                                <div class="avatar-box">
                                <img src={avt8} alt="Image" />
                                    <img src={avt9} alt="Image" />
                                    <img src={avt10} alt="Image" />
                                    <img src={avt11} alt="Image" />
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex">
                                    <div class="avatar">
                                        <img src="assets/images/avatar/avt-7.jpg" alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button id="loadmore" class=" sc-button style letter style-2"><span>Explore More</span>
                        </button>
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
 
 export default Explore1



 