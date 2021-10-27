import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import MessageItem from './messageItem/MessageItem'
import { Field, reduxForm } from 'redux-form'


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogItems = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = state.messages.map(m => <MessageItem id={m.id} message={m.message}/>)


    let addNewMessage = (value) =>{
        props.sendMessage(value.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItems}
            </div>
            <div className={s.message}>
                {messageItems}
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'newMessageText'} placeholder={'New message'}/>
        </div>
        <div>
            <button>add message</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'newMessageText'})(AddMessageForm)

export default Dialogs