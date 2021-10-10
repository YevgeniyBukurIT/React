const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGES_CHANGE = 'UPDATE-NEW-MESSAGES-CHANGE'

let initialState = {
        dialogs: [
            {id: 1, name: 'Yevgeniy'},
            {id: 2, name: 'Diana'},
            {id: 3, name: 'Nazar'},
            {id: 4, name: 'Sergey'},
            {id: 5, name: 'Vickotoria'}
        ],

        messages: [
            {id: 1, message: 'Hey, how are you?'},
            {id: 2, message: 'Ok'},
            {id: 3, message: 'Good'}

        ],

        newMessageText: ''

}

const dialogsReducer = (state = initialState, action) => {
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