import React, { useState, useEffect } from 'react';
import './Store.css';

const StoreBox = (props) => {

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
        <div onClick={props.hide} className="box-content-overlay" />
        <div className="modaldialog modalheight">
        <div className="popBox">
          <div className="headerBar">
            <div className="closeIns">
              <img src="../../assets/close.png" className="box-content-close" onClick={props.hide} />
              {/* <div onClick={props.hide} className="box-content-close">X</div> */}
            </div>
          </div>
          <div className="scroll">
            <div className="box-loayout-contain">
              <img src={props.storeDetails?.artist?.image} alt="img" className="storeBox-block-image"  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreBox;
