
import img1 from './assets/images/logo/logo_dark.png';
import dark from './assets/images/logo/logo_dark.png'
import Navbar from './Navbar';   
import imgregister from './assets/images/background/img-register.jpg';
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import newletter from './assets/images/background/img-newletter.png';


import React from 'react'
import Topbar from './Topbar';

const Register = () => {
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
                                <h2 class="heading">Register</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Register</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tf-section login-page register-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-create-item-content">
                            <div class="form-create-item">
                                <div class="sc-heading">
                                    <h3>Create An Account</h3>
                                    <p class="desc">Most popular gaming digital nft market place </p>
                                </div>
                                <form id="create-item-1" action="#" method="GET" accept-charset="utf-8">
                                    <div class="input-group">
                                        <input name="name" value="" type="text" placeholder="First Name"
                                            required="" />
                                        <input name="name" value="" type="text" placeholder="Last Name" required="" />
                                    </div>
                                    <div class="input-group">
                                        <input name="phone" value="" type="text" placeholder="Phone Number"
                                            required="" />
                                        <input name="name" value="" type="text" placeholder="User Name" required="" />
                                    </div>
                                    <input name="email" value="" type="email" placeholder="Email Address"
                                        required="" />
                                    <div class="input-group">
                                        <input name="password" value="" type="password" placeholder="Password"
                                            required="" />
                                        <input name="password" value="" type="password" placeholder="Re-Password"
                                            required="" />
                                    </div>
                                    <div class="input-group style-2 ">
                                        <div class="btn-check">
                                            <input type="radio" id="html" name="fav_language" class="mg-bt-0"
                                                value="HTML" />
                                            <label for="html">Remember Me</label>
                                        </div>
                                    </div>
                                    <button name="submit" type="submit"
                                        class="sc-button style letter style-2"><span>Register Now</span> </button>
                                </form>
                                <div class="other-login">
                                    <div class="text">Or</div>
                                    <div class="widget-social">
                                        <ul>
                                            <li><a href="#" class="active"><i class="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="form-background">
                                <img src= {imgregister} alt="" />
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


 
</div>
    </>
   )
}

export default Register


 