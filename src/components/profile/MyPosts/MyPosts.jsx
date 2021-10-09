import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer'


const MyPosts = (propsMyPosts) => {

    let dialogsArray = propsMyPosts.dialogsData.map(d => <Post message={d.message} like={d.likesCount}/>)

    let newPostElements = React.createRef();

    let addPost = () =>{

        propsMyPosts.dispatch(addPostActionCreator());

    }

    let onPostChange = () =>{
        let text = newPostElements.current.value;
        propsMyPosts.dispatch(updateNewPostChangeActionCreator(text));

    }

    return <div className={s.postBlock}>
        My posts
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElements} value={propsMyPosts.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.post}>
            {dialogsArray}

        </div>
    </div>

}

export default MyPosts