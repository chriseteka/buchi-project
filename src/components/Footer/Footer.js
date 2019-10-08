import React from "react";

export default function Footer(props){
    return <footer className="footer-area section-padding">
    <div className="footer-widget">
        <div className="container">
            <div className="row">
                <div className="col-xl-2 col-lg-3">
                    <div className="single-widget-home mb-5 mb-lg-0">
                        <h3 className="mb-4">top products</h3>
                        <ul>
                            <li className="mb-2"><a href="#">managed website</a></li>
                            <li className="mb-2"><a href="#">managed reputation</a></li>
                            <li className="mb-2"><a href="#">power tools</a></li>
                            <li><a href="#">marketing service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-5 offset-xl-1 col-lg-6">
                    <div className="single-widget-home mb-5 mb-lg-0">
                        <h3 className="mb-4">newsletter</h3>
                        <p className="mb-4">You can trust us. we only send promo offers, not a single.</p>  
                        <form action="#">
                            <input type="email" placeholder="Your email here"  required />
                            <button type="submit" className="template-btn">subscribe now</button>
                        </form>
                    </div>
                </div>
                <div className="col-xl-3 offset-xl-1 col-lg-3">
                    <div className="single-widge-home">
                        <h3 className="mb-4">instagram feed</h3>
                        <div className="feed">
                            <img src="assets/images/feed1.jpg" alt="feed" />
                            <img src="assets/images/feed2.jpg" alt="feed" />
                            <img src="assets/images/feed3.jpg" alt="feed" />
                            <img src="assets/images/feed4.jpg" alt="feed" />
                            <img src="assets/images/feed5.jpg" alt="feed" />
                            <img src="assets/images/feed6.jpg" alt="feed" />
                            <img src="assets/images/feed7.jpg" alt="feed" />
                            <img src="assets/images/feed8.jpg" alt="feed" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-6">
                    <span>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
Copyright &copy;{document.write(new Date().getFullYear())} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
</span>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="social-icons">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
}