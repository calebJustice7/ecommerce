import React from 'react';
import { Link } from 'react-router-dom';
import TopSection from './TopSection';
import SignInModal from './SignInModal';
import $ from 'jquery';
import store from '../store';
import CenterNavBar from './CenterNavBar';
import LeftNavBar from './LeftNavBar';

export default class Navbar extends React.Component {
    componentDidMount() {
        $(".sign-in-modal").fadeOut(200);
        store.subscribe(() => this.forceUpdate());
        // $(".burger-test").hide();
    }
    render() {
        return (
            <div>
                <SignInModal className="sign-in-modal" />
                <div className="nav-bar">
                    <LeftNavBar />

                    <div className="burger-test">
                    <CenterNavBar />
                    <div className="right">
                        <div className="icon-wrapper">
                            <Link to="/cart" className="link"><i className="fas fa-shopping-cart"></i></Link>
                            <div>{store.getState().apiDisplay.numItemsInCart}</div>
                        </div>
                        <Link to="/settings" className="link"><i className="fas fa-cogs"></i></Link>
                    </div>
                    </div>

                </div>
                <TopSection />
            </div>
        )
    }
}