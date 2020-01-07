import React from 'react';
import store from '../store/index';
import WishListItem from './WishListItem';

class WishListPage extends React.Component {
    componentWillMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe(); 
    }
    render() {
        console.log(store.getState().wishList.wishList);
        return (
            <div className="wish-list-page-wrapper">
                {store.getState().wishList.wishList.map((item, idx) => (
                    <WishListItem product={item} key={idx}/>
                ))}
            </div>
        )
    }
}

export default WishListPage;