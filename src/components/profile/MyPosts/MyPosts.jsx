import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let dialogsArray = props.dialogsData.map(d => <Post message={d.message} like={d.likesCount}/>)

    let newPostElements = React.createRef();

    let onAddPost = () =>{
        props.addPost()
    }

    let onPostChange = () =>{
        let text = newPostElements.current.value;
        props.updateNewPostText(text)


    }

    return <div className={s.postBlock}>
        My posts
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElements} value={props.newPostText} />
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