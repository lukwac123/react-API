import { ADD_USER } from "./usersActionTypes";
import { REMOVE_USER } from "./usersActionTypes";

export const addUser = user => {
    return {
        type: ADD_USER,
        user
    };
};

export const removeUser = id => {
    return {
        type: REMOVE_USER,
        id
    };
};
