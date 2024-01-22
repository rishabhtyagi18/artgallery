import React, { useState, useEffect } from 'react';
import './GetInTouch.css';
import Toast from '../toast/Toast';

const GetInTouch = props => {

    useEffect(() => {
        // Block background scroll when the pop-up is opened
        document.body.style.overflow = 'hidden';
    
        // Restore background scroll when the pop-up is closed
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        communicationPreference: '',
        natureOfQuery: 'SELECT',
        message: ''
    });
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    };

    const profileSubmit = () => {
        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
    
        if (!formData.name || !nameRegex.test(formData.name.trim())) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Name' });
        } else if (!formData.email || !emailRegex.test(formData.email.trim())) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Email' });
        } else if (!formData.communicationPreference || formData.communicationPreference.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please select a Communication Preference' });
        } else if (!formData.natureOfQuery || formData.natureOfQuery === 'SELECT') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please select a Nature of Query' });
        } else {
            setToastConfig({ ...toastConfig, show: true, text: 'We will get in Touch' });
        }
    };


  return (
    <>
        <div onClick={props.hide} className="touch-overlay dBlock" />
        <div className="modal dBlock">
            <div className="get-touch-container">
                <div className="touch-header-container">
                    <div className="heading">
                        Get In Touch
                    </div>
                    <img src="../../assets/touch-close.png" className="get-touch-close-img" onClick={props.hide} />
                </div>

                <div className="scrollTouch">
                    <div className="get-touch-item-list">
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
                                    <label className="form-item-label"><span className="form-item-name">Communication Preference</span><span className="form-item-required">(required)</span></label>
                                    <div>
                                        <label className="form-item-label-radio">
                                            <input 
                                                class="form-item-input-radio" 
                                                type="radio"
                                                name="communicationPreference"
                                                value="email"
                                                checked={formData.communicationPreference === 'email'}
                                                onChange={handleInputChange}
                                            />
                                            Email
                                        </label>
                                        <label className="form-item-label-radio">
                                            <input 
                                                class="form-item-input-radio" 
                                                type="radio"
                                                name="communicationPreference"
                                                value="phone"
                                                checked={formData.communicationPreference === 'phone'}
                                                onChange={handleInputChange}
                                            />
                                            Phone
                                        </label>
                                    </div>
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Nature of Query</span><span className="form-item-required">(required)</span></label>
                                    <select
                                        name="natureOfQuery"
                                        value={formData.natureOfQuery}
                                        onChange={handleInputChange}
                                        className="form-item-select"
                                    >
                                        <option value="SELECT">Select an option</option>
                                        <option value="Artist Details">Artist Details</option>
                                        <option value="Price of Artwork">Price of Artwork</option>
                                        <option value="Commission Similar Artwork">Commission Similar Artwork</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Message</span></label>
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

                    <div className="get-touch-network-wrapper">
                        <div className="get-touch-sqs-layout">
                            <button 
                                onClick={() => profileSubmit()} 
                                className="get-touch-sqs-block-button-element"
                                // tyle={buttonColor ? {opacity : '0.4'} : {opacity:  'unset'}}
                                // disabled={buttonColor}
                            >
                                SUBMIT
                            </button>
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
  );
};

export default GetInTouch;

