import React, { useState } from "react";
import './Gallery.css';
import GalleryFilters from './GalleryFilters';
import { useNavigate } from 'react-router-dom';

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
    }]

    const [filters, setFilters] = useState(false);
    const [expand, setExpand] = useState(false);

    const [filterState, setFilterState] = useState({
        price: false,
        artist: false,
        size: false,
        genre: false,
        medium: false,
    });

    const expandDiv = (filterType) => {
        setExpand((prevFilter) => (prevFilter === filterType ? null : filterType));
    };

    const handleCheckboxChange = (filterType) => {
        setFilterState(prevState => ({
            ...prevState,
            [filterType]: !prevState[filterType],
        }));
    };

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

            <div className="custom-items-container custom-filters-desk-gallery">
                <div className="custom-items-search">
                    <div className="filter-sqs-block-content" style={{width: "70%"}}>
                        <div className="filter-archive-block-wrapper">
                            <label className="archive-dropdown-toggle-label">
                                <span onClick={(e) => { e.stopPropagation(); expandDiv('price'); }} className="archive-dropdown-toggle-title">
                                    <span className="defaultLabel">Price</span>
                                    <img src="../../assets/upArrow.png" alt="arrow" className={`icn-down-open ${expand === 'price' ? 'icn-down-down' : ''}`} />
                                </span>

                                <ul className={`archive-group-list ${expand === 'price' ? 'expanded' : 'collapsed'}`}>
                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id="allNetwork"
                                                name="allNetwork"
                                                checked={filterState.price !== null ? filterState.price : undefined}
                                                onChange={() => handleCheckboxChange('price')}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">All Network</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id="below50000"
                                                name="below50000"
                                                checked={filterState.price === null ? undefined : !filterState.price}
                                                onChange={() => handleCheckboxChange('price')}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">Below ₹50000</span>
                                        </div>
                                    </li>
                                </ul>
                            </label>
                        </div>
                    </div>

                    <div className="filter-sqs-block-content">
                        <div className="filter-archive-block-wrapper">
                            <label className="archive-dropdown-toggle-label">
                                <span className="archive-dropdown-toggle-title">
                                    <span className="defaultLabel">Artist</span>
                                    <img src="../../assets/upArrow.png" alt="arrow" onClick={(e) => { e.stopPropagation(); expandDiv('artist') }} className={`icn-down-open ${expand === 'artist' ? 'up' : ''}`} />
                                </span>

                                <ul className={`archive-group-list ${expand === 'artist' ? 'expanded' : 'collapsed'}`}>
                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={``}
                                                name={``}
                                                // checked={!!(item.checked)}
                                                // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">All Network</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={``}
                                                name={``}
                                                // checked={!!(item.checked)}
                                                // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">Below ₹50000</span>
                                        </div>
                                    </li>
                                </ul>
                            </label>
                        </div>
                    </div>

                    <div className="filter-sqs-block-content" style={{width: "50%"}}>
                        <div className="filter-archive-block-wrapper">
                            <label className="archive-dropdown-toggle-label">
                                <span className="archive-dropdown-toggle-title">
                                    <span className="defaultLabel">Size</span>
                                    <img src="../../assets/upArrow.png" alt="arrow" onClick={(e) => { e.stopPropagation(); expandDiv('size') }} className={`icn-down-open ${expand === 'size' ? 'up' : ''}`} />
                                </span>

                                <ul className={`archive-group-list ${expand === 'size' ? 'expanded' : 'collapsed'}`}>
                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={`1`}
                                                name={`large`}
                                                // checked={!!(item.checked)}
                                                // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">Large</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={`2`}
                                                name={`medium`}
                                                // checked={!!(item.checked)}
                                                // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">Medium</span>
                                        </div>
                                    </li>
                                </ul>
                            </label>
                        </div>
                    </div>

                    <div className="filter-sqs-block-content" style={{width: "70%"}}>
                        <div className="filter-archive-block-wrapper">
                            <label className="archive-dropdown-toggle-label">
                                <span className="archive-dropdown-toggle-title">
                                    <span className="defaultLabel">Genre</span>
                                    <img src="../../assets/upArrow.png" alt="arrow" onClick={(e) => { e.stopPropagation(); expandDiv('genre') }} className={`icn-down-open ${expand === 'genre' ? 'up' : ''}`} />
                                </span>

                                <ul className={`archive-group-list ${expand === 'genre' ? 'expanded' : 'collapsed'}`}>
                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={``}
                                                name={``}
                                                // checked={!!(item.checked)}
                                                // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">All Network</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={``}
                                                name={``}
                                                // checked={!!(item.checked)}
                                                // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">Below ₹50000</span>
                                        </div>
                                    </li>
                                </ul>
                            </label>
                        </div>
                    </div>

                    <div className="filter-sqs-block-content">
                        <div className="filter-archive-block-wrapper">
                            <label className="archive-dropdown-toggle-label">
                                <span className="archive-dropdown-toggle-title">
                                    <span className="defaultLabel">Medium</span>
                                    <img src="../../assets/upArrow.png" alt="arrow" onClick={(e) => { e.stopPropagation(); expandDiv('medium') }} className={`icn-down-open ${expand === 'medium' ? 'up' : ''}`} />
                                </span>

                                <ul className={`archive-group-list ${expand === 'medium' ? 'expanded' : 'collapsed'}`}>
                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={``}
                                                name={``}
                                                // checked={!!(item.checked)}
                                                // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">All Network</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={``}
                                                name={``}
                                                // checked={!!(item.checked)}
                                                // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span className="filters-span-text">Below ₹50000</span>
                                        </div>
                                    </li>
                                </ul>
                            </label>
                        </div>
                    </div>

                    <div className="filter-sqs-block-content">
                        <div className="filter-archive-block-wrapper">
                            <div className="archive-dropdown-toggle-label">
                                <div className="filter-custom-items-search">
                                    <img
                                        src="../../assets/search.png"
                                        alt="search"
                                        className="custom-items-icon"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="custom-items-input"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
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
