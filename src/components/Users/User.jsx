import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './User.module.css'
import userPhoto from '../../assets/images/user.jpg'

const User = ({user,follow, unFollow, followingInProgress, ...props}) =>{
    return <div>

                <span>
                    <NavLink className={s.item} to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                <div>
                    {user.followed

                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>

                            unFollow(user.id)

                        }>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() =>

                            follow(user.id)

                        }>Follow</button>}

                </div>
            </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>


    </div>

}

export default User