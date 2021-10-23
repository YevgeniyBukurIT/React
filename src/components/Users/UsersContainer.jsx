import React from 'react'
import {
    follow,
    setCurrentPage,
    unFollow, toggleFollowingProgress, getUsers} from '../../redux/usersReducer'
import {connect} from 'react-redux'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    //Метод для кліку сторінки
    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {

        return <>
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
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}


let mapDispatchToProps = {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unFollow
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)