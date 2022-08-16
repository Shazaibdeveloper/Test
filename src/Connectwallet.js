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
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import newletter from './assets/images/background/img-newletter.png';
import icon1 from './assets/images/icon/icon-1.svg';
import icon2 from './assets/images/icon/icon-2.svg';
import icon3 from './assets/images/icon/icon-3.svg';
import icon4 from './assets/images/icon/icon-4.svg';
import icon5 from './assets/images/icon/icon-5.svg';
import icon6 from './assets/images/icon/icon-6.svg';
import icon7 from './assets/images/icon/icon-7.png';
import icon8 from './assets/images/icon/icon-8.svg';
import icon9 from './assets/images/icon/icon-9.svg';
import Topbar from './Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { useState } from 'react';

   const walletapi = [
    {
        icon1 : icon1,
        head : 'Meta Mask',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
    {
        icon1 : icon2,
        head : 'Bitski',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
    {
        icon1 : icon3,
        head : 'Fortmatic',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
    {
        icon1 : icon4,
        head : 'Wallet Connect',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
    {
        icon1 : icon5,
        head : 'Coinbase Wallet',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
    {
        icon1 : icon6,
        head : 'Authereum',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
    {
        icon1 : icon7,
        head : 'kaikas',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
    {
        icon1 : icon8,
        head : 'Torus',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
    {
        icon1 : icon9,
        head : 'Bitcoin',
        para : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    },
   ]


 const Connectwallet = () => {

      const [wallet,setwallet] = useState(walletapi)

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
                                <h2 class="heading">Wallet-Connect</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Wallet-connect</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tf-section connect-wallet">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sc-heading">
                            <h3>Wallet- Connect</h3>
                            <p class="desc">Most popular gaming digital nft market place </p>
                        </div>
                    </div>

                {wallet.map((prop) =>{
                     const {icon1,head,para} = prop;
                    return(
                        <>
                         <div class="col-lg-4 col-md-4">
                        <div class="sc-wallet">
                            <div class="icon">
                                <img src= {icon1} alt="" />
                            </div>
                            <div class="content">
                                <h4><a href="#"> {head}</a></h4>
                                <p>{para}</p>
                            </div>
                        </div>
                    </div>
                        </>
                    )
                })}


                   

 
                </div>
            </div>
        </section>

        <Newsletter />
       <Footer />

    </div>
 </div>
 
<a id="scroll-top"></a>
 
</div>
    </>
    )
 }
 
 export default Connectwallet



 