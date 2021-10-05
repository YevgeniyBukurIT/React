import React from 'react'
import '../../App.css'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import { addPost } from '../../redux/state'


const Profile = (propsProfile) => {

    return <div>
        <ProfileInfo />
        <MyPosts dialogsData={propsProfile.state.dialogsData}
                 addPost={propsProfile.addPost}
        />
    </div>
}

export default Profile