import React, { useState, useEffect } from "react";
import './Store.css';
import StoreBox from './StoreBox';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import GetInTouch from './GetInTouch';
import PurchaseArtwork from './PurchaseArtwork';
import Toast from '../toast/Toast';
import { connectCustomer, getArtworkStoreDetails } from '../../services/api';

const StoreDetail = ({ }) => {
    const navigate = useNavigate();
    const { skuCode } = useParams();
    const location = useLocation();
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

    const url = location.pathname;
    const match = url.match(/stores\/(.*)/);
    const dynamicValue = match ? match[1] : null; // Get the value after "store"


    const [layout, setlayout] = useState(false);
    const [getTouch, setGetTouch] = useState(false);
    const [purchaseArt, setPurchaseArt] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [storeDetails, setStoreDetails] = useState({});
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        pincode: '',
        communicationPreference: '',
        message: ''
    });
    const [getTouchformData, setGetTouchFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        communicationPreference: '',
        natureOfQuery: 'SELECT',
        message: ''
    });
    const [waiting, setWaiting] = useState(false);
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                let sku = dynamicValue.toUpperCase();
                setLoader(true);
                const response = await getArtworkStoreDetails(sku);
                setLoader(false);
                if (response.status === true) {
                    // navigate(`/stores/${skuCode}`);
                    setStoreDetails(response.data);
                } else {
                    setToastConfig({
                        show: true,
                        text: 'Error in fetching store details',
                        showTick: false,
                        time: 1500,
                    });
                    navigate('/error-page');
                }
            } catch (error) {
                setLoader(false);
                console.error('Error fetching store details:', error);
                setToastConfig({
                    show: true,
                    text: 'Error in fetching store details',
                    showTick: false,
                    time: 1500,
                });
                navigate('/error-page');
            }
        };

        fetchData();
    }, [dynamicValue]);
    // const addToCart = (itemId) => {
    //     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    //     const isInCart = existingCart.some(item => item.itemId === itemId);

    //     if (!isInCart) {
    //         const newItem = { itemId, sku: null, additionalFields: "null" };
    //         const newCart = [...existingCart, newItem];

    //         localStorage.setItem('cart', JSON.stringify(newCart));
    //         localStorage.setItem('cartItem', cartQuantity);

    //         // Update the cart quantity
    //         setCartQuantity(newCart.length);
    //     }
    // };

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartQuantity(existingCart.length);
    }, []);

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    };

    const handleNumeric = (e) => {
        const { name, value, type } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value.replace(/\D/g, ""),
          }));
    };

    const handleInputChangeGetTouch = (event) => {
        const { name, value, type } = event.target;
        
        setGetTouchFormData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    };

    const handleNumericGetTouch = (e) => {
        const { name, value, type } = e.target;

        setGetTouchFormData((prevState) => ({
            ...prevState,
            [name]: value.replace(/\D/g, ""),
          }));
    };

    const hidePurchaseArtwork = () => {
        setPurchaseArt(false);
        const z = document.getElementsByTagName('body');
        z[0].style.overflow = 'scroll';
    }

    const hideGetTouch = () => {
        setGetTouch(false);
        const z = document.getElementsByTagName('body');
        z[0].style.overflow = 'scroll';
    }

    const profileSubmit = () => {
        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
    
        if (!formData.name || formData.name.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Name' });
            return;
        } else if (!formData.email || !emailRegex.test(formData.email.trim())) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Email' });
            return;
        } else if (!formData.address) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Address' });
            return;
        } else if (!formData.pincode) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Pincode' });
            return;
        } else if (!formData.communicationPreference || formData.communicationPreference.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please select a Communication Preference' });
            return;
        } else if (formData.communicationPreference === 'phone' && (!formData.mobile || formData.mobile.trim() === '')) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Phone Number' });
            return;
        }

        setWaiting(true);
        const data = {...formData,'type': 'purchase'};
        connectCustomer(data).then((res) => {
            if (res.status) {
                console.log(res.data)
                setWaiting(false);
                setToastConfig({
                    show: true,
                    text: 'We will get in Touch',
                    showTick: false,
                    time: 1500,
                });
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    address: '',
                    pincode: '',
                    communicationPreference: '',
                    message: ''
                });
                hidePurchaseArtwork();
            } else {
                setWaiting(false);
                setToastConfig({
                    show: true,
                    text: 'Issue reported successfully',
                    showTick: false,
                    time: 1500,
                });
            }
        }, (err) => {
            setWaiting(false);
            setToastConfig({
            show: true,
            text: 'Something went wrong',
            showTick: false,
            time: 1500,
            });
        })
    };

    const profileSubmitGetTouch = () => {
        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
    
        if (!getTouchformData.name || getTouchformData.name.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Name' });
            return;
        } else if (!getTouchformData.email || !emailRegex.test(getTouchformData.email.trim())) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Email' });
            return;
        } else if (!getTouchformData.communicationPreference || getTouchformData.communicationPreference.trim() === '') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please select a Communication Preference' });
            return;
        } else if (getTouchformData.communicationPreference === 'phone' && (!getTouchformData.mobile || getTouchformData.mobile.trim() === '')) {
            setToastConfig({ ...toastConfig, show: true, text: 'Please Enter a Valid Phone Number' });
            return;
        } else if (!getTouchformData.natureOfQuery || getTouchformData.natureOfQuery === 'SELECT') {
            setToastConfig({ ...toastConfig, show: true, text: 'Please select a Nature of Query' });
            return;
        }

        setWaiting(true);
        const data = {...getTouchformData,'type': 'get_in_touch'};
        connectCustomer(data).then((res) => {
            if (res.status) {
                console.log(res.data)
                setWaiting(false);
                setToastConfig({
                    show: true,
                    text: 'We will get in Touch',
                    showTick: false,
                    time: 1500,
                });
                setGetTouchFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    address: '',
                    pincode: '',
                    communicationPreference: '',
                    message: ''
                });
                hideGetTouch();
            } else {
                setWaiting(false);
                setToastConfig({
                    show: true,
                    text: 'Issue reported successfully',
                    showTick: false,
                    time: 1500,
                });
            }
        }, (err) => {
            setWaiting(false);
            setToastConfig({
            show: true,
            text: 'Something went wrong',
            showTick: false,
            time: 1500,
            });
        })
    };

