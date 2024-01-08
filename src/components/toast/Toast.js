import React, { useState, useEffect } from "react";
import "./Toast.css";

const Toast = props => {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setTimeout(
      () => {
        setDisplay(false);
        props.hideHandler({ ...props, show: false });
      },
      props.time ? props.time : 1500
    );
  },[]);
  return (
    <>
      {display ? (
        <div className="container-toast" style={props.style ? { padding: 0, zIndex: '50' } : {}}>
          <div style={props.style || {}}>
            {props.tickIcon && (
              <img
                className="token-img"
                src="https://cdn.zeplin.io/5da0780780829f083448125a/assets/75A364CC-458A-4C5A-91E2-53AFB1CD4ACD.svg"
                alt="img"
              />
            )}
            {props.text}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Toast;
