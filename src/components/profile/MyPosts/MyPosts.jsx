import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {


    let dialogsArray = props.dialogsData.map(d => <Post message={d.message} like={d.likesCount}/>)

    let newPostElements = React.createRef();

    let addPost = () =>{
        let text = newPostElements.current.value;
        alert(text)
    }

    return <div className={s.postBlock}>
        My posts
        <div>
            <div>
                <textarea ref={newPostElements}> </textarea>
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