import React from 'react';
import store from '../store';
import $ from 'jquery';

export default class DisplayItem extends React.Component {
    addToCart = (product) => {
        $("#target").animate({marginLeft: 100}, 500);
        store.dispatch({
            type: "ADD_PRODUCT", product: product, price: Number(product.price)
        })
        setTimeout(() => {
            $("#target").animate({marginLeft: "-1000px"}, 500);
        }, 1500)
    }
    render() {
        return (
                <div className="wrapper">
                    <button className="exclusive">Exclusive!</button>
                    <div className="display-title">{this.props.item.title}</div>
                    <div className="display-description">{this.props.item.description}</div>
                    <div className="buttons-wrapper">
                        <button onClick={() => this.addToCart(this.props.item)}>Add to cart</button>
                        <button>{this.props.item.price}</button>
                    </div>
                </div>
        )
    }
}