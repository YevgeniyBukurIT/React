import React from "react";
import s from "../../Users/User.module.css";
import spinner from "../../../assets/images/Spinner.gif";

const Preloader = (props) =>{
    return <img className={s.imgPreloader} src={spinner}/>
}

export default Preloader