import React from 'react';
import $ from 'jquery';

export default class CheckoutSuccessful extends React.Component {
    componentDidMount() {
        $(".subtotal-wrapper").hide();
        $(".checkout-success-wrapper").animate({
            opacity: 0
        },0);
        $(".checkout-success-wrapper").animate({
            opacity: 1,
            marginLeft: "0"
        }, 2000)
    }
    componentWillUnmount() {
        $(".subtotal-wrapper").show();
    }
    render() {
        return (
            <div className="checkout-success-wrapper">
                <div>
                    <i className="fas fa-check"></i>
                    <div>Thank You For Your Purchase!</div>
                </div>
            </div>
        )
    }
}