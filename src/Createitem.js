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
import Newsletter from './Newsletter';
import Footer from './Footer';
import { useState } from 'react';
 

  const itemapi = [
    {
     collection7 : collection7,
     avt15 : avt15,
     name : 'John S. Outenewes',
     erc : 'ERC - 83',
     fol : 'Follow',
    },
    {
        collection7 : collection7,
        avt15 : avt15,
        name : 'Michel Doknia Kalia',
        erc : 'ERC - 83',
        fol : 'Follow',
       },
       {
        collection7 : collection7,
        avt15 : avt15,
        name : 'Somalia X Silv',
        erc : 'ERC - 83',
        fol : 'Follow',
       },
       {
        collection7 : collection7,
        avt15 : avt15,
        name : 'Medas S Alskae',
        erc : 'ERC - 83',
        fol : 'Follow',
       },
  ]




 const Createitem = () => {
       
    const [item,setitem] = useState(itemapi);

   return (
     <>
     <div className="body header-fixed is_dark">

   

<div id="wrapper">
    <div id="page" className="clearfix">

    <Topbar/>       
    <Navbar />

         <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">Create Item</h2>
                            </div>
                            <div className="breadcrumbs">
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

        <div className="tf-section top-seller">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-3">
                            <h3>Top Sellers</h3>
                            <p className="desc">Most popular gaming digital nft market place </p>
                        </div>
                    </div>

                 {item.map((prop) =>{
                     const {collection7,avt15,name,erc,fol} = prop;
                    return(
                        <>
                         <div className="col-lg-3 col-md-6">
                        <div className="sc-author-card style-2 active">
                            <div className="card-media">
                                <img src={collection7} alt="" />
                            </div>
                            <div className="card-avatar">
                                <img src={avt15} alt="" />
                            </div>
                            <div className="card-content">
                                <h5><a href="author.html">{name}</a> </h5>
                                <div className="details">{erc}</div>
                                <div className="card-bottom">
                                    <div className="widget-social">
                                        <ul>
                                            <li><a href="#" className="active"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <a href="#" className="sc-button style-2"><span>{fol}</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                        </>
                    )
                 })}

                   
 
                </div>
            </div>
        </div>

        <section className="tf-section create-item pd-top-0 mg-t-40">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Create Item</h3>
                                    <p className="desc">Most popular gaming digital nft market place </p>
                                </div>
                                <form id="create-item-1" action="#" method="GET" accept-charset="utf-8">
                                    <label className="uploadFile">
                                        <span className="filename">Choose Item</span>
                                        <input type="file" className="inputfile form-control" name="file" />
                                        <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                    </label>
                                    <div className="input-group">
                                        <input name="name" value="" type="text" placeholder="Item Name" required="" />
                                        <input name="number" value="" type="text" placeholder="Item Price"
                                            required="" />
                                    </div>
                                    <div className="input-group">
                                        <input name="name" value="" type="text" placeholder="Royality" required="" />
                                        <input name="number" value="" type="text" placeholder="Size" required="" />
                                    </div>
                                    <div className="input-group">
                                        <input name="name" value="" type="text" placeholder="Blance" required="" />
                                        <input name="number" value="" type="text" placeholder="No Of Copies"
                                            required="" />
                                    </div>
                                    <textarea id="comment-message" name="message" tabindex="4"
                                        placeholder="Description" aria-required="true"></textarea>
                                    <div className="input-group style-2 ">
                                        <div className="btn-check">
                                            <input type="radio" id="sale" name="fav_language" />
                                            <label for="sale">Put On Sale</label>
                                        </div>
                                        <div className="btn-check">
                                            <input type="radio" id="price" name="fav_language" />
                                            <label for="price">
                                                Instant Sale Price
                                            </label>
                                        </div>
                                        <div className="btn-check">
                                            <input type="radio" id="purchase" name="fav_language" />
                                            <label for="purchase">
                                                Unlock Purchased
                                            </label>
                                        </div>
                                    </div>
                                    <button name="submit" type="submit" id="submit"
                                        className="sc-button style letter style-2"><span>Create Item</span> </button>
                                </form>
                            </div>
                            <div className="form-background">
                                <img src={createitem} alt="" />
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
 
</div>
     </>
   )
 }
 
 export default Createitem


 