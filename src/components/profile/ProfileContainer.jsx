import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { getProfile } from '../../redux/profileReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { withRouter } from 'react-router-dom'


class ProfileContainer extends React.Component{
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getProfile(userId)
    }


    render() {
        return <div>

            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }

}

let mapStateToProps = (state) => {
    return{

        profile: state.profilePage.profile,



    }
}

let authRedirectComponent = withAuthRedirect(ProfileContainer)


export default connect(mapStateToProps, {getProfile})(withRouter(authRedirectComponent))