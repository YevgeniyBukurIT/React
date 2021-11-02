import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'


const Users = ({users,...props}) => {

    return <div>

        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange}  />
        <div>
            {users.map(u => <User user={u}
                                        followingInProgress={props.followingInProgress}
                                        follow={props.follow}
                                        unFollow={props.unFollow}
                                        key={u.id} />
            )
            }
        </div>


    </div>
}

export default Users