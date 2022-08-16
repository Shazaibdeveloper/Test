 

 import img1 from './assets/images/logo/logo_dark.png';
  import Navbar from './Navbar'; 
 import item1 from './assets/images/product-item/item-1.jpg';
 import item2 from './assets/images/product-item/item-2.jpg';
 import item3 from './assets/images/product-item/item-3.jpg';
 import item4 from './assets/images/product-item/item-4.jpg';
import auction from './assets/images/product-item/auction-detail.jpg';
 import item7 from './assets/images/product-item/item-7.jpg'; 
 import avt2 from './assets/images/avatar/avt-2.jpg';
 import avt3 from './assets/images/avatar/avt-3.jpg';
 import avt4 from './assets/images/avatar/avt-4.jpg';
  import avt6 from './assets/images/avatar/avt-6.jpg';
 import avt7 from './assets/images/avatar/avt-7.jpg'; 
 import new4 from './assets/images/post/post-recent-new-4.jpg';
 import new5 from './assets/images/post/post-recent-new-5.jpg'; 
 import newletter from './assets/images/background/img-newletter.png';
import Topbar from './Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Itemdetails = () => {
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
                                <h2 class="heading">Auctions Details</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Auctions Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="tf-section item-details-page">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-12 col-md-12">
                        <div class="item-media">
                            <div class="media">
                                <img src= {auction} alt="" />
                            </div>
                            <div class="countdown style-2">
                                <span class="js-countdown" data-timer="516400"
                                    data-labels=" Days  , Hour , Mint ,Seco"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-12">
                        <div class="content-item">
                            <h3> Mission For Ghost Fighter</h3>
                            <p class="mg-bt-42">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut</p>
                            <div class="author-item">
                                <div class="avatar">
                                    <img src= {avt4} alt="" />
                                </div>
                                <div class="infor">
                                    <div class="create">Owner By</div>
                                    <h6><a href="author.html">Duane M. Mendoza</a> </h6>
                                    <div class="widget-social">
                                        <ul>
                                            <li><a href="#" class="active"><i class="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-details-item">
                                <li><span class="name">Current Price 1.5 ETH</span><span
                                        class="price">$500.89</span> <span class="pagi">1 of 5</span> </li>
                                <li>Size 14000 x 14000 px</li>
                                <li> Volume Traded 64.1</li>
                            </ul>
                            <div class="author-bid">
                                <div class="author-item">
                                    <div class="avatar">
                                        <img src= {avt6} alt="" />
                                    </div>
                                    <div class="infor">
                                        <h6><a href="author.html">Keith J. Kelley</a> </h6>
                                        <div class="create">Creators</div>
                                    </div>
                                </div>
                                <div class="author-item">
                                    <div class="avatar">
                                        <img src= {avt3} alt="" />
                                    </div>
                                    <div class="infor">
                                        <h6><a href="author.html">David Michels</a> </h6>
                                        <div class="create">Collection</div>
                                    </div>
                                </div>

                            </div>
                            <div class="infor-bid">
                                <div class="content-left">
                                    <h6>Highest Bid</h6>
                                    <div class="price">9.3 BNB</div>
                                </div>
                                <div class="pagi">1 Of 9</div>
                            </div>
                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                class="sc-button style letter style-2 style-item-details"><span>Place Bid</span>
                            </a>
                            <div class="flat-tabs themesflat-tabs">
                                <ul class="menu-tab tab-title">
                                    <li class="item-title active">
                                        <span class="inner">Bids</span>
                                    </li>
                                    <li class="item-title">
                                        <span class="inner">History</span>
                                    </li>
                                    <li class="item-title">
                                        <span class="inner">Details</span>
                                    </li>
                                </ul>
                                <div class="content-tab">
                                    <div class="content-inner tab-content">
                                        <ul class="bid-history-list">
                                            <li>
                                                <div class="content">
                                                    <div class="author-item">
                                                        <div class="avatar">
                                                            <img src= {avt6} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <p>Bid listed for <span class="status">25 ETH 8</span>
                                                                hours ago
                                                                by <span class="creator">@Johnson</span> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="content">
                                                    <div class="author-item">
                                                        <div class="avatar">
                                                            <img src={avt2} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <p>Bid listed for <span class="status">25 ETH 8</span>
                                                                hours ago
                                                                by <span class="creator">@Johnson</span> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="content">
                                                    <div class="author-item">
                                                        <div class="avatar">
                                                            <img src= {avt4} alt="" />
                                                        </div>
                                                        <div class="infor">
                                                            <p>Bid listed for <span class="status">25 ETH 8</span>
                                                                hours ago
                                                                by <span class="creator">@Johnson</span> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="content-inner tab-content">
                                        <ul class="bid-history-list">
                                            <li>
                                                <div class="content">
                                                    <div class="client">
                                                        <div class="author-item">
                                                            <div class="avatar">
                                                                <img src= {avt6} alt="" />
                                                            </div>
                                                            <div class="infor">
                                                                <p>Bid listed for <span class="status">25 ETH
                                                                        8</span> hours ago
                                                                    by <span class="creator">@Johnson</span> </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="content-inner tab-content">
                                        <div class="provenance">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since
                                                the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to
                                                make a type specimen book.
                                                It has survived not only five centuries, but also the leap into
                                                electronic typesetting,
                                                remaining essentially unchanged. It was popularised in the 1960s
                                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                                and more recently with desktop publishing software like Aldus
                                                PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="live-autions tf-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sc-heading style-2 has-icon">
                            <div class="content-left">

                                <div class="inner">
                                    <div class="group">
                                        <div class="icon"><i class="ripple"></i></div>
                                        <h3>Live Auctions</h3>
                                    </div>
                                    <p class="desc">Most popular gaming digital nft market place </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="swiper-container live-auc style-2">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="sc-product-item style-7 flex">
                                        <div class="product-img active">
                                            <img src= {item1} alt="Image" />
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                class="sc-button style letter"><span>Place Bid</span></a>
                                        </div>
                                        <div class="product-content">
                                            <label>BSC</label>
                                            <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With QR
                                                    Smoke Premium’’</a> </h5>
                                            <div class="product-author flex">
                                                <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                </div>
                                                <div class="infor">
                                                    <div class="author-name"><a href="author.html">Daniel M.
                                                            Bivens</a></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div class="product-price">
                                                <div class="title">Current Bid</div>
                                                <div class="price">
                                                    <span>5.23 ETH</span>
                                                    <span>= $32.420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="sc-product-item style-7 flex">
                                        <div class="product-img">
                                            <img src= {item2} alt="Image" />
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                class="sc-button style letter"><span>Place Bid</span></a>
                                        </div>
                                        <div class="product-content">
                                            <label>BSC</label>
                                            <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With QR
                                                    Smoke Premium’’</a> </h5>
                                            <div class="product-author flex">
                                                <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                </div>
                                                <div class="infor">
                                                    <div class="author-name"><a href="author.html">Daniel M.
                                                            Bivens</a></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div class="product-price">
                                                <div class="title">Current Bid</div>
                                                <div class="price">
                                                    <span>5.23 ETH</span>
                                                    <span>= $32.420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="sc-product-item style-7 flex">
                                        <div class="product-img">
                                            <img src={item3} alt="Image" />
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                class="sc-button style letter"><span>Place Bid</span></a>
                                        </div>
                                        <div class="product-content">
                                            <label>BSC</label>
                                            <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With QR
                                                    Smoke Premium’’</a> </h5>
                                            <div class="product-author flex">
                                                <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                </div>
                                                <div class="infor">
                                                    <div class="author-name"><a href="author.html">Daniel M.
                                                            Bivens</a></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div class="product-price">
                                                <div class="title">Current Bid</div>
                                                <div class="price">
                                                    <span>5.23 ETH</span>
                                                    <span>= $32.420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="sc-product-item style-7 flex">
                                        <div class="product-img">
                                            <img src= {item7} alt="Image" />
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                class="sc-button style letter"><span>Place Bid</span></a>
                                        </div>
                                        <div class="product-content">
                                            <label>BSC</label>
                                            <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With QR
                                                    Smoke Premium’’</a> </h5>
                                            <div class="product-author flex">
                                                <div class="avatar">
                                                    <img src= {avt7} alt="Image" />
                                                </div>
                                                <div class="infor">
                                                    <div class="author-name"><a href="author.html">Daniel M.
                                                            Bivens</a></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div class="product-price">
                                                <div class="title">Current Bid</div>
                                                <div class="price">
                                                    <span>5.23 ETH</span>
                                                    <span>= $32.420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="sc-product-item style-7 flex">
                                        <div class="product-img">
                                            <img src= {item3} alt="Image" />
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                class="sc-button style letter"><span>Place Bid</span></a>
                                        </div>
                                        <div class="product-content">
                                            <label>BSC</label>
                                            <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With QR
                                                    Smoke Premium’’</a> </h5>
                                            <div class="product-author flex">
                                                <div class="avatar">
                                                    <img src={avt7} alt="Image" />
                                                </div>
                                                <div class="infor">
                                                    <div class="author-name"><a href="author.html">Daniel M.
                                                            Bivens</a></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div class="product-price">
                                                <div class="title">Current Bid</div>
                                                <div class="price">
                                                    <span>5.23 ETH</span>
                                                    <span>= $32.420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="sc-product-item style-7 flex">
                                        <div class="product-img">
                                            <img src= {item4} alt="Image" />
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                class="sc-button style letter"><span>Place Bid</span></a>
                                        </div>
                                        <div class="product-content">
                                            <label>BSC</label>
                                            <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With QR
                                                    Smoke Premium’’</a> </h5>
                                            <div class="product-author flex">
                                                <div class="avatar">
                                                    <img src={avt7} alt="Image" />
                                                </div>
                                                <div class="infor">
                                                    <div class="author-name"><a href="author.html">Daniel M.
                                                            Bivens</a></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div class="product-price">
                                                <div class="title">Current Bid</div>
                                                <div class="price">
                                                    <span>5.23 ETH</span>
                                                    <span>= $32.420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="sc-product-item style-7 flex">
                                        <div class="product-img">
                                            <img src={item1} alt="Image" />
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                class="sc-button style letter"><span>Place Bid</span></a>
                                        </div>
                                        <div class="product-content">
                                            <label>BSC</label>
                                            <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With QR
                                                    Smoke Premium’’</a> </h5>
                                            <div class="product-author flex">
                                                <div class="avatar">
                                                    <img src={avt7} alt="Image" />
                                                </div>
                                                <div class="infor">
                                                    <div class="author-name"><a href="author.html">Daniel M.
                                                            Bivens</a></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div class="product-price">
                                                <div class="title">Current Bid</div>
                                                <div class="price">
                                                    <span>5.23 ETH</span>
                                                    <span>= $32.420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="sc-product-item style-7 flex">
                                        <div class="product-img">
                                            <img src={item2} alt="Image" />
                                            <div class="countdown">
                                                <span class="js-countdown" data-timer="516400"
                                                    data-labels=" :  ,  : , : , "></span>
                                            </div>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid"
                                                class="sc-button style letter"><span>Place Bid</span></a>
                                        </div>
                                        <div class="product-content">
                                            <label>BSC</label>
                                            <h5 class="title"><a href="item-details.html">‘’3D Space Rocket With QR
                                                    Smoke Premium’’</a> </h5>
                                            <div class="product-author flex">
                                                <div class="avatar">
                                                    <img src={avt7} alt="Image" />
                                                </div>
                                                <div class="infor">
                                                    <div class="author-name"><a href="author.html">Daniel M.
                                                            Bivens</a></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                            <div class="product-price">
                                                <div class="title">Current Bid</div>
                                                <div class="price">
                                                    <span>5.23 ETH</span>
                                                    <span>= $32.420</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                <p class="text-center">your bid <span class="price color-popup">(4ETH) </span> has been listing to
                    our database</p>
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
                <p class="text-center">You must bid at least <span class="price color-popup">4.89 ETH</span>
                </p>
                <input type="text" class="form-control" placeholder="00.00 ETH" />
                <p>Enter quantity. <span class="color-popup">5 available</span>
                </p>
                <input type="text" class="form-control quantity" value="1" />
                <div class="hr"></div>
                <div class="d-flex justify-content-between">
                    <p> You must bid at least:</p>
                    <p class="text-right price color-popup"> 4.89 ETH </p>
                </div>
                <div class="d-flex justify-content-between">
                    <p> Service free:</p>
                    <p class="text-right price color-popup"> 0,89 ETH </p>
                </div>
                <div class="d-flex justify-content-between">
                    <p> Total bid amount:</p>
                    <p class="text-right price color-popup"> 4 ETH </p>
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

export default Itemdetails


 