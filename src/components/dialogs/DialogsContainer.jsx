import React from 'react'
import { addMessagesActionCreator, updateNewMessagesChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth

    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {dispatch(addMessagesActionCreator())},
        updateNewMessagesBody: (body) => {dispatch(updateNewMessagesChangeActionCreator(body))}

    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer