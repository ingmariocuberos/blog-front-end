import { types } from "../types/types";

const initialState = {
    allPosts: [{
        posts: "Posts"
    }
]
}

export const postsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.postsLoad:
            return {
                ...state,
                allPosts: action.payload.posts
            };            
    
        default:
            return state;
    }
}