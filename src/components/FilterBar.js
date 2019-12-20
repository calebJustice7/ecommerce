import React from 'react';
import $ from 'jquery';
import store from '../store';

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'all products'
        }
    }
    updateClass = (e) => {
        const el = document.querySelector(".products-page-wrapper");
        el.classList.remove("two-row");
        el.classList.remove("three-row");
        el.classList.remove("four-row");
        el.classList.add(e.target.value);
    }
    select = (e) => {
        $('.item').removeClass('selected')
        $(e.target).addClass("selected");
            store.dispatch({
                type: "CHANGE_CATEGORY",
                category: e.target.innerHTML.toLowerCase()
            })
            this.setState({
                selected: e.target.innerHTML.toLowerCase()
            })
    }
    render() {
        return (
            <div className="filter-bar-wrapper">
                <select onChange={this.updateClass}>
                    <option value="two-row">FILTER LAYOUT</option>
                    <option value="two-row">Two row</option>
                    <option value="three-row">Three row</option>
                    <option value="four-row">Four row</option>
                </select>
                <div className="category-wrapper">
                    <div onClick={this.select} className='item selected'>All Products</div>
                    <div onClick={this.select} className="item">Phone</div>
                    <div onClick={this.select} className="item">Tv</div>
                    <div onClick={this.select} className="item">Small-appliance</div>
                    <div onClick={this.select} className="item">Refrigerator</div>
                    <div onClick={this.select} className="item">Watch</div>
                    <div onClick={this.select} className="item">Action-Camera</div>
                </div>
            </div>
        )
    }
}

export default FilterBar;