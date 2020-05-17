import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //for asynchronous actions
import { composeWithDevTools } from 'redux-devtools-extension'
/* Import all reducers */
import usersReducer from './reducers/usersReducer';
import eventsReducer from './reducers/eventsReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer
})

const configureStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

export default configureStore;