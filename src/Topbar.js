import React from 'react'

const Topbar = () => {
  return (
   <>
    <div className ="topbar">
                <div className ="container">
                    <div className ="topbar-inner flex">
                        <div className ="menu-options flex">
                            <div className ="ethereum">
                                <div id="ethereum" className ="dropdown">
                                    <a href="#" className ="btn-selector nolink">Ethereum</a>
                                    <ul>
                                        <li><span>Ethereum</span></li>
                                        <li><span>Bitski</span></li>
                                        <li><span>Fortmatic</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className ="english">
                                <div id="english" className ="dropdown">
                                    <a href="#" className ="btn-selector nolink">English</a>
                                    <ul>
                                        <li><span>English</span></li>
                                        <li><span>USA</span></li>
                                        <li><span>France</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className ="topbar-right flex">
                            <span>New Product Coming Soon</span>
                            <div className ="countdown">
                                <span className ="js-countdown" data-timer="516400" data-labels=" :  ,  : , : , "></span>
                            </div>
                            <ul className ="socical-icon flex">
                                <li><a href="#" className ="active"><i className ="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className ="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className ="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className ="fab fa-dribbble"></i></a></li>
                                <li><a href="#"><i className ="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
   </>
  )
}

export default Topbar