import React from 'react';
import store from '../store';
import $ from 'jquery';

class WishListItem extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    addToCart = (e, product) => {
        store.dispatch({
            type: "ADD_PRODUCT",product: product, price: Number(product.price)
        }) 
        setTimeout(() => {store.dispatch({
                type: "WISHLIST_REMOVE",product: product})
        }, 500)
    }
    remove = (product) => {
        store.dispatch({
            type: "WISHLIST_REMOVE",product: product
        })
    }
    render() {
        let {price, img, title} = this.props.product;
        return (
            <div className="wish-list-item-wrapper">
                <img src={img} className="wish-img"/>
                <div className="wish-title">{title}</div>
                <div className="wish-price">{price}</div>
                <button onClick={(e) => this.addToCart(e.target, this.props.product)}>Move to Cart</button>
                <button onClick={() => this.remove(this.props.product)}>Delete</button>
            </div>
        )
    }
}
export default WishListItem;