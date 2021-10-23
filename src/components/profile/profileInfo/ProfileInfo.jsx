import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div>
                <img
                    src={'https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg'}/>
            </div>
            <div className={s.infoBlock}>
                <div className={s.item}>
                    <img  src={props.profile.photos.large}/>
                    <div>
                        {props.profile.fullName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo