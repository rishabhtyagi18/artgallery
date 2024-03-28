import React, { useState, useEffect } from "react";
import './GalleryFilters.css';

const GalleryFilters = ({ arrFilters, handleFilterClose, clearAllFilters, handleIndividualCheckboxChange, selectedFilter, expand, expandDiv, filterState, hide }) => {

return (
    <>  
       <div
        onClick={hide}
        className="filters-overlay"
      />
      <div className={`filters-box ${expand ? 'filters-boxAppear' : ''}`}>
        <div className="mainContent">
            {arrFilters.map((filter, index) => (
                <div className="filter-sqs-block-content" key={index}>
                    <div className="filter-archive-block-wrapper">
                        <label className="archive-dropdown-toggle-label">
                            <span onClick={(e) => { e.preventDefault(); expandDiv(filter.key); }} className="archive-dropdown-toggle-title">
                                <div className="filter-selected-container">
                                    <span className="defaultLabel">{filter.title}</span>
                                    {selectedFilter.includes(filter.key) && <img onClick={() => handleFilterClose(filter.key)} className="filter-selected-close" src="../../assets/close.png" />}
                                </div>
                                <img src="../../assets/upArrow.png" alt="arrow" className={`icn-down-open ${expand === filter.key ? 'icn-down-down' : ''}`} />
                            </span>

                            <ul className={`archive-group-list ${expand === filter.key ? 'expanded' : 'collapsed'}`}>
                                {filter.values.map((value, index) =>
                                    <li key={index}>
                                        <a className="active-filter-link">
                                            <input
                                                type="checkbox"
                                                id={value.id || value}
                                                name={value.name || value}
                                                checked={filterState[filter.key] && filterState[filter.key].includes(value.id || value)}
                                                onChange={() => handleIndividualCheckboxChange(filter.key, value.id || value)}
                                                className="customize-filter-checkbox"
                                            />
                                            <span>{value.name || value}</span>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </label>
                    </div>
                </div>
            ))}

            <div className={`filter-sqs-block-content ${selectedFilter.length > 0 ? 'visible' : 'hidden'}`} onClick={clearAllFilters}>
                <div className="filter-archive-block-wrapper">
                    <div className="clear-filter-toggle-label">
                            <div className="clear-filter-selected-container">Clear All filters</div>
                    </div>
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
