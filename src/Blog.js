
import React from 'react'
import post1 from './assets/images/post/post-1.jpg';
import post2 from './assets/images/post/post-2.jpg';
import post3 from './assets/images/post/post-3.jpg';
import post4 from './assets/images/post/post-4.jpg';
import post5 from './assets/images/post/post-5.jpg';
import post6 from './assets/images/post/post-6.jpg';
import post7 from './assets/images/post/post-7.jpg';
import post8 from './assets/images/post/post-8.jpg';
import post9 from './assets/images/post/post-9.jpg';
import img1 from './assets/images/logo/logo_dark.png';
import Navbar from './Navbar';
import moonimg from "./assets/images/icon/moon.png";
import wallet from './assets/images/icon/connect-wallet.svg'; 
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import newletter from './assets/images/background/img-newletter.png';
import Topbar from './Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { useState } from 'react';


const blogapi = [
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
    {
        post1 : post1,
        head : 'Senrew A. Sisson',
        date : '25 JAN 2022',
        over : 'An Overview Of Most Common UX Design Deliverables',
        read : 'Read More',
    },
]


const Blog = () => {

       const [blog,setblog] = useState(blogapi);

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
                                <h2 class="heading">New & Blogs</h2>
                            </div>
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>News & Blogs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="tf-section sc-card-blog">
            <div class="container">
                <div class="row">

                {blog.map((prop) =>{
                    const {post1,head,date,over,read} = prop;
                    return(
                        <>
                          <div class="col-lg-4 col-md-6">
                        <article class="sc-card-article">
                            <div class="card-media">
                                <a href="blog-details.html"><img src={post1} alt="" /></a>
                            </div>
                            <div class="content">
                                <div class="meta-info">
                                    <div class="item author">
                                        <a href="author02.html">{head}</a>
                                    </div>
                                    <div class="item date">{date}</div>
                                </div>
                                <div class="text-article">
                                    <h5><a href="blog-details.html">{over}</a></h5>
                                </div>
                                <a href="blog-details.html"
                                    class="sc-button btn-bordered-white style letter"><span>{read}</span></a>
                            </div>
                        </article>
                    </div>
                        </>
                    )
                })}

                    <div class="col-md-12">
                        <div class="wg-themesflat-pagination">
                            <ul>
                                <li><a href="#" class="page-numbers prev active"></a></li>
                                <li><a href="#" class="page-numbers">01</a></li>
                                <li><a href="#" class="page-numbers">02</a></li>
                                <li><a href="#" class="page-numbers current">03</a></li>
                                <li><a href="#" class="page-numbers">04</a></li>
                                <li><a href="#" class="page-numbers next"></a></li>
                            </ul>
                        </div>
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

export default Blog

 