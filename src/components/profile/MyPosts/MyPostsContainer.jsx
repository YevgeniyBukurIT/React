import React from 'react'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }

    let onPostChange = (text) => {
        let action = updateNewPostChangeActionCreator(text)
        props.store.dispatch(action)

    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    dialogsData={state.profilePage.dialogsData}
                    newPostText={state.profilePage.newPostText}

    />

}

export default MyPostsContainer