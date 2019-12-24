import React from 'react';
import store from '../store';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
    }
    updateVal = (e) => {
        this.setState({inputVal: e.target.value})
    }
    handleSubmit = () => {
        let x = this.state.inputVal;
        this.setState({inputVal: ''})
        store.dispatch({type: "SEARCH_CATEGORY",search: x})
    }
    render() {
        return (
            <div className="search-bar-wrapper">
                <input onSubmit={this.handleSubmit} onChange={this.updateVal} className="input-search" placeholder="search items" value={this.state.inputVal}/>
                <i onClick={this.handleSubmit} className="fas fa-search"></i>
            </div>
        )
    }
}