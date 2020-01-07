import React from 'react';

class WishListItem extends React.Component {
    render() {
        let {price, img, title, rating} = this.props.product;
        return (
            <div>
                <div>{title}</div>
            </div>
        )
    }
}

export default WishListItem;