import React from "react";
import s from "./User.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import NavBar from "../navbar/HavBar";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.borderStyle}
                             onClick={(e) => {
                                 props.onPageChange(p)
                             }}>{p}</span>

            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink className={s.item} to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.unFollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}

                </div>
            </span>
                <span>
            <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
            </span>
            <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
            </span>
            </span>
            </div>)
        }
    </div>
}

export default Users