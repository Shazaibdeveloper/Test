 
import React from 'react' 
import './assets/css/swiper-bundle.min.css';
import img1 from './assets/images/logo/logo_dark.png';
import Navbar from './Navbar';  
 import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import newletter from './assets/images/background/img-newletter.png';
import Topbar from './Topbar';

 const Contact = () => {
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
                                <h2 class="heading">Contact</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tf-contact tf-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="sc-contact-infor">
                            <h4>Need Help? Contact
                                With Our Hotline</h4>
                            <div class="icon">
                                <i class="fal fa-phone-volume"></i>
                            </div>
                            <div class="infor">
                                <a href="tel:012345678">+012 (345) 678 88</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="sc-contact-infor">
                            <h4>Need Help? Contact
                                With Our Hotline</h4>
                            <div class="icon">
                                <i class="fal fa-map-marker-alt"></i>
                            </div>
                            <div class="infor">
                                55 Main Street, 2nd Block,3rd Floor, New York
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="sc-contact-infor">
                            <h4>Need Help? Contact
                                With Our Hotline</h4>
                            <div class="icon">
                                <i class="fal fa-envelope-open"></i>
                            </div>
                            <div class="infor">
                                <a href="mailto:abc@gmail.com">hotlineinfo@gmail.com
                                    www.bidzen.net</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid">
                <div class="row">
                    {/* <iframe class="map-contact"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1640857108284!5m2!1svi!2s"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                </div>
            </div>
        </section>
        <section class="tf-section login-page contact-page pd-top-0">
            <div class="container">
                <div class="row jtf-content-center">
                    <div class="col-md-8">
                        <div class="form-create-item-content">
                            <div class="form-create-item">
                                <div class="sc-heading">
                                    <h3>Send Us Message</h3>
                                    <p class="desc">Most popular gaming digital nft market place </p>
                                </div>
                                <form id="create-item-1" action="./contact/contact-process.php" method="post"
                                    accept-charset="utf-8" novalidate="novalidate">
                                    <input type="text" id="name" class="tb-my-input" name="name" tabindex="1"
                                        placeholder="Your Full Name" value="" aria-required="true" required="" />
                                    <input type="email" id="email" class="tb-my-input" name="email" tabindex="2"
                                        placeholder="Email Address" value="" aria-required="true" required="" />
                                    <select class="valid">
                                        <option value="1">Subject</option>
                                        <option value="2">Subject</option>
                                        <option value="3">Subject</option>
                                    </select>
                                    <textarea id="comment-message" name="message" tabindex="4"
                                        placeholder="Write Message" aria-required="true"></textarea>
                                    <button name="submit" type="submit" id="comment-reply"
                                        class="sc-button style letter style-2"><span>Send Message</span> </button>
                                </form>
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
                                    <img id="logo_footer" src={img1} alt="nft-gaming"
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
                                        <img src={new4} alt="Post New" />
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
                                        <img src={new5} alt="Post New" />
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


</div>
     </>
   )
 }
 
 export default Contact

 