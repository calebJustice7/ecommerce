import React from 'react';
import $ from 'jquery';
import store from '../store';

class DiscountCodeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            discountCode: 'ECOMMERCE20'
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    handleInputChange = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.inputVal === this.state.discountCode) {
            this.applyDiscount();
        } else {
            $(".discount-message").slideDown(200);
            $(".discount-message").html("Code not found")
            $(".discount-message").css("color", "red")
        }
        this.setState({
            inputVal: ''
        })
    }
    applyDiscount() {
        if(store.getState().apiDisplay.discountCodesApplied === 0){
            $(".discount-message").slideDown(200);
            $(".discount-message").html("Discount applied!")
            $(".discount-message").css("color", "green");
            store.dispatch({
                type: "APPLY_DISCOUNT"
            })
        } else {
            $(".discount-message").slideDown(200);
            $(".discount-message").html("Discount Code Already Used")
            $(".discount-message").css("color", "goldenrod");
        }
    }
    render() {
        return (
            <div className="check-input-wrapper">
                <label>Discount Code</label>
                <div>
                    <input className="discount-code-input" type="text" value={this.state.inputVal} 
                    onChange={this.handleInputChange} 
                    placeholder="Enter discount code"/>
                    <div className="discount-message">Invalid</div>
                </div>
                <button className="apply-discount" onClick={this.handleSubmit}>Apply Discount</button>
            </div>
        )
    }
}

export default DiscountCodeForm;