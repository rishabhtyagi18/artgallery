import React, { useState } from "react";
import './Faq.css';

const Faq = (props) => {

    const faqContent = [
        {
          question: "What are the different payment options available?",
          answer: "You can pay by Debit Card, Credit Card or Bank Transfer. We have partnered with a globally reputed payment gateway firm to ensure complete security of your transactions. For your absolute security, we do not collect and store Debit/Credit Card information on our website. For offline orders, you may call us at +91 98190 52003 or write to us at info@mokshartgallery.com with the details of the artwork. We will confirm the availability of the artwork and then you may deposit a Cheque or Demand Draft or transfer funds to our bank account.",
          open: false
        },
        {
          question: "Does the image on the website accurately represent my order selection?",
          answer: "While our endeavour is to present the actual artwork, there may be a slight variation in shade and colour.  ",
          open: false
        },
        {
          question:"Are all artworks original?",
          answer: "All artworks are original other than the ones that have been clearly marked as reproductions or prints.",
          open: false
        },
        {
          question:"What about authenticity?",
          answer: "We take the quality and authenticity of our products very seriously. And, that is why we only house artworks sourced directly from the artist.",
          open: false
        },
        {
          question:"Can Moksh assist with large orders?",
          answer: "Yes, please reach out to us on info@mokshartgallery.com",
          open: false
        },
        {
          question:"Can I commission a painting?",
          answer: "If you would like us to source specific artwork that is not currently listed on the website you could reach out to us with a description of what you’re looking for, or send us a picture of the exact piece, and we’ll be happy to work with one of our many artists to have it commissioned for you. We also undertake portrait paintings if you can provide us with a high-resolution photograph.",
          open: false
        },
        {
          question:"Why is the price of certain artworks not listed?",
          answer: "We understand that you would prefer to view the price of every item listed on our website. However, in some instances, our artists prefer to keep prices private, and only share them with customers who are genuinely interested in making the purchase. Thus, if you would like to know the price of a certain artwork, please click on Get in Touch  and we will reach out to you with the pricing information for the selected item.",
          open: false
        },
        {
          question:"How do I care for my art?",
          answer: {
            list: [
                "Do not expose your art to direct sunlight",
                "Every other month lightly dust the artwork using a microfibre cloth or a soft fibre duster",
                "Avoid hanging art in rooms such as bathrooms or kitchen, which can be damp or humid and cause mold to grow",
                "Ensure your artwork is hung securely. Check on hooks, nails and wires at regular intervals",
                "If a piece of art gets damaged do not try to mend it yourself. In such cases it is best to reach out to a professional"
            ]
          },
          open: false
        },
        {
          question:"I am an artist. Would you help me display and sell my paintings?",
          answer: "  The ethos of Moksh is to support and promote emerging artists. You can email your complete profile and images of your artworks to artist@mokshartgallery.com and we will get back to you at the earliest.",
          open: false
        }
    ];

    const [faqs, setFaqs] = useState(faqContent);

    const toggleFAQ = (index) => {
        setFaqs(
            faqs.map((faq, i) => {
                // console.log("faq");
            if (i === index) {
                // console.log(i === index,"i === index", i, "idex",index);
              faq.open = !faq.open;
            } else {
                // console.log("else case");
              faq.open = false;
            }
            
            // console.log('faq print', faq);
            return faq;
          })
        );
    };

return (
    <>  
        <div className="faqs-root" style={{marginTop: "95px"}}>

            <div className="faqs-content-wrapper">
                <div className="faqs-sqs-layout">
                    <h2>Faq</h2>
                </div>
            </div>

            <div className="faqs-html-content-wrapper">
                <div className="faqs-sqs-layout">
                    <div className="faqs">
                        {faqs.map((faq, index) => (
                            <div
                                className={"faq " + (faq.open ? "open" : "")}
                                key={index}
                                onClick={() => toggleFAQ(index)}
                                >
                                <div className="faq-question">{faq.question}</div>
                                {typeof faq.answer === 'object' && faq.answer.list ? (
                                    <ul className="faq-answer">
                                        {faq.answer.list.map((item, subIndex) => (
                                            <li key={subIndex}>{item}</li>
                                        ))}
                                    </ul>
                                    ) : (
                                    <div className="faq-answer">
                                        {faq.answer.split(' ').map((part, subIndex) => (
                                        part.toLowerCase() === 'get' && faq.answer.split(' ')[subIndex + 1]?.toLowerCase() === 'in' && faq.answer.split(' ')[subIndex + 2]?.toLowerCase() === 'touch' ? (
                                            <strong key={subIndex}>Get in Touch </strong>
                                        ) : /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g.test(part) ? (
                                            <a className="faq-content-a" key={subIndex} href={`mailto:${part}`}>
                                            {part} &nbsp;
                                            </a>
                                        ) : /\+\d{2}\s\d{5}\s\d{5}/g.test(part) ? (
                                            <a className="faq-content-a" key={subIndex} href={`tel:${part.replace(/\D/g, '')}`}>
                                            {part} &nbsp;
                                            </a>
                                        ) : (
                                            <span key={subIndex}>{part} </span>
                                        )
                                        ))}
                                    </div>
                                    )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default Faq;