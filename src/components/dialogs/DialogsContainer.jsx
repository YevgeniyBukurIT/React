import React from 'react'
import { addMessagesActionCreator, updateNewMessagesChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,


    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {dispatch(addMessagesActionCreator())},
        updateNewMessagesBody: (body) => {dispatch(updateNewMessagesChangeActionCreator(body))}

    }
}

let authRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer