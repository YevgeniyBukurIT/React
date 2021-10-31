import React from 'react'
import s from './User.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'


class Users extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state
    }

    render() {
        console.log('Render Users')

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)

        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.borderStyle}
                                 onClick={(e) => {
                                     this.props.onPageChange(p)
                                 }}>{p}</span>

                })}
            </div>

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink className={s.item} to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                <div>
                    {u.followed

                        ? <button disabled={this.props.followingInProgress.some(id => id === u.id)} onClick={() =>

                            this.props.unFollow(u.id)

                        }>Unfollow</button>
                        : <button disabled={this.props.followingInProgress.some(id => id === u.id)} onClick={() =>

                            this.props.follow(u.id)

                        }>Follow</button>}

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
}

export default Users