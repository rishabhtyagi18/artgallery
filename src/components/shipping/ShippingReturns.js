import React from "react";
import './ShippingReturns.css';

const ShippingReturns = (props) => {

return (
    <>  
        <div className="shippingReturns-root" style={{marginTop: "95px"}}>

            <div className="shippingReturns-content-wrapper">
                <div className="shippingReturns-sqs-layout">
                    <h2>Shipping & Returns</h2>
                </div>
            </div>

            <div className="shippingReturns-html-content-wrapper">
                <div className="shippingReturns-sqs-layout">
                    <p className="shippingReturns-sqsrte-large"><strong>Packaging and Care</strong></p>
                    <p className="shippingReturns-sqsrte-large">We take utmost care of your purchased artwork. Before shipping, we roll the paintings in a protective cylinder and in a few cases where the paintings cannot be rolled, the stretched artwork is securely packed in appropriate boxes.  </p>
                    <p className="shippingReturns-sqsrte-large"><strong>Delivery and Shipping</strong> </p>
                    <p className="shippingReturns-sqsrte-large"><strong>Within India</strong>: Moksh offers FREE SHIPPING and orders are typically dispatched within 7 business days of receiving the full payment and necessary documentation related to transportation, tax, etc. as may be reasonably requested for/by Moksh Art Gallery. The order should reach you within 10-12 business days.  </p>
                    <p className="shippingReturns-sqsrte-large"><strong>Overseas</strong>: For international shipping, charges are applicable at cost. These charges vary as per the delivery location and bulk weight. Orders are typically dispatched within 7 business days of receiving the full payment and necessary documentation related to transportation, tax, etc. as may be reasonably requested for/by Moksh Art Gallery. The order should reach you within 15-17 business days.  </p>
                    <p className="shippingReturns-sqsrte-large"><strong>Return Policy</strong>.</p>
                    <p className="shippingReturns-sqsrte-large shippingReturns-sqsrte-li">Art is unique, delicate, and exclusive. It often takes days, sometimes months to complete a single work of art. Due to its fragile and singular nature we are unable to allow returns. Hence, we urge you to be certain of your decision before purchasing.<br />In the unlikely event where an item is delivered in damaged condition or an incorrect item has been shipped, we request you to retain all the packaging materials including the invoice and notify us immediately by calling us on <a className="shippingReturns-sqs-a" href="tel:+919819052003">+91 98190 52003</a> or writing to us at <a className="shippingReturns-sqs-a" href="mailto:help@mokshartgallery.com">help@mokshartgallery.com</a>.</p>
                </div>
            </div>
        </div>
    </>
)}

export default ShippingReturns;