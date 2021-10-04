import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {



    let dialogsArray = props.dialogsData.map( d => <Post message={d.message} like={d.likesCount} /> )

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
            {dialogsArray}

        </div>
    </div>

}

export default MyPosts