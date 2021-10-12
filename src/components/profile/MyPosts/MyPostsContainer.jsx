import React from 'react'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


// const MyPostsContainer = (props) => {
//
//     return <storeContext.Consumer>
//         {
//             (store) => {
//                 // let state = props.store.getState()
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostChangeActionCreator(text)
//                     store.dispatch(action)
//
//                 }
//
//                 return <MyPosts updateNewPostText={onPostChange}
//                                 addPost={addPost}
//                                 dialogsData={store.getState().profilePage.dialogsData}
//                                 newPostText={store.getState().profilePage.newPostText}/>
//             }
//         }
//     </storeContext.Consumer>
//
//
// }

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