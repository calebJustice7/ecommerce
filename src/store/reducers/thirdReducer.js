import {initState} from '../index';

const thirdReducer = (state = initState, action) => {
    if(action.type === "ADD_USER") {
        return {
            ...state,
            users: state.users.concat({id: action.id, name: action.name, pass: action.pass})
        }
    } 
    else if(action.type === "SIGN_IN") {
        let validated = false;
        for(let i = 0; i < state.users.length; i++) {
            if(action.name === state.users[i].name && action.pass === state.users[i].pass){
                validated = true;
            }
        }
        if(validated === true) {
            return {
                ...state,
                signedIn: true,
                currentUser: {name: action.name, pass: action.pass}
            }
        } else {
            console.log("ENTER CORRECT CREDENTIALS");
            return state;
        }
    }
    else if(action.type === "SIGN_OUT") {
        return {
            ...state,
            signedIn: false
        }
    }
    else {
        return state;
    }
}

export default thirdReducer;