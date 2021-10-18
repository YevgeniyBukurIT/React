import React from 'react'
import s from './User.module.css'
import axios from 'axios'
import userPhoto from './../../assets/images/user.jpg'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            }
        )
    }

    onPageChange = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {



        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages = []
        for(let i=1; i <= pagesCount; i++){
            pages.push(i)

        }

        return <div>
            <div>
                {pages.map(p => {
                   return <span className={ this.props.currentPage === p && s.borderStyle}
                   onClick={(e) => {this.onPageChange(p)} }>{p}</span>

                })}
            </div>

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    <div>
                        {u.followed ? <button onClick={() => {
                            this.props.unFollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.follow(u.id)
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

}

export default Users