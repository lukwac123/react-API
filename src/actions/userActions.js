import { ADD_USER } from "./usersActionTypes";

export const addUser = user => {
    return {
        type: ADD_USER,
        user
    };
};
