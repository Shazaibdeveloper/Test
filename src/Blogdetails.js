 
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
import detail1 from './assets/images/post/post-detail-1.jpg';
import recent1 from './assets/images/post/post-recent-new-1.jpg';
import recent2 from './assets/images/post/post-recent-new-2.jpg';
import recent3 from './assets/images/post/post-recent-new-3.jpg';
import avt12 from './assets/images/avatar/avt-12.jpg';
import avt13 from './assets/images/avatar/avt-13.jpg';
import avt14 from './assets/images/avatar/avt-14.jpg';
import avt15 from './assets/images/avatar/avt-15.jpg';
import post1 from './assets/images/post/post-related-new-1.jpg';
import post2 from './assets/images/post/post-related-new-2.jpg';
import Newsletter from './Newsletter';
import Topbar from './Topbar';
import Footer from './Footer';

const Blogdetails = () => {
  return (
   <>
   <div class="body header-fixed is_dark">
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
                                <h2 className="heading">Blog Destails</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Blog Destails</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="tf-section post-details" style={{padding: '100px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <article className="blog-details">
                            <div className="post-media">
                                <img src={detail1} alt="" />
                                <div className="meta">
                                    <div className="item author">
                                        <a href="#">Dale J. Barnes</a>
                                    </div>
                                    <div className="item date">
                                        <a href="#">05 Jan 2022</a>
                                    </div>
                                    <div className="item comments">
                                        Comments (5)
                                    </div>
                                </div>
                            </div>
                            <div className="post-content">
                                <h1 className="post-title">Ultimate Digital Clean-Up Checklist Are You Prepared For New
                                    Year E-Commerce Platforms An Overview Most Common</h1>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                    voluptas nulla pariatur</p>
                            </div>
                            <blockquote className="block-quote">
                                <h4>Roll Out New Features Without Hurting Loyal Users Unicode Character Sets The
                                    Ultim An Overview UX Design Deliverables</h4>
                                <div className="author">John B. Thomas</div>
                            </blockquote>
                            <div className="post-content">
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                    exercitationem ullam corporis suscipit laboriosam</p>
                            </div>
                        </article>
                        <div className="post-details">
                            <div className="details-left">
                                <div className="wg-title style-2">
                                    Popular Tags
                                </div>
                                <div className="wg-tags style-2">
                                    <ul>
                                        <li className="active"><a href="#">Crypto</a></li>
                                        <li><a href="#">Bitcoin</a></li>
                                        <li><a href="#">ICO Landing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="details-right">
                                <div className="wg-title style-2">
                                    Share Post
                                </div>
                                <div className="widget-social style-3">
                                    <ul>
                                        <li><a href="#" className="active"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="post-author style-2">
                            <div className="avatar">
                                <img src={avt12} alt="" />
                            </div>
                            <div className="content">
                                <h4><a href="#">Herbert N. Johnson</a></h4>
                                <div className="job">Author</div>
                                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                    pariatur must explain to you how all this mistaken idea of denouncing</p>
                                <div className="widget-social style-4">
                                    <ul>
                                        <li><a href="#" className="active"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="widget item widget-post style-2">
                            <div className="wg-title style-2">
                                Related News
                            </div>
                            <ul className="post-new">
                                <li>
                                    <div className="post-img">
                                        <img src= {post1} alt="Post New" />
                                    </div>
                                    <div className="post-content">
                                        <a href="blog-details.html" className="post-date"><i
                                                className="far fa-calendar-week"></i> 05 Jan 2022</a>
                                        <h6 className="title"><a href="blog-details.html">Comprensive Guides Server
                                                Push Design Feature</a></h6>
                                    </div>
                                </li>
                                <li>
                                    <div className="post-img">
                                        <img src= {post2} alt="Post New" />
                                    </div>
                                    <div className="post-content">
                                        <a href="blog-details.html" className="post-date"><i
                                                className="far fa-calendar-week"></i> 05 Jan 2022</a>
                                        <h6 className="title"><a href="blog-details.html">Comprensive Guides Server
                                                Push Design Feature</a></h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget item wg-comments">
                            <div className="wg-title">
                                People Comments
                            </div>
                            <ul>
                                <li>
                                    <div className="post-author">
                                        <div className="avatar">
                                            <img src= {avt13} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><a href="#">Matthew A. Larrison</a></h4>
                                            <div className="job">25 January 2022</div>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                quae</p>
                                            <a href="#" className="reply active">Reply</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="reply-comment">
                                    <div className="post-author">
                                        <div className="avatar">
                                            <img src= {avt14} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><a href="#">Joshua S. Flores</a></h4>
                                            <div className="job">25 January 2022</div>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                quae</p>
                                            <a href="#" className="reply">Reply</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="post-author">
                                        <div className="avatar">
                                            <img src={avt15} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><a href="#">Daniel C. Stackhouse</a></h4>
                                            <div className="job">25 January 2022</div>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                quae</p>
                                            <a href="#" className="reply">Reply</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="wg-post-comments">
                            <div className="wg-title">
                                Leave a Reply
                            </div>
                            <div className="desc">We’re Ready to Help Your Buisness</div>
                            <form method="post" id="contactform" className="comment-form form-submit"
                                action="./contact/contact-process.php" accept-charset="utf-8"
                                novalidate="novalidate">
                                <div className="text-wrap clearfix">
                                    <fieldset className="name-wrap">
                                        <input type="text" id="name" className="tb-my-input" name="name" tabindex="1"
                                            placeholder="Full Name" value="" size="32" aria-required="true"
                                            required="" />
                                    </fieldset>
                                    <fieldset className="email-wrap">
                                        <input type="email" id="email" className="tb-my-input" name="email" tabindex="2"
                                            placeholder="Email Address" value="" size="32" aria-required="true"
                                            required="" />
                                    </fieldset>
                                </div>
                                <fieldset className="message-wrap">
                                    <textarea id="comment-message" name="message" tabindex="4"
                                        placeholder="Write Message" aria-required="true"></textarea>
                                </fieldset>
                                <button name="submit" type="submit" id="comment-reply"
                                    className="sc-button style letter style-2"><span>Send Reply</span> </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <aside className="side-bar">
                            <div className="widget wg-search">
                                <form action="#" method="get" role="search" className="search-form">
                                    <input type="search" className="search-field" placeholder="Search" value="" name="s"
                                        title="Search for" required="" />
                                    <button className="search search-submit" type="submit" title="Search"></button>
                                </form>
                            </div>
                            <div className="widget item wg-category">
                                <div className="wg-title">
                                    Category
                                </div>
                                <ul>
                                    <li><a href="#"><span>Bitcoin</span><span>(5)</span></a></li>
                                    <li><a href="#"><span>Blockchain</span><span>(8)</span></a></li>
                                    <li><a href="#"><span>NFT</span><span>(3)</span></a></li>
                                    <li><a href="#"><span>Cryptocurrency</span><span>(2)</span></a></li>
                                    <li><a href="#"><span>ICO</span><span>(4)</span></a></li>
                                    <li><a href="#"><span>News</span><span>(5)</span></a></li>
                                    <li><a href="#"><span>Uncategorized</span><span>(2)</span></a></li>
                                </ul>
                            </div>
                            <div className="widget item widget-post style-3">
                                <div className="wg-title">
                                    Recent News
                                </div>
                                <ul className="post-new">
                                    <li>
                                        <div className="post-img">
                                            <img src={recent1} alt="Post New" />
                                        </div>
                                        <div className="post-content">
                                            <a href="blog-details.html" className="post-date"><i
                                                    className="far fa-calendar-week"></i> 05 Jan 2022</a>
                                            <h6 className="title"><a href="blog-details.html">An Overview Of The Most
                                                    Common UX Design </a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img src={recent2} alt="Post New" />
                                        </div>
                                        <div className="post-content">
                                            <a href="blog-details.html" className="post-date"><i
                                                    className="far fa-calendar-week"></i> 05 Jan 2022</a>
                                            <h6 className="title"><a href="blog-details.html">An Overview Of The Most
                                                    Common UX Design </a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img src={recent3} alt="Post New" />
                                        </div>
                                        <div className="post-content">
                                            <a href="blog-details.html" className="post-date"><i
                                                    className="far fa-calendar-week"></i> 05 Jan 2022</a>
                                            <h6 className="title"><a href="blog-details.html">An Overview Of The Most
                                                    Common UX Design </a></h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget item wg-tags">
                                <div className="wg-title">
                                    Popular Tags
                                </div>
                                <ul>
                                    <li className="active"><a href="#">Crypto</a></li>
                                    <li><a href="#">Bitcoin</a></li>
                                    <li><a href="#">Landing</a></li>
                                    <li><a href="#">Digital</a></li>
                                    <li><a href="#">NFTs</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>

        <Newsletter />
       <Footer />
    </div>
 </div>
</div>
   </>
  )
}

export default Blogdetails;


 