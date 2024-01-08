import React, { useEffect, useState } from "react";
import './Header.css';
import NavBar from '../navBar/NavBar';

const Header = (props) => {

    const [openNav, setOpenNav] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(0);
    
    const handleScroll = () => {
        const header = document.getElementById('headerScroll');
          if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25 || openNav) {
            header.style.display = 'flex';
            header.style.backgroundColor = 'hsla(0, 0%, 0.39215686274509803%, 1)';
          } 
          else {
            header.style.display = 'flex';
            header.style.backgroundColor = 'transparent';
          }
    };
    
    useEffect(() => {
        if(window.location.pathname === "/" || window.location.pathname === "/about") {
            document.addEventListener('scroll', handleScroll);
        }

        // Update cart quantity when the component mounts
        // calculateCartQuantity();
        
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        // Handle body overflow when the navbar is open
        if (openNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openNav]);

    const calculateCartQuantity = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartQuantity(cartItems.length);
    };

    useEffect(() => {
        calculateCartQuantity();
    }, [localStorage.getItem("cart")]);
    

    return (
        <>
            {openNav && (
                <NavBar 
                    hide={() => {
                        setOpenNav(false);
                        const z = document.getElementsByTagName('body');
                        z[0].style.overflow = 'scroll';
                    }}
                />
            )}
            <div 
                className={"mainBar" + " " + "mainBarRoot" + " " + "hideOnPcTab" + " " + (openNav ? "header-navbar-container" : "") + " " + "header-announcement-bar-wrapper" + " " + (window.location.pathname === "/" || window.location.pathname === "/about" ? "header-homeroot-props-style" : "")} 
                id="headerScroll" 
            >
                <div
                    className="header-border"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        width: "100%"
                    }}
                >
                    <div className="header-mobile-section-only">
                        {openNav ? 
                            <div onClick={() => setOpenNav(false)}>
                                <img
                                    loading="lazy"
                                    className="backButton"
                                    src="../../assets/close.png"
                                    alt="close"
                                />
                            </div> :
                            <div onClick={() => setOpenNav(true)}>
                                <img
                                    loading="lazy"
                                    className="backButton"
                                    src="../../assets/menu.png"
                                    alt="nav"
                                />
                            </div>
                        }
                    </div>
                    <div>
                        <a href="/">
                            <img
                            loading="lazy"
                            className="header-logo"
                            alt="logo"
                            src='https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593060895192-JTBU6YEO5JYB6LKEEJUA/logo.png?format=1500w'
                            />
                        </a>
                    </div>

                    <div className="header-display-desktop">
                        <div className="header-display-desktop">
                            <div className="header-element">
                                <a href="/" aria-current={window.location.pathname === "/" ? "page" : undefined}>
                                    <div className="header-element-item-active">Home</div>
                                </a>
                            </div>

                            <div className="header-element">
                                <a href="/gallery" aria-current={window.location.pathname === "/gallery" ? "page" : undefined}>
                                    <div className="header-element-item-active">Gallery</div>
                                </a>
                            </div>

                            <div className="header-element">
                                <a href="/artists" aria-current={window.location.pathname === "/artists" ? "page" : undefined}>
                                    <div className="header-element-item-active">Artists</div>
                                </a>
                            </div>

                            <div className="header-element">
                                <a href="/about" aria-current={window.location.pathname === "/about" ? "page" : undefined}>
                                    <div className="header-element-item-active">About</div>
                                </a>
                            </div>
                        </div>

                        <div className="header-cta-connect">
                            <a href="/about?scrollToConnect=true" className="header-cta-connect-atag">Connect</a>
                        </div>
                    </div>

                    <div className="cart-quantity-root header-mobile-section-only">
                        {/* <a href="/cart" className="cart-quantity-root">
                            <img
                                alt="cart"
                                src="../assets/cart.png"
                                className="cart-icon"
                            />
                            <div className="icon-cart-quantity">
                                <span className="cart-quantity-container">{cartQuantity}</span>
                            </div>
                        </a> */}
                    </div>
                </div>
            </div>
      </>
    )
}

export default Header;
