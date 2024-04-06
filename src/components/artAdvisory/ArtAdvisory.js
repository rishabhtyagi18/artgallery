import React, { useState ,useRef, useEffect } from "react";
import './ArtAdvisory.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Toast from '../toast/Toast';

const ArtAdvisory = (props) => {

    const navigate = useNavigate();
    const connectSectionRef = useRef(null);
    const location = useLocation();
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 2500,
    });

    useEffect(() => {
        if (location.search.includes('scrollToConnect') && connectSectionRef.current) {
            // Scroll to the Connect section if the query parameter is present
            connectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.search]);

return (
    <>  
        <div className="art-advisory-root">
            <div className="art-advisory-section-border">
                <div className="art-advisory-section-background art-advisory-mob-root">
                    <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598680647596-AYPZGURU29ZHF1L4T1E0/banner.jpg?format=2500w" alt="banner" />
                    {/* <div className="art-advisory-story-content art-advisory-text-first">
                        <p className="art-advisory-story-text">Our Story</p>
                    </div> */}
                </div>

                <div className="art-advisory-section-background art-advisory-desk-root">
                    <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598618438842-15KYYL4CRXDV05HZEHT7/banner.jpg?format=2500w" alt="banner" />
                    {/* <div className="art-advisory-story-content art-advisory-text-first">
                        <p className="art-advisory-story-text">Our Story</p>
                    </div> */}
                </div>
            </div>

            <div className="art-advisory-content-wrapper art-advisory-desk-html-content-root">
                <div className="art-advisory-sqs-layout">
                    <p className="art-advisory-sqsrte-large">Established in the year 2007, Moksh set out with the mission to shape undiscovered talent by creating an ecosystem that would enhance visibility, nurture growth, and foster an immersive dialogue between the artist & art lover while making art accessible to everyone.</p>
                    <p className="art-advisory-sqsrte-large">Deepak Mehta, prior to founding Moksh, spent three decades operating out of Kala Ghoda and witnessed first-hand its blossoming into Mumbai’s premier art district. His deep appreciation for art was born out of engaging conversations with artists and curators at art shows he frequented during this time. As an amateur buyer he realised that the market primarily catered to the affluent and there was a dearth of credible platforms promoting affordable art by emerging artists. This was the genesis of Moksh!</p>
                    <p className="art-advisory-sqsrte-large">Sharing her father’s ethos, Meghna Mehta Chhabria, an avid traveller, with a strong sense for aesthetics, joined Moksh in 2016. She had spent 15 years in the financial services space, most recently as Head of Operations at JPMorgan Asset Management in India. Meghna took over client relations & operations and launched Moksh’s comprehensive digital platform.</p>
                    <p className="art-advisory-sqsrte-large">Moksh, over the years, has delivered on its promise and evolved into a platform for a wide audience - from new buyers to seasoned collectors. In addition to young artists Moksh also represents a number of established ones and is constantly striving to add diverse voices to its repertoire.</p>
                </div>
            </div>

            <div className="art-advisory-desk-reviews-root">
                <div className="art-advisory-content-wrapper art-advisory-desk-html-layout-content-root">
                    <div className="sqs-layout">
                        <div className="image-block-outer-wrapper">
                            <img src="https://www.artisera.com/cdn/shop/files/art-lg-2_391x568.png?v=1665752339" alt="artist" className="sqs-block-image" />
                        </div>
                    </div>
                </div>

                <div className="art-advisory-content-wrapper art-advisory-desk-html-layout-content-root">
                    <div className="sqs-layout">
                        <div className="image-block-outer-wrapper">
                            <img src="https://www.artisera.com/cdn/shop/files/art-lg-2_391x568.png?v=1665752339" alt="artist" className="sqs-block-image" />
                        </div>
                    </div>
                </div>

                <div className="art-advisory-content-wrapper art-advisory-desk-html-layout-content-root">
                    <div className="sqs-layout">
                        <div className="image-block-outer-wrapper">
                            <img src="https://www.artisera.com/cdn/shop/files/art-lg-3_570x383.png?v=1665752340" alt="artist" className="sqs-block-image" />
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
)}

export default ArtAdvisory;
