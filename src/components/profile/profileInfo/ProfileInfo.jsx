import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusHook from './ProfileStatusHook'
import user from './../../../assets/images/user.jpg'

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return (
        <div>
            <div className={s.infoBlock}>
                <div className={s.item}>
                    <img src={props.profile.photos.large || user}/>
                    <div>
                        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    </div>
                    <div>
                        {editMode
                            ? <ProfileDataForm profile={props.profile}/>
                            : <ProfileData profile={props.profile}
                                           isOwner={props.isOwner}
                                           goToEditMode={() => (setEditMode(true))}/>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export const ProfileDataForm = (props) => {
    return <div>Form</div>
}

export const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Name:</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Id:</b> {props.profile.userId}
        </div>
        <div>
            <b>Status:</b> <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My skills</b> {props.profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo