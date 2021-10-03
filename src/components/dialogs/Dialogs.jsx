import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import MessageItem from './messageItem/MessageItem'


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Yevgeniy'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Nazar'},
        {id: 4, name: 'Sergey'},
        {id: 5, name: 'Vickotoria'}
    ]

    let messages = [
        {id: 1, message: 'Hey, how are you?'},
        {id: 2, message: 'Ok'},
        {id: 3, message: 'Good'}

    ]

    let dialogItems = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageItems = messages.map(m => <MessageItem id={m.id} message={m.message}/>)


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