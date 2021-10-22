import React from 'react'
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from '../../redux/usersReducer'
import {connect} from 'react-redux'
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getUsersAPI } from '../../api/api'

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsersAPI(this.props.currentPage, this.props.pageSize).then(data => {

                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            }
        )
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        getUsersAPI(pageNumber, this.props.pageSize).then(data => {
                
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            }
        )
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
        isFetching: state.userPage.isFetching
    }
}


let mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)