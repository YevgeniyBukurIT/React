import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import * as path from 'path'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Yevgeniy'} id={'1'}/>
                <DialogItem name={'Diana'} id={'2'}/>
                <DialogItem name={'Nazar'} id={'3'}/>
                <DialogItem name={'Sergey'} id={'4'}/>
                <DialogItem name={'Mother'} id={'5'}/>
            </div>
            <div className={s.message}>
                <MessageItem message={"Hey, how are you?"} />
                <MessageItem message={"Ok"} />
                <MessageItem message={"Good"} />

            </div>
        </div>
    )
}

export default Dialogs