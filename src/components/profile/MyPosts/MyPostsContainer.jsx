import React from 'react'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) =>{
    return{
        dialogsData: state.profilePage.dialogsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostText: (text) => {
            let action = updateNewPostChangeActionCreator(text)
            dispatch(action)}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer