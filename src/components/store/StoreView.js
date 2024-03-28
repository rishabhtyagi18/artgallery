import React from "react";
import './Store.css';
import { useParams, useNavigate } from 'react-router-dom';

const StoreView = ({ }) => {
    const navigate = useNavigate();

    const arr = [{
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1691412075537-JGHQKMILIRPBFPVUV370/IMG_6731.jpg?format=1000w",
        text: "Madeeha Attari | 36 in X 48 in",
        subText: "₹120,000.00"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1691410799239-JP3ZGQG08R63YSFBWZ6Q/IMG_8440.jpg?format=1000w",
        text: "Falguni Mehta | 48 in X 48 in",
        subText: "₹140,000.00",
        availability: "sold"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1679900387508-D5MYIB7P3RM3PTXRC14P/SD4.JPG?format=1000w",
        text: "Shashikant Dhotre | 30 in X 40 in",
        subText: "₹0.00",
        subText1: "Enquire Price"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1653027989582-3QWSOTILZS0DCGFL6YU3/SSD5.jpg?format=1000w",
        text: "Siddharth Shingade | 30 in X 30 in",
        subText: "₹156,000.00"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1652779483564-QV0OOA5AV9WXEJRUCGF9/YP45.jpg?format=1000w",
        text: "Yuvraj Patil | 36 in X 24 in",
        subText: "₹90,000.00"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1652779065711-O6ANR6OJY4QVDN47NMLI/YP44.jpg?format=750w",
        text: "Yuvraj Patil | 24 in X 36 in",
        subText: "₹90,000.00"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1652768553365-38SNPECOX8M3NXPBC85K/SKD44.JPG?format=1000w",
        text: "Shashikant Dhotre | 40 in X 60 in",
        subText: "",
        availability: "sold"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1652768354832-O6N9DVQJ7KXKXGX6M5EJ/SKD40.JPG?format=1000w",
        text: "Shashikant Dhotre | 40 in X 60 in",
        subText: "₹0.00",
        subText1: "Enquire Price"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1652768165282-FBUZIBUO2DIPVY2DSC5P/SKD43.JPG?format=1000w",
        text: "Shashikant Dhotre | 40 in X 60 in",
        subText: ""
    }];

    const { subStoreName } = useParams();

return (
    <>  
        <div className="store-root" style={{marginTop: "95px"}}>

            <nav className="nested-category-breadcrumb">
                <div onClick={() => navigate('/store')} className="substore-nested-category-breadcrumb-link">All /</div>
                {/* <span className="nested-breadcrumb-span">/</span> */}
            </nav>

            <div className="substore-content-wrapper storeview-desk-breadcum-container">
                <div className="store-sqs-layout">
                    <h2>{subStoreName.replace('-', ' ')}</h2>
                </div>
            </div>
            
            <div className="store-desk-main-root">
                {arr.map((item, index) => (
                    <div className="store-content-wrapper" key={index}>
                        <div className="sqs-layout">
                            <div onClick={() => navigate('/store/p/fgm8-ftmm5-mtrr2-w7x56')} className="store-block-outer-wrapper">
                                <img src={item.img} alt={item.text} className="store-block-image" />
                                {item.availability && <div>
                                    <div className="store-layout-stock">{item.availability}</div>
                                </div>}
                            </div>
                            <div className="store-image-caption">
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

export default StoreView;