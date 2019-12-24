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
        if(action.category === "all products") {
            return {
                ...state,
                category: null,
                searchCategory: null
            }
        } else {
            return {
                ...state,
                category: action.category,
                searchCategory: null
            }
        }
    }
    else if(action.type === "SEARCH_CATEGORY") {
        if(action.search === '') {
            return {
                ...state,
                searchCategory: null,
                category: null
            }
        } else {
            let newArr = [];
            for(let i = 0; i < state.apiProducts.length; i++) {
                let item = state.apiProducts[i].title.toLowerCase();
                if(item.includes(action.search.toLowerCase())){
                    newArr.push(state.apiProducts[i]);
                }
            }
            return {
                ...state,
                searchCategory: newArr,
                category: null
            }
        }
    }
    else {
        return state;
    }
}

export default secondReducer;