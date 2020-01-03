import React from 'react';
import SettingsModal from './SettingsModal';
import $ from 'jquery';
import store from '../store/index';

export default class SettingsPage extends React.Component {
    componentDidMount() {
        $(".modal").fadeOut(0);
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    show() {
        $(".modal").fadeIn(300);
    }
    showSignIn(){
        if(store.getState().userSignIn.signedIn === false){
            $(".sign-in-modal").fadeIn(200);
        } else {
            store.dispatch({type: "SIGN_OUT"})
        }
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        let text = store.getState().userSignIn.signedIn ? 'Sign Out' : 'Sign in';
        return (
            <div className="settings-page-wrapper">
                <SettingsModal />
                <div className="settings-button-wrapper">
                    <div>
                        <button onClick={this.show}>Create Account</button>
                        <button onClick={this.showSignIn}>{text}</button> 
                    </div>
                </div>
            </div>
        )
    }
}