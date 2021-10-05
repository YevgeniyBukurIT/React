import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import MessageItem from './messageItem/MessageItem'


const Dialogs = (props) => {



    let dialogItems = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageItems = props.state.messages.map(m => <MessageItem id={m.id} message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItems}

            </div>
            <div className={s.message}>
                {messageItems}

            </div>
        </div>
    )
}

export default Dialogs