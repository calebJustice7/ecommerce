import React from 'react';
import NewsLetterForm from './NewsLetterForm';

function Footer(){
        return (
            <>
            <NewsLetterForm />
            <div className="footer-wrapper">
                <div className="left">
                    <div>Contact Us</div>
                    <div>Return Policy</div>
                    <div>Package tracker</div>
                    <div>Job Openings</div>
                    <div>About us</div>
                    <div>Blog</div>
                </div>
                <div className="center-footer">
                    <div className="title">Follow us on social Media</div>
                    <div><i className="fab fa-facebook"></i>Facebook</div>
                    <div><i className="fab fa-instagram"></i>Instagram</div>
                    <div><i className="fab fa-twitter"></i>Twitter</div>
                </div>
                <div className="right">
                    <div>Payment Methods</div>
                    <img src="https://image.flaticon.com/sprites/new_packs/196535-payment-method.png" alt="payment methods"/>
                </div>
            </div>
            </>
        )
}

export default Footer;