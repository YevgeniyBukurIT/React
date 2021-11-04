import React from 'react'
import {
    follow,
    setCurrentPage,
    unFollow, toggleFollowingProgress, requestUsers} from '../../redux/usersReducer'
import {connect} from 'react-redux'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/selectors/usersSelector'

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    //Метод для кліку сторінки
    onPageChange = (pageNumber) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)

    }

    render() {

        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChange={this.onPageChange}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}

                   followingInProgress={this.props.followingInProgress}


            />
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


let mapDispatchToProps = {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: requestUsers,
    follow,
    unFollow
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)