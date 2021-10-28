import React from 'react'
import Header from './Header'

import { connect } from 'react-redux'


import {getHeaderAuth, logout} from '../../redux/authReducer'


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getHeaderAuth()


    }

    render() {
        return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        // logout: state.auth.logout

    }
}

export default connect(mapStateToProps, {getHeaderAuth, logout})(HeaderContainer)