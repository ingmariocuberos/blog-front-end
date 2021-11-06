import { types } from "../types/types";

const initialState = {
    allUsers: {
        users: {
            Users: "User"}
    }

}

export const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.usersLoad:
            return {
                ...state,
                allUsers: action.payload
            };            
    
        default:
            return state;
    }
}