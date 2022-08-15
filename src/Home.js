 
import dark from './assets/images/logo/logo_dark.png'
import item1img from './assets/images/product-item/item-1.jpg'; 
import item5 from './assets/images/product-item/item-5.jpg';
import item6 from './assets/images/product-item/item-6.jpg';
import item7 from './assets/images/product-item/item-7.jpg';
import item8 from './assets/images/product-item/item-8.jpg';
import item9 from './assets/images/product-item/item-9.jpg';
import item10 from './assets/images/product-item/item-10.jpg';
import item11 from './assets/images/product-item/item-11.jpg';
import item13img from './assets/images/product-item/item-13.jpg';
import avt1img from './assets/images/avatar/avt-1.jpg';
import avt7 from './assets/images/avatar/avt-7.jpg';
import avt7img from './assets/images/avatar/avt-7.jpg';
import avt8 from './assets/images/avatar/avt-8.jpg';
import avt9 from './assets/images/avatar/avt-9.jpg';
import avt10 from './assets/images/avatar/avt-10.jpg';
import avt11 from './assets/images/avatar/avt-11.jpg'; 
import category1img from './assets/images/category/category-1.jpg';
import category2 from './assets/images/category/category-2.jpg';
import category3 from './assets/images/category/category-3.jpg';
import category4 from './assets/images/category/category-4.jpg';
import category5 from './assets/images/category/category-5.jpg';
import category6 from './assets/images/category/category-6.jpg'; 
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg';  
import slider3 from './assets/images/slider/img-slider-3.jpg';
import slider4 from './assets/images/slider/img-slider-4.jpg';
import slider1 from './assets/images/slider/img-slider-1.png'; 
import Navbar from './Navbar';
import Topbar from './Topbar';
import { useState } from 'react';
  



