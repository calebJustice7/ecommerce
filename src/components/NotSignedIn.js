import React from 'react';
import {Link} from 'react-router-dom';

export default function NothingInCart() {
    return (
        <div className="nothing-in-cart">
            <div className="content">
                <h1 className="center">Not Signed In</h1>
                <div className="message">You are currently not signed in</div>
                <Link to="/settings"><button>Sign in</button></Link>
                <div className="loading"></div>
            </div>
        </div>
    )
}