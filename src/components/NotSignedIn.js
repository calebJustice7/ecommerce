import React from 'react';
import {Link} from 'react-router-dom';

export default function NothingInCart() {
    return (
        <div className="nothing-in-cart">
            <div className="content">
                <div className="title-content">Not signed in</div>
                <div className="message">You are currently not signed in</div>
                <Link to="/settings"><button>Sign in</button></Link>
                <div className="loading"></div>
            </div>
        </div>
    )
}