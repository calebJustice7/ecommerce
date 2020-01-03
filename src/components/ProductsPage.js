import React from 'react';
import store from '../store';
import $ from 'jquery';
import Product from './Product';
import FilterBar from './FilterBar';
import AllProducts from './AllProducts';
import SearchFilterProducts from './SearchFilterProducts';

export default class ProductsPage extends React.Component {
    componentDidMount() {
        $(".search-bar-wrapper").show(200);
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount(){
        store.dispatch({type: "CHANGE_CATEGORY",category: 'all products'})
        $(".search-bar-wrapper").hide(200);
        this.unsubscribe();
    }
    render() {
        let c = store.getState().cartReducer.category;
        let sC = store.getState().cartReducer.searchCategory;
        if(c === null) {
            if(sC === null) {return <AllProducts/>} 
            else {return <SearchFilterProducts/>}
        } else {
            let x = store.getState().cartReducer.apiProducts.filter(item => item.category === c);
            return (
                <div className="products-page-wrapper-total">
                    <FilterBar/>
                    <h3 className="product-title">Products</h3>
                    <div ref="target" className="products-page-wrapper two-row">
                    {x.map((item) => (<Product item={item} key={item.id} />))}
                    </div>
                </div>
            ) 
        }
    }
}