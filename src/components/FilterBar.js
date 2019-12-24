import React from 'react';
import ItemCategory from './ItemCategory';

export default class FilterBar extends React.Component {
    updateClass = (e) => {
        const el = document.querySelector(".products-page-wrapper");
        el.classList.remove("two-row");
        el.classList.remove("three-row");
        el.classList.remove("four-row");
        el.classList.add(e.target.value);
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
                <ItemCategory/>
            </div>
        )
    }
}