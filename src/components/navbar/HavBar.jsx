import React from 'react'
import '../../App.css'
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'


const NavBar = () =>{
    return <nav className={s.nav}>
        <div className= {s.item}>
            <NavLink to={'/profile'} activeClassName={s.active}> My Profile </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/dialogs'} activeClassName={s.active}> Message </NavLink>
        </div>
        <div className={s.item}>
            <a> News </a>
        </div>
        <div className={s.item}>
            <a> Music </a>
        </div>
        <div className={s.item}>
            <NavLink to={'/users'} activeClassName={s.active}> Users </NavLink>
        </div>
        <div className={s.item}>
            <a> Settings </a>
        </div>

    </nav>
}

export default NavBar
