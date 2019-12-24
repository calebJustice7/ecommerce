import React from 'react';
import {Link} from 'react-router-dom';

export default function NothingInCart() {
    return (
        <div className="nothing-in-cart">
            <div className="content">
                <h1 className="center">Nothing In Cart</h1>
                <div className="message">There is currently nothing in your cart</div>
                <Link to="/products"><button>Go to Products</button></Link>
                <div className="loading"></div>
            </div>
        </div>
    )
}