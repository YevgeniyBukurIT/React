import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component{
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
                this.props.setUserProfile(response.data)

            }
        )
    }

    // onPageChange = (pageNumber) => {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/`).then(response => {
    //             this.props.toggleIsFetching(false)
    //             this.props.setUsers(response.data.items)
    //         }
    //     )
    // }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }

}

let mapStateToProps = (state) => {
    return{

        profile: state.profilePage.profile


    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)