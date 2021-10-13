import React from 'react'
import { addMessagesActionCreator, updateNewMessagesChangeActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'



// const DialogsContainer = (props) => {
//
//     return <storeContext.Consumer>
//         {(store) => {
//             let state = store.getState().dialogsPage
//
//
//             let omSendMessageClick = () => {
//                 store.dispatch(addMessagesActionCreator())
//
//             }
//
//             let onNewMessagesChange = (body) => {
//                 store.dispatch(updateNewMessagesChangeActionCreator(body))
//
//             }
//
//             return <Dialogs
//                 sendMessage={omSendMessageClick}
//                 updateNewMessagesBody={onNewMessagesChange}
//                 dialogsPage={state}/>
//         }
//         }
//     </storeContext.Consumer>
//
//
// }

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage

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