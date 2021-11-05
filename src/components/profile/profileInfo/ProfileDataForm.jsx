import React from 'react'
import ProfileStatusHook from './ProfileStatusHook'
import { Contact } from './ProfileData'
import { createField, Input, Textarea } from '../../common/FormsControls/FromsControls'
import { reduxForm } from 'redux-form'

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button >Save</button>
        </div>
        <div>
            <b>Full name:</b> {createField('Full name', "fullName", [], Input)}
        </div>
        <div>
            <b>About me:</b> {props.profile.aboutMe}
            {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Locking for a job: </b>
            {createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My skills: </b> {props.profile.lookingForAJobDescription}
            {createField('My skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        {/*<div>*/}
        {/*    <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {*/}
        {/*    return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
        <div>
            <b>Status:</b> <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm