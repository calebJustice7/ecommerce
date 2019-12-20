import React from 'react';
import store from '../store';

import Product from './Product';
import FilterBar from './FilterBar';

class ProductsPage extends React.Component {
    constructor(props){
        super(props);
        store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount(){
        store.dispatch({
            type: "CHANGE_CATEGORY",
            category: 'all products'
        })
    }
    render() {
        let c = store.getState().cartReducer.category;
        if(c == null) {
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
        } else {
            let x = store.getState().cartReducer.apiProducts.filter(item => item.category === c);
            return (
                <div className="products-page-wrapper-total">
                                    <FilterBar/>
                <h3 className="product-title">Products</h3>
                <div ref="target" className="products-page-wrapper two-row">
                {x.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
                </div>
                </div>
            ) 
        }
    }
}
 

export default ProductsPage;