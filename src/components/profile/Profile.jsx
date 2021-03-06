import React from 'react'
import '../../App.css'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'


const Profile = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}
                     savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     status={props.status}
                     saveProfile={props.saveProfile}
                     updateStatus={props.updateStatus}  />

        <MyPostsContainer />
    </div>
}

export default Profile