import { FETCH_EVENTS, UPDATE_EVENT } from '../actions/events/eventsActionTypes'

const initialState = {
    allEvents: [],
    currentEvent: "Birthday Party"
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENTS:
            return {
                ...state,
                allEvents: action.payload
            };
            break
        case UPDATE_EVENT:
            return {
                ...state,
                currentEvent: action.payload
            };
            break
        default:
            return state;
    }
};

export default eventsReducer