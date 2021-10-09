const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGES_CHANGE = 'UPDATE-NEW-MESSAGES-CHANGE'


let store = {
    _state: {

        profilePage: {
            dialogsData: [
                {message: 'firs dialog', likesCount: 12},
                {message: 'second dialog', likesCount: 10},
                {message: '3 dialog', likesCount: 12}
            ],
            newPostText: 'Jekunich'
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

            newMessageText: 'MESSAGE'

        }
    },
    _callSubscriber(){}, //pattern

    getState(){
        return this._state;
    },
    subscribe(observer)  {
        this._callSubscriber = observer // наблюдатель - патерн, publisher-subscribe

    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                message: this._state.profilePage.newPostText,
                likesCount: 333
            }

            this._state.profilePage.dialogsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_CHANGE){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

        else if(action.type === ADD_MESSAGE){
            let newMessage =  this._state.dialogsPage.newMessageText



            this._state.dialogsPage.messages.push({id: 4, message: newMessage})
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGES_CHANGE){
            this._state.dialogsPage.newMessageText = action.body
            this._callSubscriber(this._state)
        }
    }


}
export let addMessagesActionCreator = () =>{
    return {type: ADD_MESSAGE}

}

export let updateNewMessagesChangeActionCreator = (body) =>{
    return {type: UPDATE_NEW_MESSAGES_CHANGE, body: body}

}

export let addPostActionCreator = () =>{
    return {type: ADD_POST}

}

export let updateNewPostChangeActionCreator = (text) =>{
    return {type: UPDATE_NEW_POST_CHANGE, newText: text}

}
export default store;