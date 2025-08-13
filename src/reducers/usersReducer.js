import { ADD_USER, REMOVE_USER } from "../actions/usersActionTypes";

let usersCounter = 0;
const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    if (action.type === ADD_USER) {
        action.user = {id: ++usersCounter, ...action.user };
        return {
            users: [...state.users, action.user]
        };
    }

    else if (action.type === REMOVE_USER) {
        return {
            ...state,
            users: state.users.filter(user => user.id !== action.id)
        };
    }
    return state;
};

export default usersReducer;
