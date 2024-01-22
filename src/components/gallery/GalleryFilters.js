import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './GalleryFilters.css';

const GalleryFilters = ({ hide }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [expand, setExpand] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState([]);

    // Initialize state based on URL query parameters
    const [filterState, setFilterState] = useState(() => {
        const queryParams = new URLSearchParams(location.search);
        const filters = {
            price: queryParams.getAll('price'),
            artist: queryParams.getAll('artist'),
            size: queryParams.getAll('size'),
            genre: queryParams.getAll('genre'),
            medium: queryParams.getAll('medium'),
        };
        const selected = Object.keys(filters).filter((key) => filters[key].length > 0);
        setSelectedFilter(selected);
        return filters;
    });

    const expandDiv = (filterType) => {
        setExpand((prevFilter) => (prevFilter === filterType ? null : filterType));
    };

    useEffect(() => {
        // Update selectedFilter based on filterState
        const newlySelectedFilters = Object.keys(filterState).filter(
            (key) => filterState[key].length > 0
        );
        setSelectedFilter(newlySelectedFilters);
    }, [filterState]);

    const handleIndividualCheckboxChange = (filterType, filterValue) => {
        setFilterState((prevState) => {
            const updatedFilters = { ...prevState };
            const index = updatedFilters[filterType].indexOf(filterValue);

            if (index === -1) {
                updatedFilters[filterType] = [...updatedFilters[filterType], filterValue];
            } else {
                updatedFilters[filterType] = [
                    ...updatedFilters[filterType].slice(0, index),
                    ...updatedFilters[filterType].slice(index + 1),
                ];
            }

            updateURL(updatedFilters);
            hide();
            return updatedFilters;
        });
    };

    const clearAllFilters = () => {
        setFilterState({
            price: [],
            artist: [],
            size: [],
            genre: [],
            medium: [],
        });

        // Update the URL without query parameters
        updateURL({});
        hide();
        // Clear the selected filter type
        setSelectedFilter([]);
    };

    const handleFilterClose = (filterType) => {
        setFilterState((prevState) => {
            const updatedFilters = { ...prevState, [filterType]: [] };
    
            // Remove the filter from selectedFilter
            setSelectedFilter((prevFilters) => prevFilters.filter((filter) => filter !== filterType));
    
            // Update the URL
            updateURL(updatedFilters);
            hide();
            return updatedFilters;
        });
    };

    const updateURL = (filters) => {
        const queryParams = Object.entries(filters)
            .filter(([_, values]) => values.length > 0)
            .map(([filterType, values]) => `${filterType}=${values.join(',')}`)
            .join('&');

        navigate({
            pathname: location.pathname,
            search: queryParams ? `?${queryParams}` : '',
        });
    };

    useEffect(() => {
        // Block background scroll when the pop-up is opened
        document.body.style.overflow = 'hidden';
    
        // Restore background scroll when the pop-up is closed
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, []);

    const priceFilter = [
        {
            name: "All Network",
            id: "allnetwork"
        },
        {
            name: "Below ₹50000",
            id: "below50000"
        },
        ,
        {
            name: "Below ₹100000",
            id: "below100000"
        }
    ]

    const artistFilter = [
        {
            name: "Ajay De",
            id: "ajayde"
        },
        {
            name: "Aman",
            id: "aman"
        },
        {
            name: "Falguni Mehta",
            id: "falgunimehta"
        },
        {
            name: "Geeta Harish",
            id: "geetaaharish"
        },
        {
            name: "Mitali Dey",
            id: "mitaliadey"
        },
        {
            name: "Rakhi Baid",
            id: "rakhiabaid"
        }
    ];

    const sizeFilter = [
        {
            name: "Large",
            id: "large"
        },
        {
            name: "Medium",
            id: "medium"
        },
        {
            name: "Small",
            id: "small"
        }
    ]

    const genreFilter = [
        {
            name: "Abstract",
            id: "abstract"
        },
        {
            name: "Figurative",
            id: "figurative"
        },
        {
            name: "Landscape",
            id: "landscape"
        },
        {
            name: "Seascape",
            id: "seascape"
        }
    ]

    const mediumFilter = [
        {
            name: "Acrylic on Canvas",
            id: "acrylicaonacanvas"
        },
        {
            name: "Charcoal on Canvas",
            id: "charcoalaonacanvas"
        },
        {
            name: "Colour Pencil on Paper",
            id: "colourapencilaonapaper"
        },
        {
            name: "Ink on Canvas",
            id: "inkaonacanvas"
        },
        {
            name: "Mixed Media on Canvas",
            id: "mixedamediaaonacanvas"
        }
    ]

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
                        <span onClick={(e) => { e.preventDefault(); expandDiv('price'); }} className="archive-dropdown-toggle-title">
                            <div className="filter-selected-container">
                                <span className="defaultLabel">Price</span>
                                {selectedFilter.includes('price') && <img onClick={() => handleFilterClose('price')} className="filter-selected-close" src="../../assets/close.png" />}
                            </div>
                            <img src="../../assets/upArrow.png" alt="arrow" className={`icn-down-open ${expand === 'price' ? 'icn-down-down' : ''}`} />
                        </span>

                        <ul className={`archive-group-list ${expand === 'price' ? 'expanded' : 'collapsed'}`}>
                            {priceFilter.map((ele, index) => 
                                <li key={index}>
                                    <a className="active-filter-link">
                                        <input
                                            type="checkbox"
                                            id={ele.id}
                                            name={ele.name}
                                            checked={filterState.price.includes(ele.name)}
                                            onChange={() => handleIndividualCheckboxChange('price', ele.name)}
                                            className="customize-filter-checkbox"
                                        />
                                        <span>{ele.name}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </label>
                </div>
            </div>

            <div className="filter-sqs-block-content">
                <div className="filter-archive-block-wrapper">
                    <label className="archive-dropdown-toggle-label">
                        <span onClick={(e) => { e.preventDefault(); expandDiv('artist') }} className="archive-dropdown-toggle-title">
                            <div className="filter-selected-container">
                                <span className="defaultLabel">Artist</span>
                                {selectedFilter.includes('artist') && <img onClick={() => handleFilterClose('artist')} className="filter-selected-close" src="../../assets/close.png" />}
                            </div>
                            <img src="../../assets/upArrow.png" alt="arrow" className={`icn-down-open ${expand === 'artist' ? 'up' : ''}`} />
                        </span>

                        <ul className={`archive-group-list ${expand === 'artist' ? 'expanded' : 'collapsed'}`}>
                            {artistFilter.map((ele, index) => 
                                <li key={index}>
                                    <a className="active-filter-link">
                                        <input
                                            type="checkbox"
                                            id={ele.id}
                                            name={ele.name}
                                            checked={filterState.artist.includes(ele.name)}
                                            onChange={() => handleIndividualCheckboxChange('artist', ele.name)}
                                            className="customize-filter-checkbox"
                                        />
                                        <span>{ele.name}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </label>
                </div>
            </div>

            <div className="filter-sqs-block-content">
                <div className="filter-archive-block-wrapper">
                    <label className="archive-dropdown-toggle-label">
                        <span className="archive-dropdown-toggle-title" onClick={(e) => { e.preventDefault(); expandDiv('size') }}>
                            <div className="filter-selected-container">
                                <span className="defaultLabel">Size</span>
                                {selectedFilter.includes('size') && <img onClick={() => handleFilterClose('size')} className="filter-selected-close" src="../../assets/close.png" />}
                            </div>
                            <img src="../../assets/upArrow.png" alt="arrow" className={`icn-down-open ${expand === 'size' ? 'up' : ''}`} />
                        </span>

                        <ul className={`archive-group-list ${expand === 'size' ? 'expanded' : 'collapsed'}`}>
                            {sizeFilter.map((ele, index) => 
                                <li key={index}>
                                    <a className="active-filter-link">
                                        <input
                                            type="checkbox"
                                            id={ele.id}
                                            name={ele.name}
                                            checked={filterState.size.includes(ele.name)}
                                            onChange={() => handleIndividualCheckboxChange('size', ele.name)}
                                            className="customize-filter-checkbox"
                                        />
                                        <span>{ele.name}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </label>
                </div>
            </div>

            <div className="filter-sqs-block-content">
                <div className="filter-archive-block-wrapper">
                    <label className="archive-dropdown-toggle-label">
                        <span className="archive-dropdown-toggle-title" onClick={(e) => { e.preventDefault(); expandDiv('genre') }}>
                            <div className="filter-selected-container">
                                <span className="defaultLabel">Genre</span>
                                {selectedFilter.includes('genre') && <img onClick={() => handleFilterClose('genre')} className="filter-selected-close" src="../../assets/close.png" />}
                            </div>
                            <img src="../../assets/upArrow.png" alt="arrow" className={`icn-down-open ${expand === 'genre' ? 'up' : ''}`} />
                        </span>

                        <ul className={`archive-group-list ${expand === 'genre' ? 'expanded' : 'collapsed'}`}>
                            {genreFilter.map((ele, index) =>
                                <li key={index}>
                                    <a className="active-filter-link">
                                        <input
                                            type="checkbox"
                                            id={ele.id}
                                            name={ele.name}
                                            checked={filterState.genre.includes(ele.name)}
                                            onChange={() => handleIndividualCheckboxChange('genre', ele.name)}
                                            className="customize-filter-checkbox"
                                        />
                                        <span>{ele.name}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </label>
                </div>
            </div>

            <div className="filter-sqs-block-content">
                <div className="filter-archive-block-wrapper">
                    <label className="archive-dropdown-toggle-label">
                        <span className="archive-dropdown-toggle-title" onClick={(e) => { e.preventDefault(); expandDiv('medium') }}>
                            <div className="filter-selected-container">
                                <span className="defaultLabel">Medium</span>
                                {selectedFilter.includes('medium') && <img onClick={() => handleFilterClose('medium')} className="filter-selected-close" src="../../assets/close.png" />}
                            </div>
                            <img src="../../assets/upArrow.png" alt="arrow" className={`icn-down-open ${expand === 'medium' ? 'up' : ''}`} />
                        </span>

                        <ul className={`archive-group-list ${expand === 'medium' ? 'expanded' : 'collapsed'}`}>
                            {mediumFilter.map((ele, index) => 
                                <li key={index}>
                                    <a className="active-filter-link">
                                        <input
                                            type="checkbox"
                                            id={ele.id}
                                            name={ele.name}
                                            checked={filterState.medium.includes(ele.name)}
                                            onChange={() => handleIndividualCheckboxChange('medium', ele.name)}
                                            className="customize-filter-checkbox"
                                        />
                                        <span>{ele.name}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </label>
                </div>
            </div>

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
