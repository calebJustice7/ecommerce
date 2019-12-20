import React from 'react';
import CartItem from './CartItem';
import SubTotal from './SubTotal';
import store from '../store';
import {Link} from 'react-router-dom';

class CartPage extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    render(){
        if(store.getState().apiDisplay.productsList.length === 0) {
            return (<div className="nothing-in-cart">
                <div className="content">
                    <h1 className="center">Nothing In Cart</h1>
                    <div className="message">There is currently nothing in your cart</div>
                    <Link to="/products"><button>Go to Products</button></Link>
                    <div className="loading"></div>
                </div>
            </div>)
            
        } else {
            if(store.getState().userSignIn.signedIn === false) {
                return <h1>Not signed in</h1>
            } else {
                return (
                    <div className="cart-page-wrapper">
                        <div>
                            {store.getState().apiDisplay.productsList.map((item) => {
                                return <CartItem key={item.product.id} quantity={item.quantity} item={item}/>
                            })}
                        </div>
                        <SubTotal/>
                    </div>
                )
            }
        }
    }
}

export default CartPage;