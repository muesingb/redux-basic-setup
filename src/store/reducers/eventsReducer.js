import {  } from '../actions/events/events'

const initialState = {
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                allUsers: action.payload
            };
            break
        case UPDATE_USER:
            return {
                ...state,
                currentUser: action.payload
            };
            break
        default:
            return state;
    }
};

export default reducer