const Sliderarray = [
    {
        item1 : item1img,
        bid : 'Place Bid',
        bsc : 'BSC',
        smoke : '‘’3D Space Rocket With Smoke Premium’’',
        avt7 : avt7img,
        daniel : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        dol : '= $32.420'

    },
    {
        item1 : item1img,
        bid : 'Place Bid',
        bsc : 'BSC',
        smoke : '‘’3D Space Rocket With Smoke Premium’’',
        avt7 : avt7img,
        daniel : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        dol : '= $32.420'

    }, {
        item1 : item1img,
        bid : 'Place Bid',
        bsc : 'BSC',
        smoke : '‘’3D Space Rocket With Smoke Premium’’',
        avt7 : avt7img,
        daniel : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        dol : '= $32.420'

    }, {
        item1 : item1img,
        bid : 'Place Bid',
        bsc : 'BSC',
        smoke : '‘’3D Space Rocket With Smoke Premium’’',
        avt7 : avt7img,
        daniel : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        dol : '= $32.420'

    }, {
        item1 : item1img,
        bid : 'Place Bid',
        bsc : 'BSC',
        smoke : '‘’3D Space Rocket With Smoke Premium’’',
        avt7 : avt7img,
        daniel : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        dol : '= $32.420'

    }, {
        item1 : item1img,
        bid : 'Place Bid',
        bsc : 'BSC',
        smoke : '‘’3D Space Rocket With Smoke Premium’’',
        avt7 : avt7img,
        daniel : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        dol : '= $32.420'

    }, {
        item1 : item1img,
        bid : 'Place Bid',
        bsc : 'BSC',
        smoke : '‘’3D Space Rocket With Smoke Premium’’',
        avt7 : avt7img,
        daniel : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        dol : '= $32.420'

    }, {
        item1 : item1img,
        bid : 'Place Bid',
        bsc : 'BSC',
        smoke : '‘’3D Space Rocket With Smoke Premium’’',
        avt7 : avt7img,
        daniel : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        dol : '= $32.420'
    },
   ]



   const Collecapi = [
     {
        avt1 : avt1img,
        jason : 'Jason M. Stalls',
        ethe : '523.7 ETH',
        fol : 'Follow'
    },
    {
        avt1 : avt1img,
        jason : 'Frank F. Chan',
        ethe : '523.7 ETH',
        fol : 'Follow'
    },
    {
        avt1 : avt1img,
        jason : 'Robert George',
        ethe : '523.7 ETH',
        fol : 'Follow'
    },
    {
        avt1 : avt1img,
        jason : 'Frank N. Glisson',
        ethe : '523.7 ETH',
        fol : 'Follow'
    },
    {
        avt1 : avt1img,
        jason : 'Michel ZonaS',
        ethe : '523.7 ETH',
        fol : 'Follow'
    },
    {
        avt1 : avt1img,
        jason : 'Mizanur Mango',
        ethe : '523.7 ETH',
        fol : 'Follow'
    },
   ]

   const trendapi =[
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
    {
        item13 : item13img,
        bid : 'Place Bid',
        pnda : 'PANDA',
        space : '‘’3D Space Rocket With Smoke’’',
        avt7 : avt7img,
        dany : 'Daniel M.Bivens',
        crea : 'Creator',
        curbid : 'Current Bid',
        eth : '5.23 ETH',
        price : '= $32.420'
    },
   ]

   const popularapi = [
    {
        category1 : category1img,
        brows : 'Browse By Template',
        para : 'Sed ut perspiciatis unde omnis natus error sit voluptatem'
    },
    {
        category1 : category1img,
        brows : 'UI Template',
        para : 'Sed ut perspiciatis unde omnis natus error sit voluptatem'
    },
    {
        category1 : category1img,
        brows : 'Graphics Design',
        para : 'Sed ut perspiciatis unde omnis natus error sit voluptatem'
    },
    {
        category1 : category1img,
        brows : 'Social Network',
        para : 'Sed ut perspiciatis unde omnis natus error sit voluptatem'
    },
    {
        category1 : category1img,
        brows : 'Browse By Template',
        para : 'Sed ut perspiciatis unde omnis natus error sit voluptatem'
    },
    {
        category1 : category1img,
        brows : 'Browse By Template',
        para : 'Sed ut perspiciatis unde omnis natus error sit voluptatem'
    },
   ]



