
import img1 from './assets/images/logo/logo_dark.png';
import dark from './assets/images/logo/logo_dark.png'
import Navbar from './Navbar';   
import imgregister from './assets/images/background/img-register.jpg';
import new4 from './assets/images/post/post-recent-new-4.jpg';
import new5 from './assets/images/post/post-recent-new-5.jpg'; 
import newletter from './assets/images/background/img-newletter.png';


import React from 'react'
import Topbar from './Topbar';
import Newsletter from './Newsletter';
import Footer from './Footer';

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

        <Newsletter />
       <Footer />

    </div>
 </div>


 
</div>
    </>
   )
}

export default Register


 