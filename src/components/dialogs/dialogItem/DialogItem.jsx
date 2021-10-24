import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {


    return (
        <div className={s.dialog}>
            <div>
                <img src={'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'}/>
            </div>
            <div>
                <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}


export default DialogItem