const Home = () => {

      const [loopslider,setloopslider] = useState(Sliderarray);
      const [Collec,setCollec] = useState(Collecapi);
      const [trendy,settrendy] = useState(trendapi);
      const [popular,setpopular] = useState(popularapi)


       
    return (
      <>
        
<div className ="body header-fixed is_dark">

      
 
    <div id="wrapper">
        <div id="page" className ="clearfix">

           <Topbar/>
           <Navbar />
                 <section className ="tf-slider">
                <div className ="swiper-container slider ">
                    <div className ="swiper-wrapper">
                        <div className ="swiper-slide">
                            <div className ="slider-item">
                                <div className ="overlay"></div>
                                <div className ="slider-inner flex home-1">
                                    <div className ="slider-content">
                                        <h1 className ="heading">Discover and collect your favorite digital NTFs</h1>
                                        <p className ="sub-heading">Quis autem vel eum iure reprehenderit qui in ea
                                            voluptates esse quam nihil molestiae consequatur veillum </p>
                                        <div className ="button-slider">
                                            <a href="explore1"
                                                className ="sc-button btn-bordered-white style letter "><span>Explore
                                                    More</span></a>
                                            <a href="create-item.html"
                                                className ="sc-button btn-bordered-white style file"><span>Create
                                                    Now</span></a>
                                        </div>
                                    </div>
                                    <div className ="slider-img">
                                        <div className ="img-home-1"><img src= {slider1}
                                                alt="Image"/></div>
                                    </div>
                                </div>
                            </div> 
                        </div>






                        <div className ="swiper-slide">
                            <div className ="slider-item ">
                                <div className ="overlay "></div>
                                <div className ="container">
                                    <div className ="slider-inner style-2 home-1 flex">
                                        <div className ="slider-content">
                                            <h1 className ="heading">Discover and collect your favorite digital NTFs</h1>
                                            <p className ="sub-heading">Quis autem vel eum iure reprehenderit qui in ea
                                                voluptates esse quam nihil molestiae consequatur veillum </p>
                                            <div className ="button-slider">
                                                <a href="explore-1.html"
                                                    className ="sc-button btn-bordered-white style letter "><span>Explore
                                                        More</span></a>
                                                <a href="create-item.html"
                                                    className ="sc-button btn-bordered-white style file"><span>Create
                                                        Now</span></a>
                                            </div>
                                        </div>
                                        <div className ="slider-img flex">
                                            <div className ="img-left">
                                                <div className ="img-1"><img src={slider3}
                                                        alt="Image"/></div>
                                                <div className ="img-2"><img src={slider4}
                                                        alt="Image"/></div>

                                            </div>
                                            <div className ="img-right">
                                                <img src="assets/images/slider/img-slider-5.jpg" alt="Image"/>
                                                <div className ="box-avatar flex">
                                                    <div className ="list-avatar flex">
                                                        <img src={avt8} alt="Image"/>
                                                        <img src={avt9} alt="Image"/>
                                                        <img src={avt10} alt="Image"/>
                                                        <img src={avt11} alt="Image"/>
                                                    </div>
                                                    <div className ="icon-plus">
                                                        <a href="#"><i className ="fas fa-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> 
                        </div>

                    </div>
                    <div className ="swiper-pagination"></div>
                    <div className ="swiper-button-next btn-slide-next "></div>
                    <div className ="swiper-button-prev btn-slide-prev"></div>
                </div>
            </section>

            <section className ="tf-live-auctions tf-section bg-color-1">
                <div className ="container">
                    <div className ="row">
                        <div className ="col-md-12">
                            <div className ="sc-heading style-2 has-icon">
                                <div className ="content-left">

                                    <div className ="inner">
                                        <div className ="group">
                                            <div className ="icon"><i className ="ripple"></i></div>
                                            <h3>Live Auctions</h3>
                                        </div>
                                        <p className ="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="col-md-12">
                            <div className ="swiper-container live-auc">
                                <div className ="swiper-wrapper">

                                
                                     {loopslider.map((props) =>{

                                          const {item1,bid,bsc,smoke,avt7,daniel,crea,curbid,eth,dol} = props;

                                        return(
                                            <>

                                             <div className ="swiper-slide">
                                        <div className ="slider-item">
                                            <div className ="sc-product-item">
                                                <div className ="product-img active">
                                                    <img src={item1} alt="Image"/>
                                                    <div className ="countdown">
                                                        <span className ="js-countdown" data-timer="516400"
                                                            data-labels=" :  ,  : , : , "></span>
                                                    </div>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        className ="sc-button style letter"><span>{bid}</span></a>
                                                    <label>{bsc}</label>
                                                </div>
                                                <div className ="product-content">
                                                    <h5 className ="title"><a href="item-details.html">{smoke}</a> </h5>
                                                    <div className ="product-author flex">
                                                        <div className ="avatar">
                                                            <img src={avt7} alt="Image"/>
                                                        </div>
                                                        <div className ="infor">
                                                            <div className ="author-name"><a href="author.html">{daniel}</a></div>
                                                            <span>{crea}</span>
                                                        </div>
                                                    </div>
                                                    <div className ="product-price">
                                                        <div className ="title">{curbid}</div>
                                                        <div className ="price">
                                                            <span>{eth}</span>
                                                            <span>{dol}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                         </div>
                                        </div> 
                                    </div>

                                            </>
                                        )
                                     })}
                                    



 

                                </div>
                                <div className ="swiper-pagination"></div>
                                <div className ="swiper-button-next btn-slide-next "></div>
                                <div className ="swiper-button-prev btn-slide-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


                 <div className ="container latest-collec">
                    <div className ="row">
                        <div className ="col-md-12">
                            <div className ="sc-heading style-2">
                                <div className ="content-left">
                                    <div className ="inner">
                                        <h3>Latest Collections</h3>
                                        <p className ="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                            <div className ="swiper-button-next btn-slide-next "></div>
                                <div className ="swiper-button-prev btn-slide-prev"></div>
                        </div>
                        
                        <div className ="col-md-12">
                            <div className ="swiper-container latest-coll style-2">
                                <div className ="swiper-wrapper">
                                    <div className ="swiper-slide tf-col-item">
                                        <div className ="slider-item">
                                            <div className ="sc-product-item style-3 bg-color-dark">
                                                <div className ="product-img ">
                                                    <img src={item5} alt="Image"/>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        className ="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div className ="product-content">
                                                    <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div className ="product-author flex mg-bt-0">
                                                        <div className ="avatar">
                                                            <img src={avt7} alt="Image"/>
                                                        </div>
                                                        <div className ="infor">
                                                            <div className ="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className ="swiper-slide tf-col-itemx2">
                                        <div className ="slider-item">
                                            <div className ="sc-product-item style-4 bg-color-dark">
                                                <div className ="product-img flex">
                                                    <div className ="img-left">
                                                        <img src={item6} alt="Image"/>
                                                        <label>BSC</label>
                                                    </div>
                                                    <div className ="img-right">
                                                        <div className ="top-img flex">
                                                            <img src={item7}
                                                                alt="Image"/>
                                                            <img src={item8}
                                                                alt="Image"/>
                                                        </div>
                                                        <div className ="bottom-img">
                                                            <img src={item9}
                                                                alt="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className ="product-content">
                                                    <h5 className ="title"><a href="item-details.html">‘’Multi-purpose 3D
                                                            Space Rocket With Animate Real Special Smoke Premium Quality
                                                            Gaming’’</a> </h5>
                                                    <div className ="product-author flex mg-bt-0">
                                                        <div className ="left flex">
                                                            <div className ="avatar">
                                                                <img src={avt7} alt="Image"/>
                                                            </div>
                                                            <div className ="infor">
                                                                <div className ="author-name"><a href="author.html">Daniel M.
                                                                        Bivens</a></div>
                                                                <span>Creator</span>
                                                            </div>
                                                        </div>
                                                        <div className ="button-wishlish">
                                                            <a href="#" className =" wishlish"><i
                                                                    className ="fas fa-heart"></i></a>
                                                            <span>152k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className ="swiper-slide tf-col-item">
                                        <div className ="slider-item">
                                            <div className ="sc-product-item style-3 bg-color-dark">
                                                <div className ="product-img ">
                                                    <img src={item10} alt="Image"/>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        className ="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div className ="product-content">
                                                    <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div className ="product-author flex mg-bt-0">
                                                        <div className ="avatar">
                                                            <img src={avt7} alt="Image"/>
                                                        </div>
                                                        <div className ="infor">
                                                            <div className ="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className ="swiper-slide tf-col-item">
                                        <div className ="slider-item">
                                            <div className ="sc-product-item style-3 bg-color-dark">
                                                <div className ="product-img ">
                                                    <img src={item11} alt="Image"/>
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        className ="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div className ="product-content">
                                                    <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div className ="product-author flex mg-bt-0">
                                                        <div className ="avatar">
                                                            <img src={avt7} alt="Image"/>
                                                        </div>
                                                        <div className ="infor">
                                                            <div className ="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>

                                    <div className ="swiper-slide tf-col-itemx2">
                                        <div className ="slider-item">
                                            <div className ="sc-product-item style-4 bg-color-dark">
                                                <div className ="product-img flex">
                                                    <div className ="img-left">
                                                        <img src={item6} alt="Image"/>
                                                        <label>BSC</label>
                                                    </div>
                                                    <div className ="img-right">
                                                        <div className ="top-img flex">
                                                            <img src={item7}
                                                                alt="Image"/>
                                                            <img src={item8}
                                                                alt="Image"/>
                                                        <div/>
                                                        <div className ="bottom-img">
                                                            <img src={item9}
                                                                alt="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className ="product-content">
                                                    <h5 className ="title"><a href="item-details.html">‘’Multi-purpose 3D
                                                            Space Rocket With Animate Real Special Smoke Premium Quality
                                                            Gaming’’</a> </h5>
                                                    <div className ="product-author flex mg-bt-0">
                                                        <div className ="left flex">
                                                            <div className ="avatar">
                                                                <img src={avt7} alt="Image"/>
                                                            </div>
                                                            <div className ="infor">
                                                                <div className ="author-name"><a href="author.html">Daniel M.
                                                                        Bivens</a></div>
                                                                <span>Creator</span>
                                                            </div>
                                                        </div>
                                                        <div className ="button-wishlish">
                                                            <a href="#" className =" wishlish"><i
                                                                    className ="fas fa-heart"></i></a>
                                                            <span>152k</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className ="swiper-slide tf-col-item">
                                        <div className ="slider-item">
                                            <div className ="sc-product-item style-3 bg-color-dark">
                                                <div className ="product-img ">
                                                    <img src={item10} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        className ="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div className ="product-content">
                                                    <h5 className ="title"><a href="item-details.html">‘’3D Space Rocket With
                                                            Smoke Premium’’</a> </h5>
                                                    <div className ="product-author flex mg-bt-0">
                                                        <div className ="avatar">
                                                            <img src={avt7} alt="Image" />
                                                        </div>
                                                        <div className ="infor">
                                                            <div className ="author-name"><a href="author.html">Daniel M.
                                                                    Bivens</a></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className ="swiper-pagination"></div>
                               
                            </div>
                        </div>
                    </div>
                </div>
 
            <section className ="tf-best-seller">
                <div className ="best-seller-inner">
                    <div className ="row">
                        <div className ="col-md-12">
                            <div className ="sc-heading style-2">
                                <div className ="content-left">
                                    <div className ="inner">
                                        <h3>Best Sellers</h3>
                                        <p className ="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div className ="content-right">
                                    <button className ="sc-button style letter style-2"><span>Explore More</span> </button>
                                </div>
                            </div>
                        </div>


                        {Collec.map((prop) =>{
                        
                        const {avt1,jason,ethe,fol} = prop;

                      return(
                          <>
                           <div className ="col-lg-2 col-md-4 col-6">
                          <div className ="sc-author">
                              <div className ="card-avatar">
                                  <img src={avt1} alt="" />
                              </div>
                              <div className ="infor">
                                  <h6> <a href="author.html">{jason}</a> </h6>
                                  <div className ="details">{ethe}</div>
                              </div>
                              <a href="#" className ="sc-button btn-bordered-white"><span>{fol}</span></a>
                          </div>
                      </div>
                          </>
                      )
                    })}

 



                    </div>
                </div>
            </section>

            <section className ="tf-trendy-collections tf-section">
                <div className ="container">
                    <div className ="row">
                        <div className ="col-md-12">
                            <div className ="sc-heading style-2">
                                <div className ="content-left">
                                    <div className ="inner">
                                        <h3>Trendy Collection</h3>
                                        <p className ="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className ="col-md-12">
                            <div className ="swiper-container trendy">
                                <div className ="swiper-wrapper">


                               {trendy.map((props) =>{
                                 
                                const {item13, bid, pnda, space, avt7, dany, crea, curbid, eth, price} = props

                                 return(
                                    <>
                                    <div className ="swiper-slide">
                                        <div className ="slider-item">
                                            <div className ="sc-product-item style-2">
                                                <div className ="product-img">
                                                    <img src={item13} alt="Image" />
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                        className ="sc-button style letter"><span>{bid}</span></a>
                                                    <label>{pnda}</label>
                                                </div>
                                                <div className ="product-content">
                                                    <h5 className ="title"><a href="item-details.html">{space}</a> </h5>
                                                    <div className ="product-author flex">
                                                        <div className ="avatar">
                                                            <img src={avt7} alt="Image" />
                                                        </div>
                                                        <div className ="infor">
                                                            <div className ="author-name"><a href="author.html">{dany}</a></div>
                                                            <span>{crea}</span>
                                                        </div>
                                                    </div>
                                                    <div className ="product-price flex">
                                                        <div className ="title">{curbid}</div>
                                                        <div className ="price">
                                                            <span>{eth}</span>
                                                            <span>{price}</span>
                                                        </div>
                                                    </div>
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

                    </div>
                </div>
            </section>

            <section className ="tf-category tf-section">
                <div className ="category-inner">
                    <div className ="row">
                       
                        <div className ="col-md-12">
                            <div className ="sc-heading style-2">
                                <div className ="content-left">
                                    <div className ="inner">
                                        <h3>Poplar Categories</h3>
                                        <p className ="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div className ="content-right">
                                    <button className ="sc-button style letter style-2"><span>Browse More</span> </button>
                                </div>
                            </div>
                        </div>
                      {popular.map((props) => {

                            const {category1,brows,para} = props;                                

                        return(
                            <>
                             <div className ="col-lg-4 col-md-6 col-12">
                            <div className ="sc-category">
                                <div className ="card-media">
                                    <img src={category1} alt="" />
                                </div>
                                <div className ="card-content">
                                    <h5><a href="#"> {brows}</a></h5>
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

            <section className ="new-letter">
                <div className ="container">
                    <div className ="new-letter-inner style-2 flex">
                        <div className ="new-letter-content">
                            <h3 className ="heading">Newsletters</h3>
                            <p className ="sub-heading">Most popular gaming digital nft market place </p>
                        </div>
                        <div className ="new-letter-img">
                            <div className ="form-subcribe">
                                <form id="subscribe-form" action="#" method="GET" accept-charset="utf-8"
                                    className ="form-submit">
                                    <input name="email" value="" className ="email" type="email"
                                        placeholder="Enter Email Address" required="" />
                                    <button name="submit" type="submit" id="submit"
                                        className ="sc-button style letter style-2"><span>Browse More</span> </button>
                                </form>
                            </div>
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
 
    <a id="scroll-top"></a>

     <div className ="modal fade popup" id="popup_bid_success" tabindex="-1" role="dialog" aria-hidden="true">
        <div className ="modal-dialog modal-dialog-centered" role="document">
            <div className ="modal-content">
                <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className ="modal-body space-y-20 pd-40">
                    <h3 className ="text-center">Your Bidding
                        Successfuly Added</h3>
                    <p className ="text-center">your bid <span className ="price color-popup">(5.23ETH) </span> has been listing
                        to our database</p>
                    <a href="#" className ="btn btn-primary"> Watch the listings</a>
                </div>
            </div>
        </div>
    </div>
    <div className ="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true">
        <div className ="modal-dialog modal-dialog-centered" role="document">
            <div className ="modal-content">
                <button type="button" className ="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className ="modal-body space-y-20 pd-40">
                    <h3>Place a Bid</h3>
                    <p className ="text-center">You must bid at least <span className ="price color-popup">5.23 ETH</span>
                    </p>
                    <input type="text" className ="form-control" placeholder="00.00 ETH"/>
                    <p>Enter quantity. <span className ="color-popup">1 available</span>
                    </p>
                    <input type="text" className ="form-control quantity" value="1" />
                    <div className ="hr"></div>
                    
                    <div className ="d-flex justify-content-between">
                        <p> Current Bid</p>
                        <p className ="text-right price color-popup"> 5.23 ETH </p>
                    </div>
                    <a href="#" className ="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success"
                        data-dismiss="modal" aria-label="Close"> Place a bid</a>
                </div>
            </div>
        </div>
    </div>

</div>
        
       </>

    )}
    

  
  
  export default Home;
 
 
  




 