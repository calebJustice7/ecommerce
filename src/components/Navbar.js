import React from 'react';
import {Link} from 'react-router-dom';
import TopSection from './TopSection';
import SignInModal from './SignInModal';
import $ from 'jquery';
import store from '../store';

class Navbar extends React.Component {
    componentDidMount() {
        $(".sign-in-modal").hide();
        store.subscribe(() => this.forceUpdate());
    }
    signIn = () => {
        if(store.getState().userSignIn.signedIn === false){
            $(".sign-in-modal").show(200);
        } else {
            store.dispatch({
                type: "SIGN_OUT"
            })
        }
    }
    render() {
        let welcome = store.getState().userSignIn.signedIn ? `Welcome Back ${store.getState().userSignIn.currentUser.name}` : 'Not Signed in'
        let signInOut = store.getState().userSignIn.signedIn ? 'Sign out' : 'Sign in'
        return (
            <>
                <SignInModal className="sign-in-modal"/>
                <div className="nav-bar">
                    <div className="left">
                        <div className="link">{welcome}</div>
                        <div className="sign-in-nav">
                            <Link to="/settings"><div>Register</div></Link>
                            <div> / </div>
                            <div onClick={this.signIn}>{signInOut}</div>
                        </div>
                    </div>
                    <div className="center">
                        <Link to="/" className="link"><div>Home</div></Link>
                        <Link to="/products" className="link"><div>Products</div></Link>
                    </div>
                    <div className="right">
                        <div className="icon-wrapper">
                            <Link to="/cart" className="link"><i className="fas fa-shopping-cart"></i></Link>
                            <div>{store.getState().apiDisplay.numItemsInCart}</div>
                        </div>
                        <Link to="/settings" className="link"><i className="fas fa-cogs"></i></Link>
                    </div>
                </div>
                <TopSection />
            </>
        )
    }
}

export default Navbar;