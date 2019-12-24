import React from 'react';
import {Link} from 'react-router-dom';
import store from '../store';
import $ from 'jquery';

export default class LeftNavBar extends React.Component {
    signIn = () => {
        if(store.getState().userSignIn.signedIn === false) {$(".sign-in-modal").fadeIn(200)}
        else {store.dispatch({type: "SIGN_OUT"})}
    }
    render() {
        let welcome = store.getState().userSignIn.signedIn ? `Welcome Back ${store.getState().userSignIn.currentUser.name}` : 'Not Signed in'
        let signInOut = store.getState().userSignIn.signedIn ? 'Sign out' : 'Sign in'
        return (
            <div className="left">
                <div className="link">{welcome}</div>
                <div className="sign-in-nav">
                    <Link to="/settings"><div>Register</div></Link>
                    <div> / </div>
                    <div onClick={this.signIn}>{signInOut}</div>
                </div>
            </div>
        )
    }
}