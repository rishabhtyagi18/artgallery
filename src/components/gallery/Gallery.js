import React, { useState } from "react";
import './Gallery.css';
import GalleryFilters from './GalleryFilters';
import { useNavigate } from 'react-router-dom';
import DeskFilters from './DeskFilters';

const Gallery = (props) => {
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
        subText1: "Enquire Price",
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
        subText: "",
        subText1: "Enquire Price"
    }]

    const [filters, setFilters] = useState(false);

    const [firstHalfContent, secondHalfContent, thirdHalfContent] = [
        arr.slice(0, Math.ceil(arr.length / 3)),
        arr.slice(Math.ceil(arr.length / 3), Math.ceil((2 * arr.length) / 3)),
        arr.slice(Math.ceil((2 * arr.length) / 3)),
    ];

return (
    <>  
        {filters &&
            <GalleryFilters 
                hide={() => {
                    setFilters(false);
                    const z = document.getElementsByTagName('body');
                    z[0].style.overflow = 'scroll';
                }}
            />
        }
        <div className="gallery-root" style={{marginTop: "95px"}}>
            <div className="custom-items-container gallery-mob-container">
                <div className="custom-items-root" onClick={() => setFilters(true)}>
                    <div className="custom-items-search">
                        <div className="gallery-filter-content">FILTER | SEARCH</div>
                    </div>
                </div>
            </div>

            <DeskFilters />
            
            <div className="gallery-mob-container">
                {arr.map((item, index) => (
                    <div className="gallery-content-wrapper" key={index}>
                        <div className="sqs-layout">
                            <div onClick={() => navigate('/store/p/fgm8-ftmm5-mtrr2-w7x56')} className="gallery-block-outer-wrapper">
                                <img src={item.img} alt={item.text} className="gallery-block-image" />
                                {item.availability && 
                                    <div>
                                        <div className="gallery-layout-stock">{item.availability}</div>
                                    </div>
                                }
                            </div>
                            <div className="gallery-image-caption">
                                <div onClick={() => navigate('/store/p/skd23-22phx')}>{item.text}</div>
                                {item.subText && <div className="product-price">{item.subText}</div>}
                                {item.subText1 && <div className="summary-price">{item.subText1}</div>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="gallery-desk-root-container">
                <div className="first-half">
                {firstHalfContent.map((item, index) => (
                    <div className="gallery-content-wrapper" key={index}>
                        <div className="sqs-layout">
                            <div onClick={() => navigate('/store/p/fgm8-ftmm5-mtrr2-w7x56')} className="gallery-block-outer-wrapper">
                                <img src={item.img} alt={item.text} className="gallery-block-image" />
                                {item.availability && 
                                    <div>
                                        <div className="gallery-layout-stock">{item.availability}</div>
                                    </div>
                                }
                            </div>
                            <div className="gallery-image-caption">
                                <div onClick={() => navigate('/store/p/skd23-22phx')}>{item.text}</div>
                                {item.subText && <div className="product-price">{item.subText}</div>}
                                {item.subText1 && <div className="summary-price">{item.subText1}</div>}
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                    <div className="second-half">
                    {secondHalfContent.map((item, index) => (
                    <div className="gallery-content-wrapper" key={index}>
                        <div className="sqs-layout">
                            <div onClick={() => navigate('/store/p/fgm8-ftmm5-mtrr2-w7x56')} className="gallery-block-outer-wrapper">
                                <img src={item.img} alt={item.text} className="gallery-block-image" />
                                {item.availability && 
                                    <div>
                                        <div className="gallery-layout-stock">{item.availability}</div>
                                    </div>
                                }
                            </div>
                            <div className="gallery-image-caption">
                                <div onClick={() => navigate('/store/p/skd23-22phx')}>{item.text}</div>
                                {item.subText && <div className="product-price">{item.subText}</div>}
                                {item.subText1 && <div className="summary-price">{item.subText1}</div>}
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                <div className="third-half">
                    {thirdHalfContent.map((item, index) => (
                    <div className="gallery-content-wrapper" key={index}>
                        <div className="sqs-layout">
                            <div onClick={() => navigate('/store/p/fgm8-ftmm5-mtrr2-w7x56')} className="gallery-block-outer-wrapper">
                                <img src={item.img} alt={item.text} className="gallery-block-image" />
                                {item.availability && 
                                    <div>
                                        <div className="gallery-layout-stock">{item.availability}</div>
                                    </div>
                                }
                            </div>
                            <div className="gallery-image-caption">
                                <div onClick={() => navigate('/store/p/skd23-22phx')}>{item.text}</div>
                                {item.subText && <div className="product-price">{item.subText}</div>}
                                {item.subText1 && <div className="summary-price">{item.subText1}</div>}
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </>
)}

export default Gallery;
