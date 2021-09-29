import React from 'react'
import './App.css'
import './NavBar.module.css'
import classes from './NavBar.module.css'


// let classes = {
//     'nav' : 'NavBar_nav__3QB9V',
//     'item' : 'NavBar_item__38mW5'
// }

const NavBar = () =>{
    return <nav className={classes.nav}>
        <div className= {classes.item}>
            <a> My Provile </a>
        </div>
        <div className={classes.item}>
            <a> Message </a>
        </div>
        <div className={classes.item}>
            <a> News </a>
        </div>
        <div className={classes.item}>
            <a> Music </a>
        </div>
        <div className={classes.item}>
            <a> settings </a>
        </div>
    </nav>
}

export default NavBar
