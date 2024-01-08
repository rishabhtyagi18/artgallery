import React, { useState ,useRef, useEffect } from "react";
import './About.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Toast from '../toast/Toast';

const About = (props) => {

    const navigate = useNavigate();
    const connectSectionRef = useRef(null);
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });

    useEffect(() => {
        if (location.search.includes('scrollToConnect') && connectSectionRef.current) {
        // Scroll to the Connect section if the query parameter is present
        connectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.search]);

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    };

    // const profileSubmit = () => {
    //     if(!formData.name || formData.name.trim() === '') {
    //       setToastConfig({ ...toastConfig, show: true, text: 'Please Enter your Name' });
    //     }
    //     else if (!formData.email || formData.email.trim() === '') {
    //       setToastConfig({ ...toastConfig, show: true, text: 'Please Enter your Email' });
    //     }
    //     else if (!formData.mobile || formData.mobile.trim() === '') {
    //       setToastConfig({ ...toastConfig, show: true, text: 'Please Enter your Mobile' });
    //     }
    //     else if (!formData.message || formData.message.trim() === '') {
    //       setToastConfig({ ...toastConfig, show: true, text: 'Please Enter Message' });
    //     }      
    // }

    const profileSubmit = () => {
        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
    
        if (!formData.name || !nameRegex.test(formData.name.trim())) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Name' });
        } else if (!formData.email || !emailRegex.test(formData.email.trim())) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Email' });
        } else if (!formData.mobile || !phoneRegex.test(formData.mobile.trim())) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Phone Number' });
        } else if (!formData.message || formData.message.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter Message' });
        } else {
            setToastConfig({ ...toastConfig, show: true, text: 'We will get in Touch' });
        }
    };
    
    // console.log("formData",formData);

return (
    <>  
        <div className="about-root">
            <div className="about-section-border">
                <div className="about-section-background about-mob-root">
                    <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598680647596-AYPZGURU29ZHF1L4T1E0/banner.jpg?format=2500w" alt="banner" />
                    <div className="about-story-content about-text-first">
                        <p className="about-story-text">Our Story</p>
                    </div>
                </div>

                <div className="about-section-background about-desk-root">
                    <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598618438842-15KYYL4CRXDV05HZEHT7/banner.jpg?format=2500w" alt="banner" />
                    <div className="about-story-content about-text-first">
                        <p className="about-story-text">Our Story</p>
                    </div>
                </div>
            </div>

            <div className="about-content-wrapper about-desk-html-content-root">
                <div className="about-sqs-layout">
                    <p className="about-sqsrte-large">Established in the year 2007, Moksh set out with the mission to shape undiscovered talent by creating an ecosystem that would enhance visibility, nurture growth, and foster an immersive dialogue between the artist & art lover while making art accessible to everyone.</p>
                    <p className="about-sqsrte-large">Deepak Mehta, prior to founding Moksh, spent three decades operating out of Kala Ghoda and witnessed first-hand its blossoming into Mumbai’s premier art district. His deep appreciation for art was born out of engaging conversations with artists and curators at art shows he frequented during this time. As an amateur buyer he realised that the market primarily catered to the affluent and there was a dearth of credible platforms promoting affordable art by emerging artists. This was the genesis of Moksh!</p>
                    <p className="about-sqsrte-large">Sharing her father’s ethos, Meghna Mehta Chhabria, an avid traveller, with a strong sense for aesthetics, joined Moksh in 2016. She had spent 15 years in the financial services space, most recently as Head of Operations at JPMorgan Asset Management in India. Meghna took over client relations & operations and launched Moksh’s comprehensive digital platform.</p>
                    <p className="about-sqsrte-large">Moksh, over the years, has delivered on its promise and evolved into a platform for a wide audience - from new buyers to seasoned collectors. In addition to young artists Moksh also represents a number of established ones and is constantly striving to add diverse voices to its repertoire.</p>
                </div>
            </div>

            <div className="about-desk-reviews-root">
                <div className="about-content-wrapper about-desk-html-layout-content-root">
                    <div className="sqs-layout">
                        <div className="image-block-outer-wrapper">
                            <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598715454257-851PRH56W0FM0K7CBS4H/photo.jpg?format=1000w" alt="artist" className="sqs-block-image" />
                        </div>
                    </div>
                </div>

                <div className="about-content-wrapper about-desk-html-layout-content-root">
                    <div className="sqs-layout">
                        <div className="image-block-outer-wrapper">
                            <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598710163645-K3C6TKZIF4XAFUTA6ARZ/quote.jpg?format=1000w" alt="artist" className="sqs-block-image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-sqs-block about-desk-html-hr-root">
                <div className="about-sqs-block-content">
                    <hr></hr>
                </div>
            </div>

            <div className="about-connect-wrapper about-desk-html-connect-root" id="block-yui_3_17_2_1_1593510350834_7132" ref={connectSectionRef}>
                <div className="about-connect-sqs-layout">
                    <h2>Connect</h2>
                    <div className="about-item-list">
                        <form autocomplete="on" class="react-form-contents">
                            <div>
                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Name</span><span className="form-item-required">(required)</span></label>
                                    <input 
                                        aria-invalid="false" 
                                        aria-required="true" 
                                        autocomplete="false" 
                                        class="form-item-input" 
                                        placeholder="" 
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Email</span><span className="form-item-required">(required)</span></label>
                                    <input 
                                        aria-invalid="false" 
                                        aria-required="true" 
                                        autocomplete="false" 
                                        class="form-item-input" 
                                        placeholder="" 
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Phone</span></label>
                                    <input 
                                        aria-invalid="false" 
                                        aria-required="true" 
                                        autocomplete="false" 
                                        class="form-item-input" 
                                        placeholder="" 
                                        type="text"
                                        name="mobile"
                                        maxLength={10}
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Message</span><span className="form-item-required">(required)</span></label>
                                    <textarea 
                                        class="form-item-textarea" 
                                        placeholder=""
                                        value={formData.message}
                                        name="message"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="artist-content-network-wrapper">
                <div className="sqs-layout">
                    <button 
                        onClick={() => profileSubmit()} 
                        className="sqs-block-button-element"
                        // tyle={buttonColor ? {opacity : '0.4'} : {opacity:  'unset'}}
                        // disabled={buttonColor}
                    >
                        SUBMIT
                    </button>
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
)}

export default About;

