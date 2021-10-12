import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'


let store = {
    _state: {

        profilePage: {
            dialogsData: [
                {message: 'firs dialog', likesCount: 12},
                {message: 'second dialog', likesCount: 10},
                {message: '3 dialog', likesCount: 12}
            ],
            newPostText: ''
        },

        dialogsPage: {
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
    },
    _callSubscriber() {
    }, //pattern

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель - патерн, publisher-subscribe

    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)

    }


}


export default store