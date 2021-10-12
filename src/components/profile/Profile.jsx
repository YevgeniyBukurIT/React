import React from 'react'
import '../../App.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'


const Profile = (propsProfile) => {

    return <div>
        <ProfileInfo />
        <MyPostsContainer />
    </div>
}

export default Profile