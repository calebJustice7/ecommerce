import React from 'react';
import store from '../store';
import { Link } from 'react-router-dom';
import CartMessage from './CartMessage';
import $ from 'jquery';

export default class ProductInfoPage extends React.Component {
    addToCart = () => {
        $("#target").animate({marginLeft: 100}, 800);
        store.dispatch({
            type: "ADD_PRODUCT", product: store.getState().cartReducer.prodToDisplay,
            price: Number(store.getState().cartReducer.prodToDisplay.price)
        })
        setTimeout(() => {
            $("#target").animate({marginLeft: "-1000px"}, 500);
        }, 2500)
    }
    render() {
        let {price, img, title, description, rating} = store.getState().cartReducer.prodToDisplay;
        return (
            <div className="display-product">
                <CartMessage />
                <div className="title">{title}</div>
                <img alt={title} src={img} className="img"/>
                <div className="description">{description}</div>
                <div className="price">${price}</div>
                <div className="rating">{rating}</div>
                <Link className="link" to="/products"><button className="return">Back To Products</button></Link>
                <button onClick={this.addToCart}>Add to cart</button>
            </div>
        )
    }
}