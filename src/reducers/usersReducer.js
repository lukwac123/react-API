import { ADD_USER } from "../actions/usersActionTypes";

let userCounter = 0;
const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    if (action.type === ADD_USER) {
        let data = { id: ++userCounter, ...action.user };
        return {
            users: [...state.users, data]
        };
    }
    return state;
};

export default usersReducer;
