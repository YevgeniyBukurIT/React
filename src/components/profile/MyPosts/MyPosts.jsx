import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (propsMyPosts) => {

    let dialogsArray = propsMyPosts.dialogsData.map(d => <Post message={d.message} like={d.likesCount}/>)

    let newPostElements = React.createRef();

    let onAddPost = () =>{
        propsMyPosts.addPost()
    }

    let onPostChange = () =>{
        let text = newPostElements.current.value;
        propsMyPosts.updateNewPostText(text)


    }

    return <div className={s.postBlock}>
        My posts
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElements} value={propsMyPosts.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.post}>
            {dialogsArray}

        </div>
    </div>

}

export default MyPosts