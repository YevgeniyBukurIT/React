import React from 'react'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from '../../redux/usersReducer'
import { connect } from 'react-redux'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize:  state.userPage.pageSize,
        totalUsersCount:  state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Users)