import React from 'react';
import store from '../store/index';
import WishListItem from './WishListItem';

class WishListPage extends React.Component {
    render() {
        console.log(store.getState().wishList.wishList);
        return (
            <div>
                {store.getState().wishList.wishList.map((item, idx) => (
                    <WishListItem product={item} key={idx}/>
                ))}
            </div>
        )
    }
}

export default WishListPage;