import React from 'react';
import $ from 'jquery';
import store from '../store/index';

export default class SignInModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: ''
        }
    }
    updateUser = (e) => {
        this.setState({user: e.target.value})
    }
    updatePass = (e) => {
        this.setState({pass: e.target.value})
    }
    exit() {
        $('.sign-in-modal').fadeOut(200);
    }
    signIn = () => {
        const {user, pass} = this.state;
        if(user !== '' && pass !== '') {
            store.dispatch({
                type: "SIGN_IN",
                name: user,
                pass: pass
            })
            if(store.getState().userSignIn.signedIn === true){
                setTimeout(() => {
                    $(".sign-in-modal").hide(200);
                    $(".user-name").css("border-color", "grey");
                    $(".pass-word").css("border-color", "grey");
                    $(".sign-in-success").hide();
                }, 2000)  
                $(".sign-in-success").show();
                this.setState({user: '', pass: ''})
                $(".user-name").css("border-color", "green");
                $(".pass-word").css("border-color", "green");
            } else {
                $(".user-name").css("border-color", "red");
                $(".pass-word").css("border-color", "red");
            }
        }
    }
    render() {
        return (
            <div id="modal-container" className="modal-container sign-in-modal">
            <div className="modal-content">
            <div onClick={this.exit} className="close">X</div>
                <div className="sign-in">
                    <div>Sign In</div>
                    <i className="fas fa-store"></i>
                </div>
                <div className="modal-input-wrapper">
                    <div className="modal-input">
                        <label>Username</label>
                        <input value={this.state.user} id="username" onChange={this.updateUser} type="text" className="user-name" placeholder="User name" />
                    </div>
    
                    <div className="modal-input">
                        <label>Password</label>
                        <input value={this.state.pass} id="password" onChange={this.updatePass} type="password" className="pass-word" placeholder="Password" />
                    </div>
                    <div className="sign-in-success">Sign In Successful!</div>
                    <div className="sign-in-btn">
                        <button id="sign-in" onClick={this.signIn}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}