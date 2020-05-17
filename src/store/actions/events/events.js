import { FETCH_EVENTS, UPDATE_EVENT } from './eventsActionTypes'

//synchronous action
export const updateEvent = (event_id) => {
    return {
        type: UPDATE_EVENT,
        payload: event_id
    }
};

//asynchronous action
export const fetchEvents = () => {
    return (dispatch) => {
        fetch(`${URL}/events`)
              .then(response => response.json())
              .then(data => {
                dispatch({ 
                    type: FETCH_EVENTS,
                    payload: data
                })
              }).catch(function(err) {
                console.log( err);
              })
    }
};