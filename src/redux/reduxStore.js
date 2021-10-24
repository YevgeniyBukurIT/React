import { applyMiddleware, combineReducers, createStore, } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import userReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: userReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware)) //applyMiddleware(thunkMiddleware) - використовуємо для роботи санок


export default store