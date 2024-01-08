import React, { useState, useEffect } from "react";
import './Cart.css';

const Cart = (props) => {

    const [cartEmpty, setCartEmpty] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        // Fetch cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Update state based on whether the cart is empty or not
        setCartEmpty(cartItems.length === 0);

        // Calculate total amount if the cart is not empty
        if (!cartEmpty) {
            const totalPrice = cartItems.reduce((total, item) => {
                // Assuming each item has a price property
                // Update this logic based on your actual data structure
                return total + item.price;
            }, 0);

            setTotalAmount(totalPrice);
        }
    }, []);

    const handleRemoveItem = () => {
        // Remove items from localStorage
        localStorage.removeItem('cart');

        // Update state to reflect an empty cart
        setCartEmpty(true);
        setTotalAmount(0);
    };

return (
    <>  
        <div className="cart-root" style={{marginTop: "95px"}}>

            <div className="cart-content-wrapper">
                <div className="cart-sqs-layout">
                    <h2>Shopping Cart</h2>
                </div>
            </div>

            {cartEmpty ?
                <div className="cart-no-item-container">
                    <div className="carts-html-content-wrapper">
                        <div className="cart-sqs-layout">
                            <p className="carts-sqsrte-large">You have nothing in your shopping cart.</p>
                        </div>
                    </div>

                    <div className="carts-html-content-wrapper">
                        <div className="carts-sqs-layout cart-layout">
                            <a href="gallery" className="cart-continue-button">Continue Shopping</a>
                        </div>
                    </div>
                </div>
                :
                <>
                    <div className="cart-html-content-wrapper">
                        <div className="cart-section-divider">
                            <div className="cart-table-row">
                                <div className="cart-table-row-flex">
                                    <div className="cart-row-img-wrapper">
                                        <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598966575650-N39YZQ6G7ACPN8PM1H8P/sai4.jpg" alt="" />
                                    </div>

                                    <div className="cart-row-desc">
                                        <a href="/store/p/sai4" className="cart-row-variants">Anand Sai | 36 in X 48 in</a>
                                    </div>
                                </div>

                                <img onClick={handleRemoveItem} src="../../assets/close.png" alt="close" className="remove-item" />
                            </div>

                            <div className="cart-quantity-root-price">
                                <div className="cart-quantity-subroot">
                                    <div
                                        // onClick={(e) => {
                                        // e.stopPropagation();
                                        // if (decrementHandler && !loading) {
                                        //     decrementHandler();
                                        // }
                                        // }}
                                        className="itemsAlign"
                                    >
                                        {/* {minusComponent} */}
                                        <div className="minusText">-</div>
                                    </div>

                                    <div className="count">
                                        <span className="countText">1</span>
                                    </div>
                                    <div
                                        // onClick={(e) => {
                                        // e.stopPropagation();
                                        // if (incrementHandler && !loading) {
                                        //     incrementHandler();
                                        // }
                                        // }}
                                        className="itemsAlign"
                                    >
                                        {/* {plusComponent} */}
                                        <div className="minusText">+</div>
                                    </div>
                                </div>

                                <div>
                                    <p className="cart-subtotal-price">₹110,000.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-footer-checkout-root">
                        <div className="cart-subtotal-roots">
                            <p className="cart-subtotal-price">Subtotal</p>
                            <p className="cart-subtotal-price">₹110,000.00</p>
                        </div>

                        <button className="cart-footer-checkout-btn">Checkout</button>
                    </div>
                </>
            }
        </div>
    </>
)}

export default Cart;
