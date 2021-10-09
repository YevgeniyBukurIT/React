const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'


const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
            message: state.newPostText,
            likesCount: 333
        }
            state.dialogsData.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_CHANGE:
            state.newPostText = action.newText
            return state;
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
