import React from 'react'
import ProfileStatusHook from './ProfileStatusHook'
import { createField, Input, Textarea } from '../../common/FormsControls/FromsControls'
import { reduxForm } from 'redux-form'
import s from './ProfileInfo.module.css'
import style from './../../common/FormsControls/FormsControls.module.css'



const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {props.error && <div className={style.formError}> {props.error} </div>}
        <div>
            <button >Save</button>
        </div>
        <div>
            <b>Full name:</b> {createField('Full name', "fullName", [], Input)}
        </div>
        <div>
            <b>About me:</b>
            {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Locking for a job: </b>
            {createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My skills: </b>
            {createField('My skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <div key={key} className={s.contacts}>{key}: {createField(key, `contacts.${key}`, [], Input)}</div>
        })}
        </div>
        <div>
            <b>Status:</b> <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm