import React from 'react';
import SettingsModal from './SettingsModal';
import $ from 'jquery';
import store from '../store/index';

class SettingsPage extends React.Component {
    componentDidMount() {
        $(".modal").hide();
        store.subscribe(() => this.forceUpdate());
    }
    show() {
        $(".modal").fadeIn(300);
    }
    showSignIn(){
        if(store.getState().userSignIn.signedIn === false){
            $(".sign-in-modal").show(200);
        } else {
            store.dispatch({
                type: "SIGN_OUT"
            })
        }
    }
    render() {
        let text = store.getState().userSignIn.signedIn ? 'Sign Out' : 'Sign in';
        return (
            <div className="settings-page-wrapper">
                <SettingsModal />
                <div class="settings-button-wrapper">
                    <div>
                        <button onClick={this.show}>Create Account</button>
                        <button onClick={this.showSignIn}>{text}</button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingsPage;