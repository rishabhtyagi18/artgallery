import React from "react";
import './Artists.css';
import { useNavigate } from 'react-router-dom';

const ArtistsDetail = (props) => {
    const navigate = useNavigate();

return (
    <>  
        <div className="artist-root" style={{marginTop: "95px"}}>
            <div className="artistdetail-desk-roots">
                <div className="artist-content-wrapper artistdetail-htmlcontent-wrapper">
                    <div className="sqs-layout">
                        <div onClick={() => navigate('/artists/anand-sai')} className="artist-block-outer-wrapper">
                            <img src="https://images.squarespace-cdn.com/content/v1/5ee1e788c9545837ba7c4bde/1593204758393-LKJJ0SKA6B9Y91PSOYSO/photo.jpg?format=1000w" alt="artist" className="artistdetail-block-image" />
                        </div>
                    </div>
                </div>

                <div className="substore-content-wrapper">
                    <div className="artist-sqs-layout">
                        <h2 className="artistdetail-content-desk-heading">Ajay De</h2>
                        <div className="productItem-details-checkout">
                            <div className="productItem-product-price">
                                <div className="artistdetail-product-price">Kolkata, West Bengal, India | 1967</div>
                            </div>

                            <p class="artistdetail-sqsrte-large">Ajay De is no new name in the world of art. Having found his calling at the age of 6 years, Ajay soon realized the lucidity of charcoal as a medium. It gave him the freedom to express his feelings and draw a string of thoughts on paper. What sets his art from others is not just the magical play of charcoal with striking colours, it’s the distinguished movement of his fingers and thumb on paper – “I channelled my energies into artistic expressions and learnt the right way to stroke the paper with my fingers and thumb and even my palm while doing drawings with charcoal.”</p>
                            <p class="artistdetail-sqsrte-large"><strong>Your journey as an artist ...</strong></p>
                            <p class="artistdetail-sqsrte-large">I learnt a great deal about art from my varied experiences and by simply observing things around me. I, of course, owe a lot to my formal education; but life has been a great master. And, this journey of learning isn’t over yet – I am constantly drawing inspiration by being a participant to life.</p>
                            <p class="artistdetail-sqsrte-large"><strong>Your style ...</strong></p>
                            <p class="artistdetail-sqsrte-large">Upon graduating from the Government College of Arts and Crafts and the J.J. School of Arts in Mumbai, I was drawn towards the wonders of charcoal and Japanese calligraphy. And, soon after I began exploring the boundaries of charcoal. I started experimenting with acrylic on charcoal; which is when I started using shades of red and blue in my paintings.</p>
                            <p class="artistdetail-sqsrte-large"><strong>What is so striking about charcoal as a medium?</strong></p>
                            <p class="artistdetail-sqsrte-large">I am drawn to the extraordinary beauty of black and white – its peace, tranquillity and the multiple moods. These two shades portray the truth of life; while giving depth to bring out other colours that define who we are.</p>
                            <p class="artistdetail-sqsrte-large"><strong>Achievements</strong></p>
                            <p class="artistdetail-sqsrte-large">Represented and auctioned in several private and public collections in India and abroad.</p>
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