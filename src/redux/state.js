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

            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){},
    addPost(postMessage){
        let newPost = {
            message: this._state.profilePage.newPostText,
            likesCount: 333
        }

        this._state.profilePage.dialogsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostChange(newText){

        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)



},
    subscribe(observer)  {
        this._callSubscriber = observer // наблюдатель - патерн, publisher-subscribe












}

}

export default store;