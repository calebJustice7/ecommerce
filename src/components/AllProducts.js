import React from 'react';
import store from '../store';
import Product from './Product';
import FilterBar from './FilterBar';

export default class AllProducts extends React.Component {
    render(){
        return (
            <div className="products-page-wrapper-total">
                <FilterBar/>
                <h3 className="product-title">Products</h3>
                <div ref="target" className="products-page-wrapper two-row">
                    {store.getState().cartReducer.apiProducts.map((item, index) => (
                        <Product item={item} key={index} />
                    ))}
                </div>
            </div>
        )
    }
}