import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12`).then(response => {
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)