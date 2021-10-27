const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: newMessage}]
            }
        default:
            return state
    }
}

export let addMessagesActionCreator = (newMessageText) => {
    return {type: ADD_MESSAGE, newMessageText}

}

export default dialogsReducer