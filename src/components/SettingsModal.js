import React from 'react'
import store from '../store';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class SettingsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            user: '',
            pass: '',
        }
    }
    updateUser = (e) => {
        this.setState({user: e.target.value})
    }
    updatePass = (e) => {
        this.setState({pass: e.target.value})
    }
    createAccount = () => {
        if(this.state.user !== '' && this.state.pass !== '') {
            store.dispatch({
                type: "ADD_USER",
                name: this.state.user,
                pass: this.state.pass,
                id: this.state.id
            })
            $('.user').css("border-color", 'green');
            $(".pass").css("border-color", 'green');
            this.setState({user: '', pass: '', id: this.state.id + 1});
            $(".modal").fadeOut(400);
        } else {
            $('.user').css("border-color", 'red');
            $(".pass").css("border-color", 'red');
        }
    }
    render() {
        return (
            <div id="modal-container" className="modal-container modal">
            <div className="modal-content">
            <Link to="/"><div className="close">X</div></Link>
                <div className="sign-in">
                    <div>Create Account</div>
                    <i className="fas fa-users-cog"></i>
                </div>
                <div className="modal-input-wrapper">
                    <div className="modal-input">
                        <label>Username</label>
                        <input value={this.state.user} id="username" className="user" onChange={this.updateUser} type="text" placeholder="User name" />
                    </div>
    
                    <div className="modal-input">
                        <label>Password</label>
                        <input value={this.state.pass} id="password" className="pass" onChange={this.updatePass} type="password" placeholder="Password" />
                    </div>
                    <div className="sign-in-btn">
                        <button id="sign-in" onClick={this.createAccount}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SettingsModal;