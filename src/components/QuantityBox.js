import React from 'react';
import store from '../store';

export default class QuantityBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: 1
        }
    }
    change = (prod, e) => {
        store.dispatch({
            type: "CHANGE_QUANTITY",
            product: prod,
            quantity: Number(e),
            price: Number(prod.price)
        })
    }
    render(){
        return (
            <select value={this.props.value.quantity} onChange={(e) => this.setState({quantity: e.target.value}, 
                this.change(this.props.product, e.target.value)
            )}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        )
    }
}