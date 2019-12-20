import { initState } from '../index';

const firstReducer = (state = initState, action) => {
    if (action.type === "REMOVE_PRODUCT") {
        return {
            ...state,
            numItemsInCart: state.numItemsInCart - 1,
            productsList: state.productsList.filter(prod => {
                return prod.product !== action.product;
            }),
            totalPrice: state.totalPrice - action.price * action.quantity
        }
    }
    else if (action.type === "ADD_PRODUCT") {
        let x = state.productsList.findIndex(p => p.product.id === action.product.id);
        if(x === -1) {
            return {
                ...state,
                numItemsInCart: state.numItemsInCart + 1,
                productsList: state.productsList.concat({
                    quantity: 1,
                    product: action.product
                }),
                totalPrice: state.totalPrice + action.price
            }
        } else {
            return state;
        }
    } 
    else if(action.type === "CHANGE_QUANTITY") {
        let x = { ...state };
        let index = -1;
        let price = 0;
        for(let i = 0; i < x.productsList.length; i++) {
            if(x.productsList[i].product === action.product) {
                index = i;
            }
        }
        x.productsList[index].quantity = action.quantity;
        for(let i = 0; i < x.productsList.length; i++){
            price += x.productsList[i].quantity * x.productsList[i].product.price;
        }
        return {
            ...x,
            totalPrice: price
        };
    }
    else {
        return state;
    }
}

export default firstReducer;