import {initState} from '../index';

const fourthReducer = (state = initState, action) => {
    if(action.type === "WISHLIST_ADD") {
        let x = state.wishList.findIndex(p => p.id === action.product.id);
        if(x === -1) {
            return {
                ...state,
                wishList: state.wishList.concat(action.product),
                numItemsInWishList: state.numItemsInWishList + 1,
            }
        } else {
            return state;
        }
    } 
    else if(action.type === "WISHLIST_REMOVE") {
            return {
                ...state,
                wishList: state.wishList.filter(item => {
                    return item !== action.product
                })
            }
    }
    else {
        return state;
    }
}

export default fourthReducer;