import React from 'react';
import store from '../store';
import $ from 'jquery';
import { Link } from 'react-router-dom';

export default class Product extends React.Component {
    addToCart = (product) => {
        $("#target").animate({marginLeft: 100}, 500);
        store.dispatch({
            type: "ADD_PRODUCT", product: product, price: Number(product.price)
        })
        setTimeout(() => {
            $("#target").animate({marginLeft: "-1000px"}, 500);
        }, 1500)
    }
    displayItem = (prod) => {
        store.dispatch({
            type: "DISPLAY_PRODUCT", product: prod
        })
    }
    render(){ 
        const {title, price, img, category} = this.props.item;
        return (
            <div className="product-item-wrapper">
                <img alt={title} src={img} className="product-img" />
                <div className="category">{category}</div>
                <div className="title">{title}</div>
                <div className="price">${price}</div>
                <button className="cart-btn" onClick={() => this.addToCart(this.props.item)}>Add to Cart</button>
                <Link to={`product-info/${this.props.item.id}`} className="link"><button onClick={() => this.displayItem(this.props.item)} className="more-info-btn">More info</button></Link>
            </div>
        )
    }
}