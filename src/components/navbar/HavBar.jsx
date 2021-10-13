import React from 'react'
import '../../App.css'
import './NavBar.module.css'
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'


// let classes = {
//     'nav' : 'NavBar_nav__3QB9V',
//     'item' : 'NavBar_item__38mW5'
// }

const NavBar = () =>{
    return <nav className={s.nav}>
        <div className= {s.item}>
            <NavLink to={'/profile'} activeClassName={s.active}> My Provile </NavLink>
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
            <a> settings </a>
        </div>
    </nav>
}

export default NavBar
