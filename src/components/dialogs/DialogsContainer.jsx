import React from 'react'
import { addMessagesActionCreator, updateNewMessagesChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import storeContext from '../../storeContext'


const DialogsContainer = (props) => {

    return <storeContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage


            let omSendMessageClick = () => {
                store.dispatch(addMessagesActionCreator())

            }

            let onNewMessagesChange = (body) => {
                store.dispatch(updateNewMessagesChangeActionCreator(body))

            }

            return <Dialogs
                sendMessage={omSendMessageClick}
                updateNewMessagesBody={onNewMessagesChange}
                dialogsPage={state}/>
        }
        }
    </storeContext.Consumer>


}

export default DialogsContainer