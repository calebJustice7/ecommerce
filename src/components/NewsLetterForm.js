import React from 'react';

export default function NewsLetterForm(){
    return (
        <form className="newsletter-wrapper">
            <input type="text" placeholder="Your Email Address" className="newsletter-input" />
            <button className="newsletter-btn">SUBSCRIBE TO OUR NEWSLETTER</button>
        </form>
    )
}