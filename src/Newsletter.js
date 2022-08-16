import React from 'react'
import newletter from './assets/images/background/img-newletter.png';


const Newsletter = () => {
  return (
    <>
      <section class="new-letter bg-newletter">
            <div class="container">
                <div class="new-letter-inner flex">
                    <div class="new-letter-content"> 
                        <h3 class="heading">Newsletters</h3>
                        <p class="sub-heading">Most popular gaming digital nft market place </p>
                        <div class="form-subcribe">
                            <form id="subscribe-form" action="#" method="GET" accept-charset="utf-8"
                                class="form-submit">
                                <input name="email" value="" class="email" type="email"
                                    placeholder="Enter Email Address" required="" />
                                <button name="submit" type="submit" id="submit"
                                    class="sc-button style letter style-2"><span>Browse More</span> </button>
                            </form>
                        </div>
                    </div>
                    <div class="new-letter-img">
                        <img src={newletter} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
   )
}

export default Newsletter