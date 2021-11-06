import { types } from "../types/types";

const initCurrentPage = localStorage.getItem("currentPage") ? localStorage.getItem("currentPage") : "Posts";

const initialState = {
    loading: false,
    msgError: null,
    currentPage: initCurrentPage
}

export const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.login:
            return {
                email: action.payload.email,
                token: action.payload.token,
                name: action.payload.name,
                usertype: action.payload.usertype
            };

        case types.logout:
            return { };

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
            
    
        default:
            return state;
    }
}


export const registerReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.setError:
            return {
                ...state,
                msgError: action.payload
            };

        case types.removeError:
            return {
                ...state,
                msgError: null
            };

        case types.currentPage:
            return {
                ...state,
                currentPage: action.payload
            };            
    
        default:
            return state;
    }
}