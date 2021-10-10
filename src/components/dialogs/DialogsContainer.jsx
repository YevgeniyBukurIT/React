import React from 'react'
import { addMessagesActionCreator, updateNewMessagesChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'





const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage


    let omSendMessageClick = () => {
        props.store.dispatch(addMessagesActionCreator())

    }

    let onNewMessagesChange = (body) => {
        props.store.dispatch(updateNewMessagesChangeActionCreator(body))

    }


    return <Dialogs
        sendMessage={omSendMessageClick}
        updateNewMessagesBody={onNewMessagesChange}
        dialogsPage={state} />
}

export default DialogsContainer