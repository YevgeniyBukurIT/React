import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validator'
import { Textarea } from '../../common/FormsControls/FromsControls'

//React.memo
const MyPosts = React.memo(props => {

    let dialogsArray = [...props.dialogsData].reverse().map(d => <Post message={d.message} like={d.likesCount}/>)

    let onAddPost = (value) => {
        props.addPost(value.addPost)
    }

    return <div className={s.postBlock}>
        My posts
        <div>

            <MyPostsFormRedux onSubmit={onAddPost}/>

        </div>
        <div className={s.post}>
            {dialogsArray}

        </div>
    </div>

})

let maxLength = maxLengthCreator(30)

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength]} component={Textarea} name={'addPost'}
                   placeholder={'Write your post'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const MyPostsFormRedux = reduxForm({form: 'addPost'})(MyPostsForm)

export default MyPosts