import React from 'react';
import $ from 'jquery';
import store from '../store';

export default class ItemCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "all products",
            categories: ['All Products', 'Phone', 'Tv', 'Small-appliance', 'Refrigerator', 'Watch', 'Action-Camera']
        }
    }
    componentDidMount() {
        document.getElementsByClassName("item")[0].classList.add("selected");
    }
    select = (e) => {
        $('.item').removeClass('selected')
        store.dispatch({type: "CHANGE_CATEGORY",category: e.target.innerHTML.toLowerCase()})
        this.setState({selected: e.target.innerHTML.toLowerCase()})
        $(e.target).addClass("selected");
    }
    render() {
        return (
                <div className="category-wrapper">
                    {this.state.categories.map((item, idx) => (
                        <div className="item" onClick={this.select} key={idx}>{item}</div>
                    ))}
                </div>
        )
    }
}