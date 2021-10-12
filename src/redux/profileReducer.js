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
    switch (action.type){
        case ADD_POST: {
            let newPost = {
            message: state.newPostText,
            likesCount: 333
        }
        let stateCopy = {...state}

            stateCopy.dialogsData = [...state.dialogsData]
            stateCopy.dialogsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_CHANGE: {
            let stateCopy ={...state}
            stateCopy.dialogsData = [...state.dialogsData]

            stateCopy.newPostText = action.newText
            return stateCopy;
        }
        default:
            return state;
    }


}

export let addPostActionCreator = () => {
    return {type: ADD_POST}

}

export let updateNewPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_CHANGE, newText: text}

}

export default profileReducer
