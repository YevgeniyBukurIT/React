import { applyMiddleware, combineReducers, compose, createStore, } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import userReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'
import appReducer from './appReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware)) //applyMiddleware(thunkMiddleware) - використовуємо для роботи санок


export default store