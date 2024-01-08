import React from "react";
import './NotFound.css';

const NotFound = (props) => {

return (
    <>  
        <div className="notFound-root" style={{marginTop: "95px"}}>
            <div className="notFound-html-content-wrapper">
                <div className="notFound-sqs-layout notfound-layout">
                    <p className="notFound-sqsrte-large">We couldn't find the page you were looking for. This is either because:</p>
                    <ul className="notFound-sqsrte-ol">
                        <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
                        <li>The page you are looking for has been moved or deleted.</li>
                    </ul>
                    <p className="notFound-sqsrte-large notfound-sqsrte-p">
                        You can return to our homepage by <a className="notFound-sqs-a" href="/">clicking here</a>, or you can try searching for the
                        content you are seeking by <a className="notFound-sqs-a" href="/search">clicking here</a>.
                    </p>
                </div>
            </div>
        </div>
    </>
)}

export default NotFound;