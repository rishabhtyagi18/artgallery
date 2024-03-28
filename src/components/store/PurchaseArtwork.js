import React, { useState, useEffect } from 'react';
import './GetInTouch.css';
import { PulseLoader } from 'react-spinners';

const PurchaseArtwork = ({ profileSubmit, waiting, formData, handleInputChange, handleNumeric, hide }) => {

    useEffect(() => {
        // Block background scroll when the pop-up is opened
        document.body.style.overflow = 'hidden';
    
        // Restore background scroll when the pop-up is closed
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, []);

    

  return (
    <>
        <div onClick={hide} className="touch-overlay dBlock" />
        <div className="modal dBlock">
            <div className="get-touch-container">
                <div className="touch-header-container">
                    <div className="heading">
                        <h5 className="artwork-getTouch_heading">Thank you for your interest in this artwork.</h5>
                        <p className="artwork-getTouch_subHeading">Please share your details and we will get back to you with the availability and payment link.</p>
                    </div>
                    <img src="../../assets/touch-close.png" className="get-touch-close-img" onClick={hide} />
                </div>

                <div className="scrollTouch-purchase">
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
                                        placeholder="Please Enter a Name" 
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
                                        placeholder="Please Enter a Email" 
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
                                        placeholder="Please Enter a Phone" 
                                        type="text"
                                        name="mobile"
                                        // maxLength={15}
                                        value={formData.mobile}
                                        onChange={handleNumeric}
                                    />
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Address</span><span className="form-item-required">(required)</span></label>
                                    <input 
                                        aria-invalid="false" 
                                        aria-required="true" 
                                        autocomplete="false" 
                                        class="form-item-input" 
                                        placeholder="Please Enter a Address" 
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Pincode</span><span className="form-item-required">(required)</span></label>
                                    <input 
                                        aria-invalid="false" 
                                        aria-required="true" 
                                        autocomplete="false" 
                                        class="form-item-input" 
                                        placeholder="Please Enter a Pincode" 
                                        type="text"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleNumeric}
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
                                        <label className="form-item-label-radio">
                                            <input 
                                                class="form-item-input-radio" 
                                                type="radio"
                                                name="communicationPreference"
                                                value="whatsapp"
                                                checked={formData.communicationPreference === 'whatsapp'}
                                                onChange={handleInputChange}
                                            />
                                            WhatsApp
                                        </label>
                                    </div>
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Message</span></label>
                                    <textarea 
                                        class="form-item-textarea" 
                                        placeholder="Please Enter a Message"
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
                            >
                                {waiting ? <PulseLoader color="#FFF" size={10} /> : 'SUBMIT'} 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default PurchaseArtwork;

