import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

export default class CenterNavBar extends React.Component {
    render() {
        return (
            <div className="center">
                <Link to="/" className="link"><div>Home</div></Link>
                <Link to="/products" className="link"><div>Products</div></Link>
                <SearchBar />
            </div>
        )
    }
}