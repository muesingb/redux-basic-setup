import { FETCH_USERS, UPDATE_USER } from '../actions/users/usersActionTypes'

const initialState = {
   allUsers: [],
   currentUser: null
}

const usersReducer = (state = initialState, action) => {
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

export default usersReducer