import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import MessageItem from './messageItem/MessageItem'
import { Redirect } from 'react-router-dom'


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogItems = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = state.messages.map(m => <MessageItem id={m.id} message={m.message}/>)
    let newMessageText = state.newMessageText


    let onSendMessageClick = () => {
        props.sendMessage()

    }

    let onNewMessagesChange = (e) => {
        let body = e.target.value
        props.updateNewMessagesBody(body)


    }

    if(props.isAuth === false){
        return <Redirect to={'/login'} />
    }

    return (
        <div className={s.dialogs}>


            <div className={s.dialogItems}>
                {dialogItems}

            </div>
            <div className={s.message}>
                {messageItems}

                <div>
                    <div>
                        <textarea onChange={onNewMessagesChange} value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs