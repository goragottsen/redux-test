import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    // Represents the posts coming from action
    // Action is where we put fetch request
    items: [],
    // Represents a single post
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}