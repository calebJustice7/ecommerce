import React from 'react';
import $ from 'jquery';
import CheckoutSuccessful from './CheckoutSuccessful';
import DiscountCodeForm from './DiscountCodeForm';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checkedOut: false}
    }
    componentDidMount() {
        $(".loading-wrapper").hide();
    }
    submit = (e) => {
        e.preventDefault();
        $(".loading-wrapper").fadeIn(200);
        setTimeout(() => {
            $(".loading-wrapper").fadeOut(200);
            this.setState({checkedOut: true})
        }, 2000)
    }
    render(){
        if(this.state.checkedOut === false) {
            return (
                <div className="checkout-form-wrapper">
                    <form>
                        <div className="check-input-wrapper">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter Email address"/>
                        </div>
                        <div className="check-box-wrapper">
                            <label>Does this order contain a gift?</label>
                            <input type="checkbox"/>
                        </div>
                        <div className="check-input-wrapper">
                            <label>Country</label>
                            <input type="text" placeholder="Enter Country"/>
                        </div>
                        <div className="check-input-wrapper">
                            <label>State</label>
                            <input type="text" placeholder="Enter State"/>
                        </div>
                        <div className="check-input-wrapper">
                            <label>Street Address</label>
                            <input type="text" placeholder="Enter Street Address"/>
                        </div>
                        <DiscountCodeForm/>
                        <div className="terms-wrapper">
                            <input type="checkbox"/>
                            <div>Do you agree to our <b>Terms And Conditions?</b></div>
                        </div>
                        <button id="final-submit-btn" onClick={this.submit}>Checkout</button>
                        <div className="loading-wrapper">
                            <div className="loading"></div>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return <CheckoutSuccessful />
        }
    }
}

export default CheckoutForm;