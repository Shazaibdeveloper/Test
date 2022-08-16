import React from 'react'
import './index.css';
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creator from './Creator';
import Home from './Home';
import Hometwo from './Hometwo';
import Homeanimation from './Homeanimation';
import Explore1 from './Explore1';
import Explore2 from './Explore2';
import Item from './Item';
import Itemdetails from './Itemdetails';
import Blog from './Blog';
import Blogdetails from './Blogdetails';
import Author from './Author';
import Connectwallet from './Connectwallet';
import Createitem from './Createitem';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Test from './Test';
 
const Allnav = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/"                element={<Home />}/>
          <Route path="/home"            element={<Home />}/>
          <Route path="/hometwo"         element={<Hometwo />} />
          <Route path="/homeanimation"   element={<Homeanimation />} />
          <Route path="/explore1"        element={<Explore1 />} />
          <Route path="/explore2"        element={<Explore2 />} />
          <Route path="/creator"         element={<Creator />} />
          <Route path="/item"            element={<Item />} />
          <Route path="/itemdetails"     element={<Itemdetails />} />
          <Route path="/blog"            element={<Blog />} />
          <Route path="/blogdetails"     element={<Blogdetails />} />
          <Route path="/author"          element={<Author />} />
          <Route path="/connectwallet"   element={<Connectwallet />} />
          <Route path="/createitem"      element={<Createitem />} />
          <Route path="/login"           element={<Login />} />
          <Route path="/register"        element={<Register />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="/test"            element={<Test />} />
       </Routes>
    </BrowserRouter>
    </>
   )
}

export default Allnav