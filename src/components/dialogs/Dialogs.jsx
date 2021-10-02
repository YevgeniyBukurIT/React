import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import * as path from 'path'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Yevgeniy'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Nazar'},
        {id: 4, name: 'Sergey'},
        {id: 5, name: 'Vickotoria'}
    ]

    let messageData = [
        {id: 1, message: 'Hey, how are you?'},
        {id: 2, message: 'Ok'},
        {id: 3, message: 'Good'}

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>

            </div>
            <div className={s.message}>
                <MessageItem message={messageData[0].message} />
                <MessageItem message={messageData[1].message}/>
                <MessageItem message={messageData[2].message}/>

            </div>
        </div>
    )
}

export default Dialogs