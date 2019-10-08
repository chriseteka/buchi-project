import React from "react";
import { Link } from 'react-router-dom';

export default function Header(){
    return <header className="header-area">
    <div id="header" id="home">
        <div className="container">
            <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
                <Link to="/"><img src="assets/images/logo/logo.png" alt="" title="" /></Link>
            </div>
            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li className="menu-active"><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    {/* <li className="menu-has-children"><Link to="">Pages</Link>
                        <ul>
                            <li><Link to="about.html">about us</Link></li>
                            <li><Link to="elements.html">elements</Link></li>
                        </ul>
                    </li>
                    <li className="menu-has-children"><Link to="">blog</Link>
                        <ul>
                            <li><Link to="blog-home.html">blog home</Link></li>
                            <li><Link to="blog-details.html">blog details</Link></li>
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