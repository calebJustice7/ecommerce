import React from 'react';
import $ from 'jquery';

export default class CheckoutSuccessful extends React.Component {
    componentDidMount() {
        $(".subtotal-wrapper").hide();
    }
    componentWillUnmount() {
        $(".subtotal-wrapper").show();
    }
    render() {
        return (
            <div className="checkout-success-wrapper">
                <div>
                    <i class="fas fa-check"></i>
                    <div>Thank You For Your Purchase!</div>
                </div>
            </div>
        )
    }
}