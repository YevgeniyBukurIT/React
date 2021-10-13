const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'

let initialState = {
    dialogsData: [
        {message: 'firs dialog', likesCount: 12},
        {message: 'second dialog', likesCount: 10},
        {message: '3 dialog', likesCount: 12}
    ],
    newPostText: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                dialogsData: [...state.dialogsData, {message: state.newPostText, likesCount: 333}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_CHANGE: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export let addPostActionCreator = () => {
    return {type: ADD_POST}

}

export let updateNewPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_CHANGE, newText: text}

}

export default profileReducer
