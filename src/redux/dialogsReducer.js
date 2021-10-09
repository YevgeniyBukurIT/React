const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGES_CHANGE = 'UPDATE-NEW-MESSAGES-CHANGE'



const dialogsReducer = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage =  state.newMessageText

            state.messages.push({id: 4, message: newMessage})
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGES_CHANGE:
            state.newMessageText = action.body
            return state
        default:
            return state
    }
}

export let addMessagesActionCreator = () => {
    return {type: ADD_MESSAGE}

}

export let updateNewMessagesChangeActionCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGES_CHANGE, body: body}
}

export default dialogsReducer