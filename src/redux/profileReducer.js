import { getProfileAPI, getStatusAPI, saveProfileAPI, setPhoto, setPhotoAPI, updateStatusAPI } from '../api/api'
import { stopSubmit } from 'redux-form'


const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USERS_STATUS = 'SET_USERS_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO = 'SAVE_PHOTO'

let initialState = {
    dialogsData: [
        {id: 1, message: 'firs dialog', likesCount: 12},
        {id: 2, message: 'second dialog', likesCount: 10},
        {id: 3, message: '3 dialog', likesCount: 12},
    ],

    profile: null,
    status: '',


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

        case SAVE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export let savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})

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
    try {
        let response = await updateStatusAPI(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        debugger
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await setPhotoAPI(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    let response = await saveProfileAPI(profile)
    let userId = getState().auth.id

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer
