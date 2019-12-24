import React from 'react';
import store from '../store';
import QuantityBox from './QuantityBox';
import $ from 'jquery';

export default class CartItem extends React.Component {
    remove = (e, prod) => {
        $(e.parentNode).animate({
            marginLeft: "-2000", marginBottom: "-130", opacity: 0
        }, 400, function() {
            store.dispatch({
                type: "REMOVE_PRODUCT", product: prod.product,
                price: Number(prod.product.price), quantity: prod.quantity
            })
        })
    }
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    render(){
        const {price, img, title} = this.props.item.product;
        let totPrice = price * this.props.item.quantity;
        return (
            <div className="cart-item">
                <div className="title">{title}</div>
                <div className="price">${totPrice.toFixed(2)}</div>
                <img alt={title} className="cart-img" src={img} />
                <QuantityBox value={this.props.item} product={this.props.item.product} />
                <button onClick={(e) => this.remove(e.target, this.props.item)}>Delete</button>
            </div>
        )
    }
}