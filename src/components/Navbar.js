import React from 'react';
import { Link } from 'react-router-dom';
import TopSection from './TopSection';
import SignInModal from './SignInModal';
import $ from 'jquery';
import store from '../store';
import CenterNavBar from './CenterNavBar';
import LeftNavBar from './LeftNavBar';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 1}
    }
    componentDidMount() {
        $(".sign-in-modal").fadeOut(200);
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
        this.showNav();
    }
    hideNav(){
        $(".center-navbar").hide();
        $(".icon-hide").hide();
    }
    showNav() {
        $(".center-navbar").fadeIn(250);
        $(".icon-hide").fadeIn(250);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    menu = (e) => {
        this.setState({clicks: this.state.clicks + 1});
        if(this.state.clicks % 2 === 0) {
            this.showNav();
            $(e.target).css("transform", "rotateZ(90deg)")
        } else {
            this.hideNav();
            $(e.target).css("transform", "rotateZ(0deg)")
        }
    }
    render() {
        return (<>
                <SignInModal className="sign-in-modal"/>
                <div className="nav-bar">
                    <LeftNavBar/>
                    <CenterNavBar />
                    <div className="right">
                        <div className="icon-wrapper icon-hide">
                            <Link to="/cart" className="link"><i className="fas fa-shopping-cart"></i></Link>
                            <div>{store.getState().apiDisplay.numItemsInCart}</div>
                        </div>
                        <Link to="/settings" className="link icon-hide"><i className="fas fa-cogs"></i></Link>
                        <Link to="/wish-list" className="icon-hide"><i className="fas fa-heart"></i></Link>
                        <i className="fas fa-bars burger-test" onClick={this.menu}></i>
                    </div>
                </div>
                <TopSection />
        </>)
    }
}