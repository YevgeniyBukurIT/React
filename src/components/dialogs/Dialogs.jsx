import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems} >
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'} activeClassName={s.active}>Yevgeniy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'} activeClassName={s.active}>Diana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'} activeClassName={s.active}>Nazar</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'} activeClassName={s.active}>Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'} activeClassName={s.active}>Mother</NavLink>
                </div>
            </div>
            <div className={s.message} >
            <div className={s.message}>Hey, how are you?</div>
            <div className={s.message}>Ok</div>
            <div className={s.message}>Good</div>
            </div>
        </div>
    )
}

export default Dialogs