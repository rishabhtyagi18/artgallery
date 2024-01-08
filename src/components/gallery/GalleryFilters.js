import React, { useState, useEffect } from "react";
import Artists from "../artists/Artists";
import './GalleryFilters.css';

const GalleryFilters = ({ hide }) => {

    const [expand, setExpand] = useState(null);

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
       <div
        onClick={hide}
        className="filters-overlay"
      />
      <div className={`filters-box ${expand ? 'filters-boxAppear' : ''}`}>
        <div className="mainContent">
            <div className="filter-sqs-block-content">
                <div className="filter-archive-block-wrapper">
                    <label className="archive-dropdown-toggle-label">
                        <span onClick={(e) => { e.stopPropagation(); expandDiv('price'); }} className="archive-dropdown-toggle-title">
                            <span className="defaultLabel">Price</span>
                            <img src="../../assets/upArrow.png" alt="arrow" className={`icn-down-open ${expand === 'price' ? 'icn-down-down' : ''}`} />
                        </span>

                        <ul className={`archive-group-list ${expand === 'price' ? 'expanded' : 'collapsed'}`}>
                            <li>
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id="allNetwork"
                                        name="allNetwork"
                                        checked={filterState.price !== null ? filterState.price : undefined}
                                        onChange={() => handleCheckboxChange('price')}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>All Network</span>
                                </a>
                            </li>

                            <li>
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id="below50000"
                                        name="below50000"
                                        checked={filterState.price === null ? undefined : !filterState.price}
                                        onChange={() => handleCheckboxChange('price')}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>Below ₹50000</span>
                                </a>
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
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id={``}
                                        name={``}
                                        // checked={!!(item.checked)}
                                        // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>All Network</span>
                                </a>
                            </li>

                            <li>
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id={``}
                                        name={``}
                                        // checked={!!(item.checked)}
                                        // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>Below ₹50000</span>
                                </a>
                            </li>
                        </ul>
                    </label>
                </div>
            </div>

            <div className="filter-sqs-block-content">
                <div className="filter-archive-block-wrapper">
                    <label className="archive-dropdown-toggle-label">
                        <span className="archive-dropdown-toggle-title">
                            <span className="defaultLabel">Size</span>
                            <img src="../../assets/upArrow.png" alt="arrow" onClick={(e) => { e.stopPropagation(); expandDiv('size') }} className={`icn-down-open ${expand === 'size' ? 'up' : ''}`} />
                        </span>

                        <ul className={`archive-group-list ${expand === 'size' ? 'expanded' : 'collapsed'}`}>
                            <li>
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id={``}
                                        name={``}
                                        // checked={!!(item.checked)}
                                        // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>All Network</span>
                                </a>
                            </li>

                            <li>
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id={``}
                                        name={``}
                                        // checked={!!(item.checked)}
                                        // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>Below ₹50000</span>
                                </a>
                            </li>
                        </ul>
                    </label>
                </div>
            </div>

            <div className="filter-sqs-block-content">
                <div className="filter-archive-block-wrapper">
                    <label className="archive-dropdown-toggle-label">
                        <span className="archive-dropdown-toggle-title">
                            <span className="defaultLabel">Genre</span>
                            <img src="../../assets/upArrow.png" alt="arrow" onClick={(e) => { e.stopPropagation(); expandDiv('genre') }} className={`icn-down-open ${expand === 'genre' ? 'up' : ''}`} />
                        </span>

                        <ul className={`archive-group-list ${expand === 'genre' ? 'expanded' : 'collapsed'}`}>
                            <li>
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id={``}
                                        name={``}
                                        // checked={!!(item.checked)}
                                        // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>All Network</span>
                                </a>
                            </li>

                            <li>
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id={``}
                                        name={``}
                                        // checked={!!(item.checked)}
                                        // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>Below ₹50000</span>
                                </a>
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
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id={``}
                                        name={``}
                                        // checked={!!(item.checked)}
                                        // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>All Network</span>
                                </a>
                            </li>

                            <li>
                                <a className="active-filter-link">
                                    <input
                                        type="checkbox"
                                        id={``}
                                        name={``}
                                        // checked={!!(item.checked)}
                                        // checked={ props.selectedBoost && props.selectedBoost.find((bv)=> bv.id === item.id)}
                                        className="customize-filter-checkbox"
                                    />
                                    <span>Below ₹50000</span>
                                </a>
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

            <button onClick={hide} className="mobile-panel-close"></button>
        </div>
      </div>
    </>
)}

export default GalleryFilters;
