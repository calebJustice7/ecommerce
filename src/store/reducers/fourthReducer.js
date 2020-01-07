import {initState} from '../index';

const fourthReducer = (state = initState, action) => {
    if(action.type === "WISHLIST_ADD") {
        return {
            ...state,
            wishList: state.wishList.concat(action.product),
            numItemsInWishList: state.numItemsInWishList + 1,
        }
    } else {
        return state;
    }
}

export default fourthReducer;