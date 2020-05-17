import { configureStore } from "@reduxjs/toolkit";

/* Import all reducers */
import usersReducer from '../store/reducers/usersReducer';
import eventsReducer from '../store/reducers/eventsReducer';

const rootReducer = {
    users: usersReducer,
    events: eventsReducer
}

/* configureStore using Redux Toolkit */
const store = configureStore({
    reducer: rootReducer
})

export default store;