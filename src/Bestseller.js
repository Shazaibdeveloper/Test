import React, { useState } from 'react'
import avt1 from './assets/images/avatar/avt-1.jpg';


const sellerapi = [
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
        head : 'Jason M. Stalls',
        eth : '523.7 ETH',
        fol : 'Follow',
    },
   ]


const Bestseller = () => {

    const [seller,setseller] = useState(sellerapi);


  return (
    <>
      <section class="tf-section best-seller-page">
                <div class="container">
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
                        <div class="col-md-12">
                            <div class="swiper-container author-best pd-bt-50">
                                <div class="swiper-wrapper">

                                 {seller.map((prop) => {
                                    const {avt1img,head,eth,fol} = prop;
                                    return(
                                        <>
                                        <div class="swiper-slide">
                                        <div class="slider-item">
                                            <div class="sc-author active">
                                                <div class="card-avatar">
                                                    <img src={avt1img} alt="" />
                                                </div>
                                                <div class="infor">
                                                    <h6> <a href="#">{head}</a> </h6>
                                                    <div class="details">{eth}</div>
                                                </div>
                                                <a href="#" class="sc-button btn-bordered-white"><span>{fol}</span></a>
                                            </div>
                                        </div> 
                                    </div>
                                        </>
                                    )
                                 })}
                                    

                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
   )
}

export default Bestseller