import { getProfileAPI, getStatusAPI, updateStatusAPI } from '../api/api'


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USERS_STATUS = 'SET_USERS_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    dialogsData: [
        {id: 1, message: 'firs dialog', likesCount: 12},
        {id: 2, message: 'second dialog', likesCount: 10},
        {id: 3, message: '3 dialog', likesCount: 12},
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

        case DELETE_POST: {
            return {...state, dialogsData: state.dialogsData.filter(p => p.id !== action.postId)}
        }

        default:
            return state
    }
}
//Action creators
export let addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_USERS_STATUS, status})
export let deletePost = (postId) => ({type: DELETE_POST, postId})

//Thunks
export const getProfile = (userId) => async (dispatch) => {
    let response = await getProfileAPI(userId)

    dispatch(setUserProfile(response.data))

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await getStatusAPI(userId)

    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await updateStatusAPI(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer
