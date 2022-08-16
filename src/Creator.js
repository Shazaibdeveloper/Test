  import React from 'react'
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
  import Navbar from './Navbar'; 
import item5 from './assets/images/product-item/item-5.jpg';
import item6 from './assets/images/product-item/item-6.jpg';
import item7 from './assets/images/product-item/item-7.jpg';
import item8 from './assets/images/product-item/item-8.jpg';
import item9 from './assets/images/product-item/item-9.jpg';
import item10 from './assets/images/product-item/item-10.jpg';
 import item19 from './assets/images/product-item/item-19.jpg';  
import item25 from './assets/images/product-item/item-25.jpg'; 
import item26 from './assets/images/product-item/item-26.jpg'; 
import item27 from './assets/images/product-item/item-27.jpg'; 
import item28 from './assets/images/product-item/item-28.jpg'; 
import item29 from './assets/images/product-item/item-29.jpg';  
import avt7 from './assets/images/avatar/avt-7.jpg'; 
import Topbar from './Topbar';
import Bestseller from './Bestseller';
import Footer from './Footer';
import Newsletter from './Newsletter';


  const Creator = () => {
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
                                <h2 class="heading">Creators</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Creators</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <Bestseller/>

        <section class="tf-section creators-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sc-heading">
                            <h3>Our Creators</h3>
                            <p class="desc">Most popular gaming digital nft market place </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="sc-product-item style-3">
                            <div class="product-img ">
                                <img src={item5} alt="Image" /> 
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <a href="#" class="button-follow">Follow</a>
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
                                    <a href="#" class="button-follow">Follow</a>
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
                                <a href="#" class="button-follow">Follow</a>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex mg-bt-0">
                                    <div class="avatar">
                                        <img src= {avt7} alt="Image" />
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
                                    <img src={item25} alt="Image" />
                                </div>
                                <div class="img-right">
                                    <div class="top-img flex">
                                        <img src={item26} alt="Image" />
                                        <img src={item27} alt="Image" />
                                    </div>
                                    <div class="bottom-img">
                                        <img src={item28} alt="Image" />
                                    </div>
                                </div>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’Multi-purpose 3D Space Rocket With
                                        Animate Real Special Smoke Premium Quality Gaming’’</a> </h5>
                                <div class="product-author flex mg-bt-0">
                                    <div class="left flex">
                                        <div class="avatar">
                                            <img src= {avt7} alt="Image" />
                                        </div>
                                        <div class="infor">
                                            <div class="author-name"><a href="author.html">Daniel M. Bivens</a>
                                            </div>
                                            <span>Creator</span>
                                        </div>
                                    </div>
                                    <a href="#" class="button-follow">Follow</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="sc-product-item style-3">
                            <div class="product-img ">
                                <img src={item19} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <a href="#" class="button-follow">Follow</a>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex mg-bt-0">
                                    <div class="avatar">
                                        <img src= {avt7} alt="Image" />
                                    </div>
                                    <div class="infor">
                                        <div class="author-name"><a href="author.html">Daniel M. Bivens</a></div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="sc-product-item style-3">
                            <div class="product-img ">
                                <img src={item29} alt="Image" />
                                <a href="#" data-toggle="modal" data-target="#popup_bid"
                                    class="sc-button style letter"><span>Place Bid</span></a>
                                <a href="#" class="button-follow">Follow</a>
                            </div>
                            <div class="product-content">
                                <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With Smoke
                                        Premium’’</a> </h5>
                                <div class="product-author flex mg-bt-0">
                                    <div class="avatar">
                                        <img src= {avt7} alt="Image" />
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
  
  export default Creator;



 