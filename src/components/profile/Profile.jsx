import React from 'react'
import '../../App.css'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'


const Profile = (props) => {



    return <div>
        <ProfileInfo />
        <MyPosts dialogsData={props.dialogsData} />
    </div>
}

export default Profile