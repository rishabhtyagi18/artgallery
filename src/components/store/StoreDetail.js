import React, { useState, useEffect } from "react";
import './Store.css';
import StoreBox from './StoreBox';
import { useParams, useNavigate } from 'react-router-dom';
import GetInTouch from './GetInTouch';

const StoreDetail = ({ storeName }) => {
    const navigate = useNavigate();
    const arr = [{
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598966637529-JLKNDNF4JC8B2K9JGV5C/sum10.jpg?format=2500w",
        text: "Sunayana Malhotra | 60 in X 96 in",
        subText: "₹0.00",
        subText1: "Enquire Price"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598966701510-245PXDM6TV8SFLO7G9E1/fgm8.jpg?format=1000w",
        text: "Falguni Mehta | 48 in X 48 in",
        subText: "₹40,000.00",
        availability: "sold"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598966706981-321XLHPUW2FQO3KN55VP/dwd15.jpg?format=2500w",
        text: "Shashikant Dhotre | 30 in X 40 in",
        subText: "₹60000.00"
    }];

    const { subStoreName } = useParams();

    const [layout, setlayout] = useState(false);
    const [getTouch, setGetTouch] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(0);

    const addToCart = (itemId) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const isInCart = existingCart.some(item => item.itemId === itemId);

        if (!isInCart) {
            const newItem = { itemId, sku: null, additionalFields: "null" };
            const newCart = [...existingCart, newItem];

            localStorage.setItem('cart', JSON.stringify(newCart));
            localStorage.setItem('cartItem', cartQuantity);

            // Update the cart quantity
            setCartQuantity(newCart.length);
        }
    };

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartQuantity(existingCart.length);
    }, []);

return (
    <>  
        {layout &&
            <StoreBox 
                hide={() => {
                    setlayout(false);
                    const z = document.getElementsByTagName('body');
                    z[0].style.overflow = 'scroll';
                }}
            />
        }
        {getTouch && 
            <GetInTouch
                hide={() => {
                    setGetTouch(false);
                    const z = document.getElementsByTagName('body');
                    z[0].style.overflow = 'scroll';
                }}
            />
        }
        <div className="storeDetail-root" style={{marginTop: "95px"}}>
            <div className="storeDetail-desk-main-container">
                <div className="storeDetail-content-wrapper">
                        <div className="sqs-layout">
                            <div className="storeDetail-block-outer-wrapper">
                                <img 
                                    onClick={e => {
                                        e.preventDefault();
                                        setlayout(true);
                                    }} 
                                    src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1691412075537-JGHQKMILIRPBFPVUV370/IMG_6731.jpg?format=1000w" 
                                    alt="img" 
                                    className="storeDetail-block-image" 
                                />
                            </div>
                        </div>
                </div>

                <div className="substore-content-wrapper storeDetail-details-roots">
                    <div className="storeDetail-sqs-layout">
                        <h2 className="storeDetail-details-title">Madeeha Attari</h2>
                        <div className="productItem-details-checkout">
                            <div className="productItem-product-price">
                                <div className="storedetail-product-price">₹120,000.00 (excluding taxes)</div>
                            </div>

                            <div className="productItem-details-excerpt">
                                <p>Title: Weeping Words Series 1</p>
                                <p>Dimensions: 36 in X 48 in</p>
                                <p>Medium: Acrylic Ink on Canvas</p>
                                <p>Artwork ID: MAH1 <br /><br /></p>
                                <p />
                                <p>FREE SHIPPING within India.</p>
                                <p>International shipping will be charged at actuals.</p>
                                <p>&nbsp;</p>
                                <p>Returns within 7 days of delivery if the artwork reaches you in damaged condition.</p>
                            </div>

                            <div className="sqs-add-to-cart-button-wrapper">
                                <div 
                                    className="sqs-button-element-primary"
                                    // onClick={() => {
                                    //     addToCart("5f4e4b2e71aa8a405c419cce");
                                    // }}
                                >
                                    <div className="sqs-add-to-cart-button-innercart">Purchase Artwork</div>
                                </div>
                            </div>

                            <div 
                                className="sqs-button-element-primary"
                                onClick={e => {
                                    e.preventDefault();
                                    setGetTouch(true);
                                }} 
                            >
                                <div className="sqs-add-to-cart-button-innercart">Get in Touch</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="substore-content-wrapper">
                <div className="storeDetail-sqs-layout">
                    <h2>You May Also Like</h2>
                </div>
            </div>
            
            <div className="storeDetail-artwork-desk-root">
                {arr.map((item, index) => (
                    <div className="storeDetail-content-wrapper artwork-root-container" key={index}>
                        <div className="sqs-layout">
                            <div onClick={() => navigate('/store/p/fgm8-ftmm5-mtrr2-w7x56')} className="storeDetail-block-outer-wrapper">
                                <img src={item.img} alt={item.text} className="storeDetail-block-image" />
                                {item.availability && <div>
                                    <div className="storeDetail-layout-stock">{item.availability}</div>
                                </div>}
                            </div>
                            <div className="storeDetail-image-caption">
                                <div onClick={() => navigate('/store/p/skd23-22phx')}>{item.text}</div>
                                {item.subText && <div className="product-price">{item.subText}</div>}
                                {item.subText1 && <div className="summary-price">{item.subText1}</div>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
)}

export default StoreDetail;