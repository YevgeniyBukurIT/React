import React from 'react'
import '../../App.css'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'


const Profile = () => {
    return <div>
        <ProfileInfo />
        <MyPosts />
    </div>
}

export default Profile