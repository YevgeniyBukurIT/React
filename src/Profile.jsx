import React from 'react';
import './App.css';
import s from './Profile.module.css';


const Profile = () =>{
    return <div className={s.content}>
        <div >
            <img src={"https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"}/>
        </div>
        <div>
            ava + description
        </div>
        <div className={s.posts}>
            My posts
            <div>
                New post
            </div>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
        </div>
    </div>
}

export default Profile