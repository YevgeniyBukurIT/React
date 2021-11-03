import React from 'react'
import s from './Preloader.module.css'
import spinner from '../../../assets/images/Preloader.gif'

const Preloader = (props) => {
    return <img className={s.imgPreloader} src={spinner}/>

}

export default Preloader