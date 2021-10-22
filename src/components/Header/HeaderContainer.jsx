import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/authReducer'
import { getHeaderAPI } from '../../api/api'

class HeaderContainer extends React.Component {
    componentDidMount() {
        getHeaderAPI().then(data => {

                if (data.data.resultCode === 0) {
                    let {id, email, login} = data.data.data
                    this.props.setAuthUserData(id, email, login)

                }
            }
        )
    }

    render() {
        return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)