import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import MessageItem from './messageItem/MessageItem'
import { addMessagesActionCreator, updateNewMessagesChangeActionCreator } from '../../redux/dialogsReducer'





const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogItems = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageItems = state.messages.map(m => <MessageItem id={m.id} message={m.message}/>)

    let newMessageText = state.newMessageText;



    let addMessage = () => {
        props.store.dispatch(addMessagesActionCreator())

    }

    let onMessagesChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessagesChangeActionCreator(body))

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
                        <textarea onChange={onMessagesChange} value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs