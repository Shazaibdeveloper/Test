import React from 'react'
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import img1 from './assets/images/logo/logo_dark.png';


const Footer = () => {
  return (
    <>
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
                                <li><a href="author01.html">Gaming </a></li>
                                <li><a href="connect-wallet.html">Product </a></li>
                                <li><a href="profile.html">All NFTs</a></li>
                                <li><a href="create-item.html">Social Network</a></li>
                                <li><a href="profile.html">Domain Names</a></li>
                                <li><a href="create-item.html">Collectibles</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div class="widget widget-menu menu-supports">
                            <h5 class="title-widget">Supports</h5>
                            <ul>
                                <li><a href="author01.html">Setting & Privacy </a></li>
                                <li><a href="connect-wallet.html">Help & Support </a></li>
                                <li><a href="profile.html">Live Auctions</a></li>
                                <li><a href="create-item.html"> Item Details</a></li>
                                <li><a href="profile.html"> 24/7 Supports</a></li>
                                <li><a href="create-item.html">Activitites</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 col-md-6 col-sm-12 col-12">
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
    </>
  )
}

export default Footer