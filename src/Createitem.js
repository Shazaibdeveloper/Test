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
import img1 from './assets/images/logo/logo_dark.png';
import Navbar from './Navbar'; 
import collection7 from './assets/images/img-collection/collection-7.jpg';
import collection8 from './assets/images/img-collection/collection-8.jpg';
import collection9 from './assets/images/img-collection/collection-9.jpg';
import collection10 from './assets/images/img-collection/collection-10.jpg'; 
import createitem from './assets/images/background/img-create-item.jpg';   
import avt15 from './assets/images/avatar/avt-15.jpg';
import avt16 from './assets/images/avatar/avt-16.jpg';
import avt17 from './assets/images/avatar/avt-17.jpg';
 import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import newletter from './assets/images/background/img-newletter.png';
import Topbar from './Topbar';
 
 const Createitem = () => {
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
                                <h2 class="heading">Create Item</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Create Item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="tf-section top-seller">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sc-heading style-3">
                            <h3>Top Sellers</h3>
                            <p class="desc">Most popular gaming digital nft market place </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="sc-author-card style-2 active">
                            <div class="card-media">
                                <img src={collection7} alt="" />
                            </div>
                            <div class="card-avatar">
                                <img src={avt15} alt="" />
                            </div>
                            <div class="card-content">
                                <h5><a href="author.html">John S. Outenewes</a> </h5>
                                <div class="details">ERC - 83</div>
                                <div class="card-bottom">
                                    <div class="widget-social">
                                        <ul>
                                            <li><a href="#" class="active"><i class="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <a href="#" class="sc-button style-2"><span>Follow</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="sc-author-card style-2">
                            <div class="card-media">
                                <img src={collection8} alt="" />
                            </div>
                            <div class="card-avatar">
                                <img src={avt16} alt="" />
                            </div>
                            <div class="card-content">
                                <h5><a href="author.html">Michel Doknia Kalia</a> </h5>
                                <div class="details">ERC - 83</div>
                                <div class="card-bottom">
                                    <div class="widget-social">
                                        <ul>
                                            <li><a href="#" class="active"><i class="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <a href="#" class="sc-button style-2"><span>Follow</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="sc-author-card style-2">
                            <div class="card-media">
                                <img src={collection9} alt="" />
                            </div>
                            <div class="card-avatar">
                                <img src={avt17} alt="" />
                            </div>
                            <div class="card-content">
                                <h5><a href="author.html">Somalia X Silva</a> </h5>
                                <div class="details">ERC - 83</div>
                                <div class="card-bottom">
                                    <div class="widget-social">
                                        <ul>
                                            <li><a href="#" class="active"><i class="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <a href="#" class="sc-button style-2"><span>Follow</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="sc-author-card style-2 mb-mg-0">
                            <div class="card-media">
                                <img src={collection10} alt="" />
                            </div>
                            <div class="card-avatar">
                                <img src={avt16} alt="" />
                            </div>
                            <div class="card-content">
                                <h5><a href="author.html">Medas S Alskae</a> </h5>
                                <div class="details">ERC - 83</div>
                                <div class="card-bottom">
                                    <div class="widget-social">
                                        <ul>
                                            <li><a href="#" class="active"><i class="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <a href="#" class="sc-button style-2"><span>Follow</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="tf-section create-item pd-top-0 mg-t-40">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-create-item-content">
                            <div class="form-create-item">
                                <div class="sc-heading">
                                    <h3>Create Item</h3>
                                    <p class="desc">Most popular gaming digital nft market place </p>
                                </div>
                                <form id="create-item-1" action="#" method="GET" accept-charset="utf-8">
                                    <label class="uploadFile">
                                        <span class="filename">Choose Item</span>
                                        <input type="file" class="inputfile form-control" name="file" />
                                        <span class="icon"><i class="far fa-cloud-upload"></i></span>
                                    </label>
                                    <div class="input-group">
                                        <input name="name" value="" type="text" placeholder="Item Name" required="" />
                                        <input name="number" value="" type="text" placeholder="Item Price"
                                            required="" />
                                    </div>
                                    <div class="input-group">
                                        <input name="name" value="" type="text" placeholder="Royality" required="" />
                                        <input name="number" value="" type="text" placeholder="Size" required="" />
                                    </div>
                                    <div class="input-group">
                                        <input name="name" value="" type="text" placeholder="Blance" required="" />
                                        <input name="number" value="" type="text" placeholder="No Of Copies"
                                            required="" />
                                    </div>
                                    <textarea id="comment-message" name="message" tabindex="4"
                                        placeholder="Description" aria-required="true"></textarea>
                                    <div class="input-group style-2 ">
                                        <div class="btn-check">
                                            <input type="radio" id="sale" name="fav_language" />
                                            <label for="sale">Put On Sale</label>
                                        </div>
                                        <div class="btn-check">
                                            <input type="radio" id="price" name="fav_language" />
                                            <label for="price">
                                                Instant Sale Price
                                            </label>
                                        </div>
                                        <div class="btn-check">
                                            <input type="radio" id="purchase" name="fav_language" />
                                            <label for="purchase">
                                                Unlock Purchased
                                            </label>
                                        </div>
                                    </div>
                                    <button name="submit" type="submit" id="submit"
                                        class="sc-button style letter style-2"><span>Create Item</span> </button>
                                </form>
                            </div>
                            <div class="form-background">
                                <img src={createitem} alt="" />
                            </div>
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
                                <button name="submit" type="submit"
                                    class="sc-button style letter style-2"><span>Browse More</span> </button>
                            </form>
                        </div>
                    </div>
                    <div class="new-letter-img">
                        <img src={newletter} alt="Image" />
                    </div>
                </div>
            </div>
        </section>

         <footer id="footer" class="clearfix bg-style">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="widget widget-logo">
                            <div class="logo-footer" id="logo-footer">
                                <a href="index.html">
                                    <img id="logo_footer" src= {img1} alt="nft-gaming"
                                        width="151" height="45" data-retina="assets/images/logo/logo_dark@2x.png"
                                        data-width="151" data-height="45" />
                                </a>
                            </div>
                            <p class="sub-widget-logo">Sed ut perspiciatis unde omnis iste natus error sit voluptate
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaes</p>
                            <div class="widget-social">
                                <ul>
                                    <li><a href="#" class="active"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6 col-6">
                        <div class="widget widget-menu menu-marketplace">
                            <h5 class="title-widget">Marketplace</h5>
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
                    <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div class="widget widget-menu menu-supports">
                            <h5 class="title-widget">Supports</h5>
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
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="widget widget-post">
                            <h5 class="title-widget">News & Post</h5>
                            <ul class="post-new">
                                <li>
                                    <div class="post-img">
                                        <img src= {new4} alt="Post New" />
                                    </div>
                                    <div class="post-content">
                                        <h6 class="title"><a href="blog-details.html">Roll Out New Features Without
                                                Hurting Loyal Users</a></h6>
                                        <a href="blog-details.html" class="post-date"><i
                                                class="far fa-calendar-week"></i> 25 JAN 2022</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-img">
                                        <img src= {new5} alt="Post New" />
                                    </div>
                                    <div class="post-content">
                                        <h6 class="title"><a href="blog-details.html">An Overview The Most Comon UX
                                                Design Deliverables</a></h6>
                                        <a href="blog-details.html" class="post-date"><i
                                                class="far fa-calendar-week"></i> 25 JAN 2022</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
        <div class="bottom">
            <div class="container">
                <div class="bottom-inner">
                    Copyright © 2022 Bidzen | NFT Marketplace HTML Template. Designed by <a
                        href="https://themeforest.net/user/themesflat/portfolio"> Themesflat</a>
                </div>
            </div>
        </div>

    </div>
 </div>
 
<a id="scroll-top"></a>
 
</div>
     </>
   )
 }
 
 export default Createitem


 