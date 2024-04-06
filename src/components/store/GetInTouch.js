import React, { useState, useEffect } from 'react';
import './GetInTouch.css';

const GetInTouch = ({ profileSubmitGetTouch, getTouchformData, handleInputChangeGetTouch, handleNumericGetTouch, hide }) => {

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
                    <div className="heading">Request Information</div>
                    <img src="../../assets/touch-close.png" className="get-touch-close-img" onClick={hide} />
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
                                        value={getTouchformData.name}
                                        onChange={handleInputChangeGetTouch}
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
                                        value={getTouchformData.email}
                                        onChange={handleInputChangeGetTouch}
                                    />
                                </div>

                                <div className="form-item-field">
                                    {getTouchformData.communicationPreference === 'phone' ?
                                        <label className="form-item-label"><span className="form-item-name">Phone</span><span className="form-item-required">(required)</span></label> :
                                        <label className="form-item-label"><span className="form-item-name">Phone</span></label>
                                    }
                                    <input 
                                        aria-invalid="false" 
                                        aria-required="true" 
                                        autocomplete="false" 
                                        class="form-item-input" 
                                        placeholder="" 
                                        type="text"
                                        name="mobile"
                                        // maxLength={10}
                                        value={getTouchformData.mobile}
                                        onChange={handleNumericGetTouch}
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
                                                checked={getTouchformData.communicationPreference === 'email'}
                                                onChange={handleInputChangeGetTouch}
                                            />
                                            Email
                                        </label>
                                        <label className="form-item-label-radio">
                                            <input 
                                                class="form-item-input-radio" 
                                                type="radio"
                                                name="communicationPreference"
                                                value="phone"
                                                checked={getTouchformData.communicationPreference === 'phone'}
                                                onChange={handleInputChangeGetTouch}
                                            />
                                            Phone
                                        </label>
                                        <label className="form-item-label-radio">
                                            <input 
                                                class="form-item-input-radio" 
                                                type="radio"
                                                name="communicationPreference"
                                                value="whatsapp"
                                                checked={getTouchformData.communicationPreference === 'whatsapp'}
                                                onChange={handleInputChangeGetTouch}
                                            />
                                            WhatsApp
                                        </label>
                                    </div>
                                </div>

                                <div className="form-item-field">
                                    <label className="form-item-label"><span className="form-item-name">Nature of Query</span><span className="form-item-required">(required)</span></label>
                                    <select
                                        name="natureOfQuery"
                                        value={getTouchformData.natureOfQuery}
                                        onChange={handleInputChangeGetTouch}
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
                                        value={getTouchformData.message}
                                        name="message"
                                        onChange={handleInputChangeGetTouch}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="get-touch-network-wrapper">
                        <div className="get-touch-sqs-layout">
                            <button 
                                onClick={() => profileSubmitGetTouch()} 
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
    </>
  );
};

export default GetInTouch;

