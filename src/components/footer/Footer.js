import React from "react";
import './Footer.css';
// import fb from './facebook.png';

const Footer = (props) => {

    return (
        <div className="content-wrapper" style={{paddingTop: "calc(40vmax / 10)",paddingBottom: "calc(40vmax / 10)"}}>
            <div className="content">
                <div>
                    <div className="footer-content-desktop">
                        <div className="sqs-block markdown-block sqs-block-markdown">
                            <div className="sqs-block-content">
                                <h3>Contact</h3>
                                <p>MON – SAT <span className="footer-menu-tablet-seperator">|</span> <br className="footer-menu-tablet-newline"></br> 11.00 AM to 7.00 PM (IST)
                                <br></br>
                                <a href="tel:+919819052003">+91 98190 52003</a> <span className="footer-menu-tablet-seperator">|</span> <br className="footer-menu-tablet-newline"></br>
                                <a href="tel:+919820476729">+91 98204 76729</a> <br></br>
                                <a href="mailto:info@mokshartgallery.com">info@mokshartgallery.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="sqs-block markdown-block sqs-block-markdown">
                            <div className="sqs-block-content">
                                <h3>Gallery Timings</h3>
                                <p>BY APPOINTMENT ONLY</p>
                            </div>
                        </div>

                        <div className="footer-sqs-desktop-block">
                            <div className="sqs-block markdown-block sqs-block-markdown">
                                <div className="sqs-block-content">
                                    <h3>Stay Updated</h3>
                                </div>
                            </div>

                            <div className="sqs-block markdown-block sqs-block-markdown footer-sqs-signup">
                                <div className="sqs-block-content">
                                    <p>SIGN UP FOR LATEST UPDATES</p>
                                    <input
                                        type="email"
                                        placeholder="Enter Email Address"
                                        value=""
                                        className="email-input"
                                    />
                                </div>
                                <div className="form-button-wrapper form-button-wrapper--align-center">
                                    <button type="submit" className="button sqs-system-button sqs-editable-button sqs-button-element--primary NkyzQqS7X0JjKckdVqSS">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sqs-block horizontalrule-block sqs-block-markdown">
                        <div className="sqs-block-content">
                            <hr></hr>
                        </div>
                    </div>

                    <div className="footer-subroot-socailmedia">
                        <div className="sqs-block socialaccountlinks-v2-block sqs-block-markdown">
                            <div className="sqs-block-content">
                                <div className="sqs-svg-icon--list">
                                    <a href="https://www.facebook.com/mokshartgallery/" className="sqs-svg-icon--wrapper facebook-unauth">
                                        <img src="../../assets/facebook.png" alt="facebook" className="sqs-svg-icon--wrapper facebook-unauth" />
                                    </a>
                                    <a href="https://www.facebook.com/mokshartgallery/" className="sqs-svg-icon--wrapper facebook-unauth">
                                        <img src="../../assets/instagram.png" alt="instagram" className="sqs-svg-icon--wrapper facebook-unauth" />
                                    </a>
                                    <a href="https://www.facebook.com/mokshartgallery/" className="sqs-svg-icon--wrapper facebook-unauth">
                                        <img src="../../assets/linkedin.png" alt="linkedin" className="sqs-svg-icon--wrapper facebook-unauth" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="sqs-block markdown-block sqs-block-markdown footer-mobile-view">
                            <div className="sqs-block-content">
                                <p><a href="/privacy-policy">PRIVACY POLICY</a> | <br className="footer-menu-tablet-newline"></br><a href="/terms-of-use">TERMS OF USE</a>
                                <br></br>
                                <a href="/shipping-returns">SHIPPING & RETURNS</a> | <br className="footer-menu-tablet-newline"></br>
                                <a href="/faq">FAQ</a> <br></br>
                                </p>
                            </div>
                        </div>

                        <div className="sqs-block footer-markdown-block sqs-block-markdown footer-desktop-view">
                            <div className="sqs-block-content">
                                <p><a href="/privacy-policy">PRIVACY POLICY</a> | <br className="footer-menu-tablet-newline"></br><a href="/terms-of-use">TERMS OF USE</a> | <br className="footer-menu-tablet-newline"></br>
                                <a href="/shipping-returns">SHIPPING & RETURNS</a> | <br className="footer-menu-tablet-newline"></br>
                                <a href="/faq">FAQ</a> <br></br>
                                </p>
                            </div>
                        </div>

                        <div className="sqs-block align-item-text sqs-block-markdown footer-desktop-view">
                            <div className="sqs-block-content">
                                <p>© Moksh Art Online</p>
                            </div>
                        </div>

                        <div className="sqs-block markdown-block sqs-block-markdown footer-mobile-view">
                            <div className="sqs-block-content">
                                <p>© Moksh Art Online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;