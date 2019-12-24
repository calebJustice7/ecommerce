import React from 'react';

class TopSection extends React.Component {
    render(){
        return (
            <div className="top-section">
                <div className="one-third-section">
                    <i className="fas fa-truck"></i>
                    <div>Free shipping on orders over $1000!</div>
                </div>
                <div className="one-third-section">
                    <i className="fas fa-money-bill-wave"></i>
                    <div>Join our newsletter for exclusive discounts!</div>
                </div>
                <div className="one-third-section">
                    <i className="fas fa-coins"></i>
                    <div>Use code ECOMMERCE20 for 10% off!</div>
                </div>
            </div>
        )
    }
}

export default TopSection;