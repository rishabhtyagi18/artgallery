import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getFeatureArtwork, getArtworkStoreDetails } from '../../services/api';
import Toast from '../toast/Toast';

const Home = (props) => {

    const navigate = useNavigate();
    const { skuCode } = useParams();
    const [resultData, setResultData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [toastConfig, setToastConfig] = useState({
        show: false,
        text: '',
        showTick: false,
        time: 1500,
    });
    const mobArr = [{
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593070915285-2L0QL7BL1P5NPBMDXF8I/1shashikantdhotre.jpg?format=2500w",
        name:"SHASHIKANT DHOTRE"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593361137061-FJGA05LHBENVLZX53ZIV/4awdheshbajpai.jpg?format=2500w",
        name:"AWDHESH BAJPAI"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593519262771-KHG8PNECJC8227WOYZZA/3pradipraut.jpg?format=2500w",
        name:"PRADIP RAUT"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593361201886-FP1M1D3WTZDXRUSGACFY/5sharadkale.jpg?format=2500w",
        name:"SHARAD KALE"
    },{
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593360947211-7U07YVCAGSX2DNOY07UL/2yuvrajpatil.jpg?format=2500w",
        name:"YUVRAJ PATIL"
    }]

    const deskArr = [{
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593069939033-ZZXNVDYTJXNK4RQFDT88/2balusadalge.jpg?format=2500w",
        name:"Balu Sadalge"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/0c93ddc7-5797-4ecd-863e-6d5bf06e87a6/915160ad-9b80-4030-8915-e31240aef14d+2.JPG?format=2500w",
        name:"Shashikant Dhotre"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/8c1ab05d-843e-4bce-a776-dfb03ba5388c/YP44.jpg?format=2500w",
        name:"PRADIP RAUT"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/ce6f8956-17c7-41b5-9f02-f6526ff1c8b4/Nandishwara_44X68+Inches_Acrylic+On+Canvas_3%2C50%2C000.JPG?format=2500w",
        name:"SHARAD KALE"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/813bfa03-44b6-42fe-91ec-42f576622d63/SKD44.JPG?format=2500w",
        name:"YUVRAJ PATIL"
    }]

    useEffect(() => {
        getFeatureArtwork().then((res) => {
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
    }, []);

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
        <div className="home-root">
            <div className="home-mob-root">
                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} emulateTouch={false} swipeable={false}>
                    {mobArr.map((ele, index) => (
                            <div className="section-border" key={index}>
                                <div className="section-background">
                                    <img alt="banner" src={ele.img} />
                                    <p className="legend">{ele.name}</p>
                                </div>
                            </div>
                    ))}
                </Carousel>
            </div>

            <div className="home-desk-root">
                <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false}>
                    {deskArr.map((ele, index) => (
                        <div className="section-border" key={index}>
                            <div className="section-background">
                                <img alt="banner" src={ele.img} />
                                <p className="legend">{ele.name}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="home-content-wrapper">
                <div className="sqs-layout sqs-art-desk-gallery">
                    <h2>Moksh Art Gallery</h2>
                    <p className="sqsrte-large">Established in 2007, Moksh Art Gallery caters to every kind of art aficionado. We have carefully curated a wide array of affordable art by emerging and established Indian artists, like Datta Bansode, Shashikant Dhotre, Nandita Richie, Sunayana Malhotra, Rajat Kaanthi Dharr, Satish Mane, Yuvraj Patil and many more.</p>
                </div>
            </div>

            <div>
                <div>
                    <div className="home-content-wrapper home-content-desk-artwork">
                        <div className="sqs-layout">
                            <h2>Featured Artwork</h2>
                            <div className="summary-item-list summary--artwork-desk-network-root">
                                {resultData.map((item, index) => ( 
                                    <div className="summary-item-wrapper" key={item.sku}>
                                        <div onClick={() => handleStoreDetail(item.sku)} className="summary-thumbnail-container">
                                            <img src={item.images[0]} alt="artist" />
                                        </div>
                                        <div className="summary-image-caption">
                                            <a href="/store/p/skd23-22phx">{item.artist?.name} | {item.width} X {item.height}</a>
                                            <div className="product-price">{item.price > 0 ? `₹${item.price}` : 'Enquire Price' }</div>
                                            {/* <div className="summary-price">Enquire Price</div> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="home-content-network-wrapper">
                        <div className="sqs-layout">
                            <a href="/gallery" className="sqs-block-button-element">View All Artwork</a>
                        </div>
                    </div>
                </div>

                <div className="home-featured-desk-artist-subRoot">
                    <div className="home-content-wrapper home-desk-artist-padding">
                        <div className="sqs-layout">
                            <h2>Featured Artist</h2>

                            <div className="summary-item-list summary-desk-network-root">
                                <div className="image-block-outer-wrapper">
                                    <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593076424140-K5YC5N43VJF5EH10MTTD/photo.jpg?format=1000w" alt="artist" className="sqs-block-image" />
                                    <div className="image-caption">
                                        <p>Shashikant Dhotre</p>
                                    </div>
                                </div>

                                <div className="image-block-outer-wrapper">
                                    <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593076424140-K5YC5N43VJF5EH10MTTD/photo.jpg?format=1000w" alt="artist" className="sqs-block-image" />
                                    <div className="image-caption">
                                        <p>Shashikant Dhotre</p>
                                    </div>
                                </div>

                                <div className="image-block-outer-wrapper">
                                    <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593076424140-K5YC5N43VJF5EH10MTTD/photo.jpg?format=1000w" alt="artist" className="sqs-block-image" />
                                    <div className="image-caption">
                                        <p>Shashikant Dhotre</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="home-content-wrapper">
                        <div className="sqs-layout">
                            <a href="/artists/ajay-de" className="sqs-block-button-element">VIEW ARTIST</a>
                        </div>
                    </div>
                </div>

                <div className="home-featured-mob-artist-subRoot">
                    <div className="home-content-wrapper">
                        <div className="sqs-layout">
                            <h2>Client Stories</h2>
                            <div className="summary-item-list summary-desk-network-root">
                                <ul class="blog-grid">
                                    <div>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-r-kamat">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Rajesh_Kamat_-_Manu_Parekh_600x600.jpg?v=1686940095" />
                                                    </a>
                                                </div>
                                            
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Serigraph by Manu Parekh</div>
                                                        <div class="client-name">Client: R. Kamat<br />Singapore</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-a-choudary">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Anupama_Choudary_-_Madan_Pawar_600x600.jpg?v=1686939979" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Madan Pawar</div>
                                                        <div class="client-name">Client: A. Choudary<br />Hyderabad, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-s-dsouza">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Sachin_Dsouza_-_Basuki_Dasgupta_600x600.jpg?v=1686939847" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Commissioned Painting by Basuki Dasgupta</div>
                                                        <div class="client-name">Client: S. DSouza<br />Singapore</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-m-singh">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Moxada_Singh_-_Madhuri_Kathe_600x600.jpg?v=1686939685" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Madhuri Kathe</div>
                                                        <div class="client-name">Client: M. Singh<br />Bangalore, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-s-sureen">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Sheetal_Sureen_-_Rajendra_Kumar_Shyam_600x600.jpg?v=1686939518" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Gond Painting by Rajendra Kumar Shyam</div>
                                                        <div class="client-name">Client: S. Sureen<br />Dubai, UAE</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-r-banerjee">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Rinku_Banerjee_-_Sachin_Sagare_600x600.jpg?v=1686939351" />
                                                        </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Sachin Sagare</div>
                                                        <div class="client-name">Client: R. Banerjee<br />Mumbai, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-v-khetawat">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Vedang_Khetawat_-_Kolkata_600x600.jpg?v=1686939218" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Serigraph by S.H. Raza</div>
                                                        <div class="client-name">Client: V. Khetawat<br />Kolkata, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-n-c-punia">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Nidhi_Chowdhary_Punia_-_Gurudas_Shenoy_600x600.jpg?v=1686939089" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Commissioned Painting by Gurudas Shenoy</div>
                                                        <div class="client-name">Client: N.C. Punia<br />Dubai, UAE</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-hk-nair">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Hari_Krishnan_Nair_-_Nemichand_600x600.jpg?v=1686220269" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Pichwai Painting by Nemichand</div>
                                                        <div class="client-name">Client: HK Nair<br />Bangalore, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-d-nath">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Dipti_Nath_-_Bhaskara_Rao_Botcha_600x600.jpg?v=1675357723" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Bhaskara Rao Botcha</div>
                                                        <div class="client-name">Client: D. Nath<br />Goa, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-b-reddy">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Bhramini_Reddy_-_Ganapati_Hegde_600x600.jpg?v=1675357350" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Commissioned Painting by Ganapati Hegde</div>
                                                        <div class="client-name">Client: B. Reddy<br />Bangalore, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="home-content-wrapper">
                        <div className="sqs-layout">
                            <a href="/artists/ajay-de" className="sqs-block-button-element">VIEW ARTIST</a>
                        </div>
                    </div>
                </div>

                <div className="home-featured-desk-artist-subRoot">
                    <div className="home-content-wrapper home-desk-artist-padding">
                        <div className="sqs-layout">
                            <h2>Client Stories</h2>
                            <div className="summary-item-list summary-desk-network-root">
                                <ul class="blog-grid">
                                    <div class="column-left">
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-r-kamat">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Rajesh_Kamat_-_Manu_Parekh_600x600.jpg?v=1686940095" />
                                                    </a>
                                                </div>
                                            
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Serigraph by Manu Parekh</div>
                                                        <div class="client-name">Client: R. Kamat<br />Singapore</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-a-choudary">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Anupama_Choudary_-_Madan_Pawar_600x600.jpg?v=1686939979" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Madan Pawar</div>
                                                        <div class="client-name">Client: A. Choudary<br />Hyderabad, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-s-dsouza">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Sachin_Dsouza_-_Basuki_Dasgupta_600x600.jpg?v=1686939847" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Commissioned Painting by Basuki Dasgupta</div>
                                                        <div class="client-name">Client: S. DSouza<br />Singapore</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-m-singh">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Moxada_Singh_-_Madhuri_Kathe_600x600.jpg?v=1686939685" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Madhuri Kathe</div>
                                                        <div class="client-name">Client: M. Singh<br />Bangalore, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-s-sureen">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Sheetal_Sureen_-_Rajendra_Kumar_Shyam_600x600.jpg?v=1686939518" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Gond Painting by Rajendra Kumar Shyam</div>
                                                        <div class="client-name">Client: S. Sureen<br />Dubai, UAE</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-r-banerjee">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Rinku_Banerjee_-_Sachin_Sagare_600x600.jpg?v=1686939351" />
                                                        </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Sachin Sagare</div>
                                                        <div class="client-name">Client: R. Banerjee<br />Mumbai, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-v-khetawat">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Vedang_Khetawat_-_Kolkata_600x600.jpg?v=1686939218" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Serigraph by S.H. Raza</div>
                                                        <div class="client-name">Client: V. Khetawat<br />Kolkata, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-n-c-punia">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Nidhi_Chowdhary_Punia_-_Gurudas_Shenoy_600x600.jpg?v=1686939089" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Commissioned Painting by Gurudas Shenoy</div>
                                                        <div class="client-name">Client: N.C. Punia<br />Dubai, UAE</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-hk-nair">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Hari_Krishnan_Nair_-_Nemichand_600x600.jpg?v=1686220269" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Pichwai Painting by Nemichand</div>
                                                        <div class="client-name">Client: HK Nair<br />Bangalore, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-d-nath">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Dipti_Nath_-_Bhaskara_Rao_Botcha_600x600.jpg?v=1675357723" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Bhaskara Rao Botcha</div>
                                                        <div class="client-name">Client: D. Nath<br />Goa, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-b-reddy">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Bhramini_Reddy_-_Ganapati_Hegde_600x600.jpg?v=1675357350" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Commissioned Painting by Ganapati Hegde</div>
                                                        <div class="client-name">Client: B. Reddy<br />Bangalore, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
        
                                    <div class="column-right">
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-mahitha-r">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Mahitha_Reddy_-_Nikheel_Aphale_600x600.jpg?v=1675357568" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Commissioned Painting by Nikheel Aphale</div>
                                                        <div class="client-name">Client: Mahitha R.<br />Wellesley, USA</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-b-narayan">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Badri_Narayan_-_Thota_Vaikuntam_600x600.jpg?v=1675357894" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>                                                
                                                        <div class="by_artwork">Serigraph by Thota Vaikuntam</div>
                                                        <div class="client-name">Client: B. Narayan<br />Cheshire, United Kingdom</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-mohit-chopra">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Mohit-Chopra-Dinkar-Jadhav-Gurgaon_600x600.jpg?v=1666012580" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Dinkar Jadhav</div>
                                                        <div class="client-name">Client: M. Chopra<br />Gurgaon, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-amit-banerji">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Amit-Banerji-Claire-Iono-02_600x600.jpg?v=1666075918" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>                                                
                                                        <div class="by_artwork">Paintings by Claire Iono</div>
                                                        <div class="client-name">Client: A. Banerji<br />Bangalore, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/varun-backliwal-1">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Sonal-Gandhi_Sachin-Jaltare_600x600.jpg?v=1562845415" />
                                                        </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Painting by Sachin Jaltare</div>
                                                        <div class="client-name">Client: Sonal Gandhi<br />Chicago, USA</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/n-shankar">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Nirupa-Shankar---Vinita-Karim_600x600.jpg?v=1666076047" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>                                            
                                                        <div class="by_artwork">Painting by Vinita Karim</div>
                                                        <div class="client-name">Client: N. Shankar<br />Bangalore, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-s-nandan">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Swaraj_Nandan_-_New_Jersey_600x600.jpg?v=1666089200" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>                                                
                                                        <div class="by_artwork">Painting by Dinkar Jadhav</div>
                                                        <div class="client-name">Client: S. Nandan<br />New Jersey, USA</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-s-naidu">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Shilpa_Naidu_-_Laxman_Aelay_-_Dubai_600x600.jpg?v=1666089762" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>                                                
                                                        <div class="by_artwork">Painting by Laxman Aelay</div>
                                                        <div class="client-name">Client: S. Naidu<br />Dubai, UAE</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-dhruv-chitgopekar">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/02_600x600.jpg?v=1665034370" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>
                                                        <div class="by_artwork">Serigraph by M.F. Husain</div>
                                                        <div class="client-name">Client: D. Chitgopekar<br />Mumbai, India</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-cell">
                                            <div class="box-shadow-div">
                                                <div class="img_div">
                                                    <a style={{ cursor: "default" }} article_url="/blogs/testimonial/client-pia-tyagi">
                                                        <img className="client-img" src="//www.artisera.com/cdn/shop/articles/Pia_Tyagi_-_Singapore_600x600.jpg?v=1666090003" />
                                                    </a>
                                                </div>
                                                <div class="show_description">
                                                    <blockquote>                                                
                                                        <div class="by_artwork">Artwork by Basuki Dasgupta</div>
                                                        <div class="client-name">Client: P. Tyagi<br />Singapore</div>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="home-content-wrapper">
                        <div className="sqs-layout">
                            <a href="/artists/ajay-de" className="sqs-block-button-element">VIEW ARTIST</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
          className="callMe"
        //   onClick={() => {
        //     clickCallBtnEvent(props?.user?.id, props.cardetails?.model?.id, 'homepage', props.isAMCUser)
        //   }}
        >
          <a href="tel:9819052003">
            <img src="../../assets/whatsapp-logo.png" alt='connect'/>
          </a>
        </div>
    </>
)}

export default Home;