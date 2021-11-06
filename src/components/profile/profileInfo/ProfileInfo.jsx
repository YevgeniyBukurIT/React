import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import user from './../../../assets/images/user.jpg'
import ProfileData from './ProfileData'
import ProfileDataForm from './ProfileDataForm'

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

    const onSubmit = (formData) =>{
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            })

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
                            ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                            : <ProfileData profile={props.profile}
                                           isOwner={props.isOwner}
                                           goToEditMode={() => (setEditMode(true))}
                                           updateStatus={props.updateStatus}
                                           status={props.status}/>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}



export default ProfileInfo