import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'


const MyPosts = (props) => {

    let dialogsArray = props.dialogsData.map(d => <Post message={d.message} like={d.likesCount}/>)



    let onAddPost = (value) => {
        props.addPost(value.addPost)
    }


    return <div className={s.postBlock}>
        My posts
        <div>

            <MyPostsFormRedux onSubmit={onAddPost} />

        </div>
        <div className={s.post}>
            {dialogsArray}

        </div>
    </div>

}

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'addPost'} placeholder={'Write your post'} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const MyPostsFormRedux = reduxForm({form: 'addPost'})(MyPostsForm)

export default MyPosts