return (
    <>  
        {layout &&
            <StoreBox 
                hide={() => {
                    setlayout(false);
                    const z = document.getElementsByTagName('body');
                    z[0].style.overflow = 'scroll';
                }}
                storeDetails={storeDetails}
            />
        }
        {purchaseArt &&
            <PurchaseArtwork
                hide={() => {hidePurchaseArtwork()}}
                profileSubmit={profileSubmit}
                waiting={waiting}
                formData={formData}
                handleInputChange={handleInputChange}
                handleNumeric={handleNumeric}
            />
        }
        {getTouch && 
            <GetInTouch
                hide={() => {hideGetTouch();}}
                profileSubmitGetTouch={profileSubmitGetTouch}
                getTouchformData={getTouchformData}
                handleInputChangeGetTouch={handleInputChangeGetTouch}
                handleNumericGetTouch={handleNumericGetTouch}
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
                                    src={storeDetails?.images?.[0]} 
                                    alt="img" 
                                    className="storeDetail-block-image" 
                                />
                            </div>
                        </div>
                </div>

                <div className="substore-content-wrapper storeDetail-details-roots">
                    <div className="storeDetail-sqs-layout">
                        <h2 className="storeDetail-details-title">{storeDetails?.artist?.name}</h2>
                        <div className="productItem-details-checkout">
                            <div className="productItem-product-price">
                                <div className="storedetail-product-price">₹{storeDetails?.price} (excluding taxes)</div>
                            </div>

                            <div className="productItem-details-excerpt">
                                {storeDetails?.title && <p>Title: {storeDetails?.title}</p>}
                                <p>Dimensions: {storeDetails?.width} in X {storeDetails?.height} in</p>
                                <p>Medium: {storeDetails?.medium}</p>
                                <p>Artwork ID: {storeDetails?.sku} <br /><br /></p>
                                <p />
                                <p>This artwork is accompanied by an Authenticity Certificate.<br /><br /></p>
                                <p />
                                <p>FREE SHIPPING within India.</p>
                                <p>International shipping will be charged at actuals.</p>
                                <p>&nbsp;</p>
                                <p>Returns within 7 days of delivery if the artwork reaches you in damaged condition.</p>
                            </div>

                            <div className="sqs-add-to-cart-button-wrapper">
                                <div 
                                    className="sqs-button-element-primary"
                                    onClick={e => {
                                        e.preventDefault();
                                        setPurchaseArt(true);
                                    }}
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
                                <div className="sqs-add-to-cart-button-innercart">Request Information</div>
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
                            <div onClick={() => navigate(`/stores/${skuCode}`)} className="storeDetail-block-outer-wrapper">
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

export default StoreDetail;