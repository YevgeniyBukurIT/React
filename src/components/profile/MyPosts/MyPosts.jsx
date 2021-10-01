import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea> </textarea>
            <button>Add post</button>
        </div>
        <div className={s.post}>
            <Post message={'first dialogs'}  like={'1 like'}/>

            <Post message={'second dialogs'} like={'2 like'}/>
        </div>
    </div>

}

export default MyPosts