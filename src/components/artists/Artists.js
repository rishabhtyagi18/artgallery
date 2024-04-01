import React, { useState, useEffect } from "react";
import './Artists.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getArtist, getArtistDetails, getArtistSearch } from '../../services/api';
import Toast from '../toast/Toast';

const Artists = (props) => {
    const { artistName } = useParams();
    const navigate = useNavigate();
    const [searchTxt, setSearchTxt] = useState('');
    const [resultData, setResultData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });

    useEffect(() => {
        getArtist().then((res) => {
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
          })
    }, [searchTxt]);

     // Debouncing function
     const debounce = (func, delay) => {
        let timeoutId;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(context, args), delay);
        };
    };

    // Debounced function to fetch search results
    const debouncedSearch = debounce((searchText) => {
        setLoader(true);
        getArtistSearch(searchText)
            .then((res) => {
                if (res.status) {
                    setLoader(false);
                    setResultData(res.data);
                } else {
                    setToastConfig({
                        show: true,
                        text: 'Error in fetching search artists',
                        showTick: false,
                        time: 1500,
                    });
                }
            })
            .catch((err) => {
                setLoader(false);
                setToastConfig({
                    show: true,
                    text: 'Error in fetching search artists',
                    showTick: false,
                    time: 1500,
                });
            });
    }, 500); // Adjust delay as needed

    const handleSearch = (searchText) => {
        setSearchTxt(searchText);
        debouncedSearch(searchText);
    };

    const handleClearSearch = () => {
        setSearchTxt('');
    }

    const handleArtistDetail = async (artistName) => {
        try {
            setLoader(true);
            const response = await getArtistDetails(artistName);
            setLoader(false);
            if (response.status === true) {
                navigate(`/artists/${artistName}`);
            } else {
                setToastConfig({
                    show: true,
                    text: 'Error in fetching artist details',
                    showTick: false,
                    time: 1500,
                });
                navigate('/error-page');
            }
        } catch (error) {
            setLoader(false);
            console.error('Error fetching artist details:', error);
            setToastConfig({
                show: true,
                text: 'Error in fetching artist details',
                showTick: false,
                time: 1500,
            });
            navigate('/error-page');
        }
    };

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
        <div className="artist-root" style={{marginTop: "95px"}}>
            <div className="custom-items-container">
                <div className="custom-items-root search-desk-root-custom">
                    <div className="custom-items-search">
                        <img
                        src="../../assets/search.png"
                        alt="search"
                        className="custom-items-icon"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="custom-items-input"
                            value={searchTxt}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        {searchTxt !== '' && <img 
                            onClick={() => handleClearSearch()}
                            className="search-selected-close" src="../../assets/close.png" />}
                    </div>
                </div>
            </div>
            
            <div className="artist-root-grid-container">
                {resultData.map((item, index) => (
                    <div className="artist-content-wrapper" key={item.id}>
                        <div className="sqs-layout artist-background-container">
                            <div onClick={() => handleArtistDetail(item.pageName)} className="artist-block-outer-wrapper">
                                <img src={item.image} alt={item.name} className="artist-block-image" />
                                <div className="portfolio-text">
                                    <h3 className="portfolio-title">{item.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
)}

export default Artists;