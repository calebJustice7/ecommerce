import React from 'react';
import CartItem from './CartItem';
import SubTotal from './SubTotal';
import store from '../store';
import NotSignedIn from './NotSignedIn';
import NothingInCart from './NothingInCart';
import {Link} from 'react-router-dom';

export default class CartPage extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    render(){
        if(store.getState().apiDisplay.productsList.length === 0) {return <NothingInCart /> } 
        else {
            if(store.getState().userSignIn.signedIn === false) {return <NotSignedIn />}
                else {
                return (
                    <div className="cart-page-wrapper">
                        <div>
                            {store.getState().apiDisplay.productsList.map((item) => {
                                return <CartItem key={item.product.id} quantity={item.quantity} item={item}/>
                            })}
                        </div>
                        <div className="right-side">
                            <SubTotal/>
                            <Link to="/checkout" className="link"><button className="check-out">CHECK OUT</button></Link>
                        </div>
                    </div>
                )
            }
        }
    }
}