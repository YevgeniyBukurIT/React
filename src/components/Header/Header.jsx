import React from 'react'
import '../../App.css'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    return <header className={s.header}>
        <img src="http://www.rosphoto.com/images/u/articles/1510/7_5.jpg"/>

        <div className={s.loginBlock}>
            { props.isAuth ?
                <div>{props.login} --- <button onClick={props.logout} >logout</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>

    </header>
}

export default Header;