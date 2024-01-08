import React from "react";
import './Artists.css';
import { useNavigate } from 'react-router-dom';

const Artists = (props) => {

    const navigate = useNavigate();

    const arr = [{
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593204758393-LKJJ0SKA6B9Y91PSOYSO/photo.jpg?format=1000w",
        name: "Ajay De"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593106319403-K9Z4BSDU3CBD0L252WBH/photo.jpg?format=1000w",
        name: "Balu Sadalge"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593204979839-SOPRGMAAJQ8SA8TDJAZ3/photo.jpg?format=1000w",
        name: "Anand Sai"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593109619592-QFZCCTTOJRCYJOOKOCW9/photo.jpg?format=1000w",
        name: "Falguni Mehta"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593107395391-02X24UTCVB3L6E91DEA6/photo.jpg?format=1000w",
        name: "Girish Gharat"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593107649397-NLN9L4E7MCQ33QGDO0IT/photo.jpg?format=1000w",
        name: "Govind Dumbre"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593107904293-W85BMNIMLMNFBFSP9UJW/photo.jpg?format=1000w",
        name: "Madhumita Bhattacharya"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593109826692-L4ABXBO5SGMKUPHFYR3J/photo.jpg?format=1000w",
        name: "Rakhi Baid"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593108440130-DDUF9DIQKJR4LKY7JWM7/photo.jpg?format=1000w",
        name: "Sachin Sagare"
    }]

return (
    <>  
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
                        />
                    </div>
                </div>
            </div>
            
            <div className="artist-root-grid-container">
                {arr.map((item, index) => (
                    <div className="artist-content-wrapper" key={index}>
                        <div className="sqs-layout artist-background-container">
                            <div onClick={() => navigate('/artists/ajay-de')} className="artist-block-outer-wrapper">
                                <img src={item.img} alt={item.name} className="artist-block-image" />
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