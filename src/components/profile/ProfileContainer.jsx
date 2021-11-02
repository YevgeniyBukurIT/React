import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'


class ProfileContainer extends React.Component{
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = 20340
            if(!userId){
                this.props.history.push('login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return <div>

            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus} />
        </div>
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authUserId: state.auth.userId


    }
}



export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

