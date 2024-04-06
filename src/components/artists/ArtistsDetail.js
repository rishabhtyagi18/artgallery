import React, { useEffect, useState } from "react";
import './Artists.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { getArtistDetails } from '../../services/api';

const ArtistsDetail = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { artistName } = useParams();
    const url = location.pathname;
    const match = url.match(/artists\/(.*)/);
    const dynamicValue = match ? match[1] : null; // Get the value after "artists"

    const [loader, setLoader] = useState(false);
    const [artistDetails, setArtistDetails] = useState({});
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 2500,
    });

    // console.log('artistName',dynamicValue);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);
                const response = await getArtistDetails(dynamicValue);
                setLoader(false);
                if (response.status === true) {
                    // navigate(`/artists/${artistName}`);
                    setArtistDetails(response.data)
                } else {
                    setToastConfig({
                        show: true,
                        text: 'Error in fetching artist details',
                        showTick: false,
                        time: 2500,
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
                    time: 2500,
                });
                navigate('/error-page');
            }
        };

        fetchData();
    }, [dynamicValue]);

return (
    <>  
        <div className="artist-root" style={{marginTop: "95px"}}>
            <div className="artistdetail-desk-roots">
                <div className="artist-content-wrapper artistdetail-htmlcontent-wrapper">
                    <div className="sqs-layout">
                        <div className="artist-block-outer-wrapper">
                            <img src={artistDetails?.image} alt={artistDetails?.name} className="artistdetail-block-image" />
                        </div>
                    </div>
                </div>

                <div className="substore-content-wrapper">
                    <div className="artist-sqs-layout">
                        <h2 className="artistdetail-content-desk-heading">{artistDetails?.name}</h2>
                        <div className="productItem-details-checkout">
                            <div className="productItem-product-price">
                                <div className="artistdetail-product-price">{artistDetails?.birth}</div>
                            </div>

                            <p class="artistdetail-sqsrte-large">{artistDetails?.brief}</p>
                            
                            {artistDetails?.description?.map((item, index) => 
                                <>
                                    <p class="artistdetail-sqsrte-large"><strong>{item.title}</strong></p>
                                    <p class="artistdetail-sqsrte-large">{item.text}</p>
                                </>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="artistdetail-content-wrapper">
                <div className="artist-sqs-layout">
                    <h2>My Artwork</h2>
                </div>
            </div>

            <div className="artistdetail-artwork-content-wrapper">
                <div className="artist-sqs-layout">
                    <div onClick={() => navigate('/artists/anand-sai')}>
                        <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1598966721988-R9QGNZID2XJGA1UI57G8/ajd1.jpg?format=2500w" alt="store" className="artistdetail-video-wrapper" />
                    </div>
                </div>

                
            </div>

            <div className="artistdetail-artwork-content-carousel">
                <div className="artist-sqs-layout">
                    <div onClick={() => navigate('/artists/anand-sai')} className="item-pagination-link">
                        <img className="item-pagination-icon-right" src="../../assets/leftArrow.png" alt="left" />
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default ArtistsDetail;