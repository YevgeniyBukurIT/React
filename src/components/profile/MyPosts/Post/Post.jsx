import React from 'react'
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg'}/>
            {props.message}
            <div>
            <span>
                {'like ' + props.like}
            </span>
            </div>
        </div>
    )

}

export default Post