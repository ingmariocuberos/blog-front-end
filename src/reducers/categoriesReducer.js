import { types } from "../types/types";

const initialState = {
        allCategories: {
            categories: {
                category: "category"
            }
        }
    
}

export const categoriesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.categoriesLoad:
            return {
                ...state,
                allCategories: action.payload
            };            
    
        default:
            return state;
    }
}