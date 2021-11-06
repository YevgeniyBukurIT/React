import React from 'react'
import ProfileStatusHook from './ProfileStatusHook'
import s from './ProfileInfo.module.css'

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name:</b> {props.profile.fullName}
        </div>
        <div>
            <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Locking for a job:</b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>

        <div>
            <b>My skills:</b> {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
            <div>
                <b>Status:</b> <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}>{contactTitle}: {contactValue}</div>
}
export default ProfileData