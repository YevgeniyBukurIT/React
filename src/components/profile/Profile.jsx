import React from 'react'
import '../../App.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'


const Profile = (props) => {

    return <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
    </div>
}

export default Profile