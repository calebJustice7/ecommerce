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
                    $(".user-name").css("border-color", "grey");
                    $(".pass-word").css("border-color", "grey");
                    $(".sign-in-modal").fadeOut(400);
                    $(".sign-in-success").hide();
                }, 2000)
                this.setState({user: '', pass: ''})
                $(".user-name").css("border-color", "green");
                $(".pass-word").css("border-color", "green");
                $(".sign-in-success").show(350);
            } else {
                $(".user-name").css("border-color", "red");
                $(".pass-word").css("border-color", "red");
            }
        }
    }
    render() {
        return (
            <div id="modal-container" className="modal-container sign-in-modal">
            <div className="sign-in-modal-content">
            <div onClick={this.exit} className="close">X</div>
                <div className="sign-in">
                    <div>SIGN IN</div>

                </div>
                <div className="sign-in-modal-input-wrapper">
                    <div className="sign-in-modal-input">
                    <i className="fas fa-user"></i>
                        <input value={this.state.user} id="username" onChange={this.updateUser} type="text" className="user-name" placeholder="User name" />
                    </div>
    
                    <div className="sign-in-modal-input">
                    <i className="fas fa-key"></i>
                        <input value={this.state.pass} id="password" onChange={this.updatePass} type="password" className="pass-word" placeholder="Password" />
                    </div>
                    <div className="sign-in-success">Sign in successful!</div>
                    <div className="sign-in-btn">
                        <button id="sign-in" onClick={this.signIn}>SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}