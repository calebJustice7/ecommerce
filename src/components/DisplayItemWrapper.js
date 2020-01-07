import React from 'react';
import store from '../store';
import DisplayItem from './DisplayItem';

export default class DisplayItemWrapper extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
        fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
        .then(res => res.json())
        .then(json => {
            store.dispatch({
                type: "API_ADD",
                apiProductsArr: json
            })
        })
      }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render(){
        if(store.getState().cartReducer.itemsLoaded){
            return (
                <div className="display-wrapper home-page">
                    <DisplayItem item={store.getState().cartReducer.apiProducts[0]}/>
                    <div className="display-img">
                        <img alt={store.getState().cartReducer.apiProducts[0].title} src="https://toshiba-tv.com/files/perspective-2_54F0FC026494.png"/>
                    </div>
                </div>
            )
        } else {return <div className="loading"></div>}
    }
}