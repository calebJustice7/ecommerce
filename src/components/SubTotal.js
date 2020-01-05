import React from 'react';
import store from '../store';

export default class SubTotal extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render(){
        let totPrice = store.getState().apiDisplay.totalPrice;
        let wShipping = totPrice + 10;
        return (
            <div className="subtotal-wrapper">
                <div className="sub-title">
                    Order Summary
                </div>
                <div className="body">
                    <div className="subtotal">
                        <div>Cart Subtotal</div>
                        <div>{`$${totPrice.toFixed(2)}`}</div>
                    </div>
                    <div className="shipping">
                        <div>Shipping</div>
                        <div>{`$10`}</div>
                    </div>
                    <div className="order-total">
                        <div>Order Total</div>
                        <div>{`$${wShipping.toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        )
    }
}