import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {

    const navigate = useNavigate();

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

return (
    <>  
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

            <div className="home-featured-desk-artist-root">
                <div className="home-featured-desk-artist-subRoot">
                    <div className="home-content-wrapper home-desk-artist-padding">
                        <div className="sqs-layout">
                            <h2>Featured Artist</h2>
                            <div className="image-block-outer-wrapper">
                                <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593076424140-K5YC5N43VJF5EH10MTTD/photo.jpg?format=1000w" alt="artist" className="sqs-block-image" />
                                <div className="image-caption">
                                    <p>Shashikant Dhotre</p>
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

                <div>
                    <div className="home-content-wrapper home-content-desk-artwork">
                        <div className="sqs-layout">
                            <h2>Featured Artwork</h2>
                            <div className="summary-item-list summary-desk-network-root">
                                <div className="summary-item-wrapper">
                                    <a href="/store/p/skd23-22phx" className="summary-thumbnail-container">
                                        <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1679900387508-D5MYIB7P3RM3PTXRC14P/SD4.JPG?format=1000w" alt="artist" />
                                    </a>
                                    <div className="summary-image-caption">
                                        <a href="/store/p/skd23-22phx">Shashikant Dhotre | 30 in X 40 in</a>
                                        <div className="product-price">₹0.00</div>
                                        <div className="summary-price">Enquire Price</div>
                                    </div>
                                </div>

                                <div className="summary-item-wrapper">
                                    <a href="/" className="summary-thumbnail-container">
                                        <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1653027989582-3QWSOTILZS0DCGFL6YU3/SSD5.jpg?format=750w" alt="artist" />
                                    </a>
                                    <div className="summary-image-caption">
                                        <a href="/store/p/skd23-22phx">Siddharth Shingade | 30 in X 30 in</a>
                                        <div className="product-price">₹156,000.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-content-network-wrapper">
                        <div className="sqs-layout">
                            <a href="/gallery" className="sqs-block-button-element">View All Artwork</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default Home;