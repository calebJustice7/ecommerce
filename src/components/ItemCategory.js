import React from 'react';
import $ from 'jquery';
import store from '../store';

export default class ItemCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "all products"
        }
    }
    select = (e) => {
        $('.item').removeClass('selected')
        $(e.target).addClass("selected");
        store.dispatch({type: "CHANGE_CATEGORY",category: e.target.innerHTML.toLowerCase()})
        this.setState({selected: e.target.innerHTML.toLowerCase()})
    }
    render() {
        return (
                <div className="category-wrapper">
                    <div onClick={this.select} className='item selected'>All Products</div>
                    <div onClick={this.select} className="item">Phone</div>
                    <div onClick={this.select} className="item">Tv</div>
                    <div onClick={this.select} className="item">Small-appliance</div>
                    <div onClick={this.select} className="item">Refrigerator</div>
                    <div onClick={this.select} className="item">Watch</div>
                    <div onClick={this.select} className="item">Action-Camera</div>
                </div>
        )
    }
}