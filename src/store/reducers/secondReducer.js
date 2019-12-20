import { initState } from '../index';

const secondReducer = (state = initState, action) => {
    if (action.type === "API_ADD") {
        return {
            ...state,
            apiProducts: action.apiProductsArr,
            itemsLoaded: true
        }
    }
    else if(action.type === "DISPLAY_PRODUCT") {
        return {
            ...state,
            prodToDisplay: action.product
        }
    }
    else if(action.type === "CHANGE_CATEGORY") {
        console.log(action.category);
        if(action.category === "all products") {
            return {
                ...state,
                category: null
            }
        } else {
            return {
                ...state,
                category: action.category
            }
        }
    }
    else {
        return state;
    }
}

export default secondReducer;