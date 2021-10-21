import { combineReducers, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import userReducer from './usersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: userReducer,
    auth: authReducer
})

let store = createStore(reducers)


export default store