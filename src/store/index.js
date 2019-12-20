import { createStore, combineReducers } from 'redux';
import secondReducer from './reducers/firstReducer';
import firstReducer from './reducers/secondReducer';
import thirdReducer from './reducers/thirdReducer';

export let initState = {
    category: null,
    itemsLoaded: false,
    apiProducts: [],
    numItemsInCart: 0,
    productsList: [],
    prodToDisplay: {},
    totalPrice: 0,
    users: [],
    signedIn: false,
    currentUser: {},
}

const reducer = combineReducers({
    cartReducer: firstReducer,
    apiDisplay: secondReducer,
    userSignIn: thirdReducer,
})

const store = createStore(reducer);
export default store;