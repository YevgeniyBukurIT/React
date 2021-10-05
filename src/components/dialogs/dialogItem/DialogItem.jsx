import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import * as path from 'path'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <div>
                <img src={'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'}/>
            </div>
            <div>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}


export default DialogItem