import React, { Component } from 'react';
import SubTotal from './SubTotal';
import CheckoutForm from './CheckoutForm';

export default class CheckoutPage extends Component {
    render() {
        return (
            <div className="checkout-wrapper">
                <CheckoutForm />
                <SubTotal/>
            </div>
        )
    }
}