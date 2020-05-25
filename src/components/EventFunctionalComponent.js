import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
/* action creators */
import { updateEvent } from '../store/actions/events/events'

const EventFunctionalComponent = (props) => { 
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const changeEvent = (newEvent) => {
        dispatch(updateEvent(newEvent))
    }

    return (
        <div>
            <h1>Hello world Functional Component</h1>
            <h2>{state.events.currentEvent}</h2>
            <button onClick={() => changeEvent("Housewarming")} >Change current event to a HouseWarming!</button>
        </div>
    )
}

export default EventFunctionalComponent;