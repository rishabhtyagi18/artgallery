import React, { useState } from "react";
import './Footer.css';
import Toast from '../toast/Toast';
import { connectCustomer } from '../../services/api';
import { PulseLoader } from 'react-spinners';

const Footer = (props) => {
    const [email, setEmail] = useState('');
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 2500,
    });
    const [waiting, setWaiting] = useState(false);

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        
        setEmail((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    };

    const handleSubscribe = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email.trim())) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Email' });
            return;
        }

        // setEmail('');
        // setToastConfig({ ...toastConfig, show: true, text: 'You have been added successfully to our mailing list. Thank you!' });

        setWaiting(true);
        const data = {'email': email, 'type': 'subscribe'};
        connectCustomer(data).then((res) => {
            if (res.status) {
                console.log(res.data)
                setWaiting(false);
                setEmail('');
                setToastConfig({
                    show: true,
                    text: 'You have been added successfully to our mailing list. Thank you!',
                    showTick: false,
                    time: 2500,
                });
                // navigate(`/builders/${builderName}/${builderID}`)
            } else {
                setWaiting(false);
                setToastConfig({
                    show: true,
                    text: 'Issue reported successfully',
                    showTick: false,
                    time: 2500,
                });
            }
        }, (err) => {
            setWaiting(false);
            setToastConfig({
            show: true,
            text: 'Something went wrong',
            showTick: false,
            time: 2500,
            });
        })
    }

    return (
        <>
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
                                    <h3>Mumbai Gallery Timings</h3>
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
                                            value={email}
                                            className="email-input"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-button-wrapper form-button-wrapper--align-center" onClick={handleSubscribe}>
                                        <button type="submit" className="button sqs-system-button sqs-editable-button sqs-button-element--primary NkyzQqS7X0JjKckdVqSS">
                                            {waiting ? <PulseLoader color="#FFF" size={10} /> : 'Subscribe'}
                                        </button>
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
                                        <a target="_blank" href="https://www.facebook.com/mokshartgallery/" className="sqs-svg-icon--wrapper facebook-unauth">
                                            <img src="../../assets/facebook.png" alt="facebook" className="sqs-svg-icon--wrapper facebook-unauth" />
                                        </a>
                                        <a target="_blank" href="https://www.instagram.com/mokshartgallery/" className="sqs-svg-icon--wrapper facebook-unauth">
                                            <img src="../../assets/instagram.png" alt="instagram" className="sqs-svg-icon--wrapper facebook-unauth" />
                                        </a>
                                        <a target="_blank" href="http://www.linkedin.com/company/moksh-art-gallery---india/" className="sqs-svg-icon--wrapper facebook-unauth">
                                            <img src="../../assets/linkedin.png" alt="linkedin" className="sqs-svg-icon--wrapper facebook-unauth" />
                                        </a>
                                        <a target="_blank" href="https://api.whatsapp.com/send?phone=919819052003&text=Hi&source=&data=" className="sqs-svg-icon--wrapper facebook-unauth">
                                            <img src="../../assets/whatsapp.png" alt="whatsapp" className="sqs-svg-icon--wrapper facebook-unauth" />
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
            {toastConfig.show ? (
                <Toast
                    hideHandler={setToastConfig}
                    time={toastConfig.time}
                    tickIcon={toastConfig.showTick}
                    text={toastConfig.text}
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 'fit-content',
                        justifyContent: 'center',
                    }}
                />
            ) : null}
        </>
    )
}

export default Footer;