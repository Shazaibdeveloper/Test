import React, { useState } from 'react'
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
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg';
import avt1 from './assets/images/avatar/avt-1.jpg';
import avt2 from './assets/images/avatar/avt-2.jpg';
import avt3 from './assets/images/avatar/avt-3.jpg';
import avt4 from './assets/images/avatar/avt-4.jpg';
import avt5 from './assets/images/avatar/avt-5.jpg';
import avt6 from './assets/images/avatar/avt-6.jpg'; 
import avt15 from './assets/images/avatar/avt-15.jpg';
import avt16 from './assets/images/avatar/avt-16.jpg';
import avt17 from './assets/images/avatar/avt-17.jpg';
import avt18 from './assets/images/avatar/avt-18.jpg';
import avt19 from './assets/images/avatar/avt-19.jpg';
import avt20 from './assets/images/avatar/avt-20.jpg';
import avt21 from './assets/images/avatar/avt-21.jpg';
import avt22 from './assets/images/avatar/avt-22.jpg'; 
import collection7 from './assets/images/img-collection/collection-7.jpg';
import collection8 from './assets/images/img-collection/collection-8.jpg'; 
 import newletter from './assets/images/background/img-newletter.png';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Bestseller from './Bestseller'
import Newsletter from './Newsletter';
import Footer from './Footer';


   const topsellerapi = [
    {
        avt1img : avt1,
        head : 'Jason M. Stalls',
        eth : '523.7 ETH',
        fol : 'Follow',
    },
    {
        avt1img : avt1,
        head : 'Frank F. Chan',
        eth : '523.7 ETH',
        fol : 'Follow',
    },
    {
        avt1img : avt1,
        head : 'Robert George',
        eth : '523.7 ETH',
        fol : 'Follow',
    },
    {
        avt1img : avt1,
        head : 'Frank N. Glisson',
        eth : '523.7 ETH',
        fol : 'Follow',
    },
    {
        avt1img : avt1,
        head : 'Michel ZonaS',
        eth : '523.7 ETH',
        fol : 'Follow',
    },
    {
        avt1img : avt1,
        head : 'Mizanur Mango',
        eth : '523.7 ETH',
        fol : 'Follow',
    }, 
   ]

   const collectionapi = [
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'John S. Outenewes',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'Michel Doknia Kalia',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'Somalia X Silva',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'Medas S Alskae',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'David Mich Hussy',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'John S. Outenewes',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'Zavi HD. Xossy',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'David Mich Hussy',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'John S. Outenewes',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'Zavi HD. Xossy',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'Fillips H Hearts',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'John S. Outenewes',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'Michel Doknia Kalia',
        para : 'ERC - 83',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        head : 'Somalia X Silva',
        para : 'ERC - 83',
    },
   ]

const Author = () => {

       const [topseller,settopseller] = useState(topsellerapi);
       const [collection,setcollection] = useState(collectionapi);

      



  return (
     <>
    
<div class="body header-fixed is_dark">
 

    <div id="wrapper">
        <div id="page" class="clearfix">

        <Topbar />
        <Navbar />


            
 
             <section class="fl-page-title">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-title-inner flex">
                                <div class="page-title-heading">
                                    <h2 class="heading">Authors</h2>
                                </div>
                                <div class="breadcrumbs">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li>Authors</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          <Bestseller />

            <section class="tf-section top-seller-page">
                <div class="container">
                    <div class="row">
                    

                        <div class="col-md-12">
                            <div class="sc-heading style-2">
                                <div class="content-left">
                                    <div class="inner">
                                        <h3>Top Sellers</h3>
                                        <p class="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div class="content-right">
                                    <button class="sc-button style letter style-2"><span>Explore More</span> </button>
                                </div>
                            </div>
                        </div>


                        {topseller.map((prop) =>{
                    const {avt1img,head,eth,fol} = prop;

                        return(
                               <>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="sc-author style-2">
                                <div class="card-avatar">
                                    <img src= {avt1img} alt="" />
                                </div>
                                <div class="infor">
                                    <h5><a href="#">{head}</a></h5>
                                    <div class="details">{eth}</div>
                                    <ul class="rating">
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li class="un-rate"><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <div class="button-follow">
                                    <a href="#" class="sc-button style-2"><span>{fol}</span></a>
                                </div>
                            </div>
                        </div>
                                </>
                               )
                               })}
                       
                        
                        
                    </div>
                </div>
            </section>

            <section class="hot-collections-page tf-section">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="sc-heading style-2">
                                <div class="content-left">
                                    <div class="inner">
                                        <h3>Hot Collection</h3>
                                        <p class="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="swiper-container popular-coll">
                                <div class="swiper-wrapper">


                                     {collection.map((prop) =>{
                                     const {collection7,avt15,head,para} = prop;
                                        return(
                                            <>
                                              <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-author-card">
                                                <div class="card-media">
                                                    <img src= {collection7} alt="" />
                                                </div>
                                                <div class="card-avatar">
                                                    <img src= {avt15} alt="" />
                                                </div>
                                                <div class="card-content">
                                                    <h5><a href="#">{head}</a> </h5>
                                                    <div class="details">{para}</div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                            </>
                                        )
                                     })}

                                  
                                </div>
                                <div class="swiper-pagination"></div>
                                <div class="swiper-button-next btn-slide-next "></div>
                                <div class="swiper-button-prev btn-slide-prev"></div>
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

 
    

 
     </>
  )
}

export default Author;