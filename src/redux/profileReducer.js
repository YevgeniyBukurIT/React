import { getProfileAPI, getStatusAPI, updateStatusAPI } from '../api/api'


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USERS_STATUS = 'SET_USERS_STATUS'

let initialState = {
    dialogsData: [
        {message: 'firs dialog', likesCount: 12},
        {message: 'second dialog', likesCount: 10},
        {message: '3 dialog', likesCount: 12}
    ],

    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                dialogsData: [...state.dialogsData, {message: action.newPostText, likesCount: 333}]

            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_USERS_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}
//Action creators
export let addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_USERS_STATUS, status})

//Thunks
export const getProfile = (userId) => {
    return (dispatch) => {
        getProfileAPI(userId).then(response => {
                dispatch(setUserProfile(response.data))

            }
        )
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        getStatusAPI(userId).then(response => {
                dispatch(setStatus(response.data))

            }
        )
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        updateStatusAPI(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
            }
        )
    }
}




export default profileReducer
