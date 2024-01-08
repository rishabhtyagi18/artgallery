import React, { useEffect } from "react";
import './NavBar.css';
import Header from '../header/Header';

const NavBar = (props) => {
  const handleScrollToConnect = () => {
    // Navigate to the About page
    // location.push('/about');
  };
    
    return (
        <>
            <div className="overlay"></div>
            <div className="header-menu-nav">
                <div className="header-menu-nav-list">
                    <div className="header-menu-nav-folder">
                        <div className="header-menu-nav-folder-content">
                            <div className="header-menu-nav-wrapper">
                                <div className="header-menu-nav-item-collection">
                                    <a href="/" aria-current={window.location.pathname === "/" ? "page" : undefined}>
                                        <div className="header-menu-nav-item-content">Home</div>
                                    </a>
                                </div>

                                <div className="header-menu-nav-item-collection">
                                    <a href="/gallery" aria-current={window.location.pathname === "/gallery" ? "page" : undefined}>
                                        <div className="header-menu-nav-item-content">Gallery</div>
                                    </a>
                                </div>

                                <div className="header-menu-nav-item-collection">
                                    <a href="/artists" aria-current={window.location.pathname === "/artists" ? "page" : undefined}>
                                        <div className="header-menu-nav-item-content">Artists</div>
                                    </a>
                                </div>

                                <div className="header-menu-nav-item-collection">
                                    <a href="/about" aria-current={window.location.pathname === "/about" ? "page" : undefined}>
                                        <div className="header-menu-nav-item-content">About</div>
                                    </a>
                                </div>
                            </div>

                            <div className="header-menu-cta">
                                <a href="/about?scrollToConnect=true" className="theme-btn-primary">Connect</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;