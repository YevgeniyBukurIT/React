import React from 'react'
import { addMessagesActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,


    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: (newMessageText) => {dispatch(addMessagesActionCreator(newMessageText))},

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

