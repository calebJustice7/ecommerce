import React from 'react';
import {Link} from 'react-router-dom';

function HomeImage() {
        return (
            <div className="home-image-wrapper">
                <div className="content">
                    <h1>2019</h1>
                    <h3>Brand New Products.</h3>
                    <Link to="/products" className="link-btn"><button>SEE MORE</button></Link>
                    <h2>Scroll Down to View More</h2>
                </div>
            </div>
        )
}

export default HomeImage;