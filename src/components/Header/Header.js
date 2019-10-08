import React from "react"

export default function Header(){
    return <header className="header-area">
    {/* <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 d-md-flex">
                    <h6 className="mr-3"><span className="mr-2"><i className="fa fa-mobile"></i></span> call us now! +1 305 708 2563</h6>
                    <h6 className="mr-3"><span className="mr-2"><i className="fa fa-envelope-o"></i></span> medical@example.com</h6>
                    <h6><span className="mr-2"><i className="fa fa-map-marker"></i></span> Find our Location</h6>
                </div>
                <div className="col-lg-3">
                    <div className="social-links">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    <div id="header" id="home">
        <div className="container">
            <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
                <a href="index.html"><img src="assets/images/logo/logo.png" alt="" title="" /></a>
            </div>
            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li className="menu-active"><a href="index.html">Home</a></li>
                    <li><a href="#">Doctors</a></li>
                    <li><a href="#">Contact Us</a></li>
                    {/* <li className="menu-has-children"><a href="">Pages</a>
                        <ul>
                            <li><a href="about.html">about us</a></li>
                            <li><a href="elements.html">elements</a></li>
                        </ul>
                    </li>
                    <li className="menu-has-children"><a href="">blog</a>
                        <ul>
                            <li><a href="blog-home.html">blog home</a></li>
                            <li><a href="blog-details.html">blog details</a></li>
                        </ul>
                    </li> */}			          				          
                </ul>
            </nav>
            {/* <!-- #nav-menu-container --> */}
            </div>
        </div>
    </div>
</header>
}