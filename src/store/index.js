import { createStore, combineReducers } from 'redux';
import secondReducer from './reducers/firstReducer';
import firstReducer from './reducers/secondReducer';
import thirdReducer from './reducers/thirdReducer';
import fourthReducer from './reducers/fourthReducer';

export let initState = {
    category: null,
    itemsLoaded: false,
    apiProducts: [],
    numItemsInCart: 0,
    productsList: [],
    prodToDisplay: {},
    totalPrice: 0,
    discountCodesApplied: 0,
    users: [],
    signedIn: false,
    currentUser: {},
    searchCategory: null,
    wishList: [],
    numItemsInWishList: 0
}

const reducer = combineReducers({
    cartReducer: firstReducer,
    apiDisplay: secondReducer,
    userSignIn: thirdReducer,
    wishList: fourthReducer,
})

const store = createStore(reducer);
export default store;