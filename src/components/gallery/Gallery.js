import React, { useState, useEffect } from "react";
import './Gallery.css';
import GalleryFilters from './GalleryFilters';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import DeskFilters from './DeskFilters';
import { getArtworkDetails, getArtworkStoreDetails, getGalleryFilters, getApplyFiltersData } from '../../services/api';
import Toast from '../toast/Toast';

const Gallery = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { skuCode } = useParams();
    const [filters, setFilters] = useState(false);
    const [resultData, setResultData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [applyFilterData, setApplyFilterData] = useState([]);
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });
    const [expand, setExpand] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState([]);

    const [filterState, setFilterState] = useState(() => {
        const queryParams = new URLSearchParams(location.search);
        const filters = {};
        filterData.forEach(filter => {
            filters[filter.key] = queryParams.getAll(filter.key);
        });
        const selected = Object.keys(filters).filter((key) => filters[key].length > 0);
        setSelectedFilter(selected);
        return filters;
    });

    useEffect(() => {
        getArtworkDetails().then((res) => {
            if (res.status) {
                setLoader(false);
                setResultData(res.data);
            } else {
                setToastConfig({
                    show: true,
                    text: 'Error in fetching artists',
                    showTick: false,
                    time: 1500,
                });
            }
        }, (err) => {
            setToastConfig({
                show: true,
                text: 'Error in fetching artists',
                showTick: false,
                time: 1500,
            });
        });
    }, []); // Ensure this dependency array is empty

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);
                const response = await getGalleryFilters();
                setLoader(false);
                if (response.status === true) {
                    // navigate(`/stores/${skuCode}`);
                    setFilterData(response.data);
                } else {
                    setToastConfig({
                        show: true,
                        text: 'Error in fetching filter data',
                        showTick: false,
                        time: 1500,
                    });
                }
            } catch (error) {
                setLoader(false);
                console.error('Error fetching filter data:', error);
                setToastConfig({
                    show: true,
                    text: 'Error in fetching filter data',
                    showTick: false,
                    time: 1500,
                });
            }
        };

        fetchData();
    }, [])

    console.log('filterState',filterState);

    useEffect(() => {
        // Update selectedFilters based on filterState
        const newlySelectedFilters = Object.keys(filterState).filter(
            (key) => filterState[key].length > 0
        );
        setSelectedFilter(newlySelectedFilters);
    }, [filterState]);

    const expandDiv = (filterType) => {
        setExpand((prevFilter) => (prevFilter === filterType ? null : filterType));
    };

    const handleIndividualCheckboxChange = (filterType, filterValue) => {
        setFilterState((prevState) => {
            const updatedFilters = { ...prevState };
            const filterArray = updatedFilters[filterType] || []; // Initialize as an empty array if undefined
            const index = filterArray.indexOf(filterValue);
    
            if (index === -1) {
                updatedFilters[filterType] = [...filterArray, filterValue];
            } else {
                updatedFilters[filterType] = [
                    ...filterArray.slice(0, index),
                    ...filterArray.slice(index + 1),
                ];
            }
    
            updateURL(updatedFilters);
            setExpand(false);
    
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

        getApplyFiltersData(queryParams).then((res) => {
            if (res.status) {
                setLoader(false);
                setResultData(res.data);
            } else {
                setToastConfig({
                    show: true,
                    text: 'Error in fetching artists',
                    showTick: false,
                    time: 1500,
                });
            }
        }, (err) => {
            setToastConfig({
                show: true,
                text: 'Error in fetching artists',
                showTick: false,
                time: 1500,
            });
        });
    };

    const clearAllFilters = () => {
        const emptyFilters = {};
        filterData.forEach(filter => {
            emptyFilters[filter.key] = [];
        });
        setFilterState(emptyFilters);
        // Update the URL without query parameters
        updateURL({});
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
            setExpand(false);
            return updatedFilters;
        });
    };
    

    const handleStoreDetail = async (skuCode) => {
        try {
            let sku = skuCode.toLowerCase();
            setLoader(true);
            const response = await getArtworkStoreDetails(sku);
            setLoader(false);
            if (response.status === true) {
                navigate(`/stores/${sku}`);
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

    const [firstHalfContent, secondHalfContent, thirdHalfContent] = [
        resultData.slice(0, Math.ceil(resultData.length / 3)),
        resultData.slice(Math.ceil(resultData.length / 3), Math.ceil((2 * resultData.length) / 3)),
        resultData.slice(Math.ceil((2 * resultData.length) / 3)),
    ];

return (
    <>  
        {loader ? (
            <div className="loader-component-iu">
                <div className="loader-iu"></div>
            </div>
        ) : null}
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
        {filters &&
            <GalleryFilters 
                hide={() => {
                    setFilters(false);
                    const z = document.getElementsByTagName('body');
                    z[0].style.overflow = 'scroll';
                }}
                arrFilters={filterData}
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

            <DeskFilters 
                arrFilters={filterData}
                handleFilterClose={handleFilterClose}
                expandDiv={expandDiv}
                clearAllFilters={clearAllFilters}
                handleIndividualCheckboxChange={handleIndividualCheckboxChange}
                selectedFilter={selectedFilter}
                expand={expand}
                filterState={filterState}
            />
            
            <div className="gallery-mob-container">
                {resultData.map((item, index) => (
                    <div className="gallery-content-wrapper" key={item.sku}>
                        <div className="sqs-layout">
                            <div onClick={() => handleStoreDetail(item.sku)} className="gallery-block-outer-wrapper">
                                <img src={item.images[0]} alt={item.text} className="gallery-block-image" />
                                {item.availability && 
                                    <div>
                                        <div className="gallery-layout-stock">{item.availability}</div>
                                    </div>
                                }
                            </div>
                            <div className="gallery-image-caption">
                                <div onClick={() => handleStoreDetail(item.sku)}>{item.artist?.name} | {item.width} X {item.height}</div>
                                <div className="product-price">{item.price > 0 ? `₹${item.price}` : 'Enquire Price' }</div>
                                {/* {item.subText1 && <div className="summary-price">{item.subText1}</div>} */}
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
                            <div onClick={() => handleStoreDetail(item.sku)} className="gallery-block-outer-wrapper">
                                <img src={item.images[0]} alt={item.text} className="gallery-block-image" />
                                {item.availability && 
                                    <div>
                                        <div className="gallery-layout-stock">{item.availability}</div>
                                    </div>
                                }
                            </div>
                            <div className="gallery-image-caption">
                                <div onClick={() => handleStoreDetail(item.sku)}>{item.artist?.name} | {item.width} X {item.height}</div>
                                <div className="product-price">{item.price > 0 ? `₹${item.price}` : 'Enquire Price' }</div>
                                {/* {item.subText1 && <div className="summary-price">{item.subText1}</div>} */}
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                    <div className="second-half">
                    {secondHalfContent.map((item, index) => (
                    <div className="gallery-content-wrapper" key={index}>
                        <div className="sqs-layout">
                            <div onClick={() => handleStoreDetail(item.sku)} className="gallery-block-outer-wrapper">
                                <img src={item.images[0]} alt={item.text} className="gallery-block-image" />
                                {item.availability && 
                                    <div>
                                        <div className="gallery-layout-stock">{item.availability}</div>
                                    </div>
                                }
                            </div>
                            <div className="gallery-image-caption">
                                <div onClick={() => handleStoreDetail(item.sku)}>{item.artist?.name} | {item.width} X {item.height}</div>
                                <div className="product-price">{item.price > 0 ? `₹${item.price}` : 'Enquire Price' }</div>
                                {/* {item.subText1 && <div className="summary-price">{item.subText1}</div>} */}
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                <div className="third-half">
                    {thirdHalfContent.map((item, index) => (
                    <div className="gallery-content-wrapper" key={index}>
                        <div className="sqs-layout">
                            <div onClick={() => handleStoreDetail(item.sku)} className="gallery-block-outer-wrapper">
                                <img src={item.images[0]} alt={item.text} className="gallery-block-image" />
                                {item.availability && 
                                    <div>
                                        <div className="gallery-layout-stock">{item.availability}</div>
                                    </div>
                                }
                            </div>
                            <div className="gallery-image-caption">
                                <div onClick={() => handleStoreDetail(item.sku)}>{item.artist?.name} | {item.width} X {item.height}</div>
                                <div className="product-price">{item.price > 0 ? `₹${item.price}` : 'Enquire Price' }</div>
                                {/* {item.subText1 && <div className="summary-price">{item.subText1}</div>} */}
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
