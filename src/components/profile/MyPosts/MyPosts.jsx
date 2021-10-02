import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {

    let dialogsData = [
        {message: 'firs dialog', likesCount: 12},
        {message: 'second dialog', likesCount: 10}
    ]

    return <div className={s.postBlock}>
        My posts
        <div>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.post}>
            <Post message={dialogsData[0].message} like={dialogsData[0].likesCount}/>

            <Post message={dialogsData[1].message} like={dialogsData[1].likesCount}/>

        </div>
    </div>

}

export default MyPosts