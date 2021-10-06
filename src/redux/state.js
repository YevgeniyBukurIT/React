let renderEntireTree = () =>{

}

let state = {

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
}



export const addPost = (postMessage) => {
    let newPost = {
        message: state.profilePage.newPostText,
        likesCount: 333
    }

    state.profilePage.dialogsData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export const updateNewPostChange = (newText) => {

    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export const subscribe = (observer) => {
    renderEntireTree = observer // наблюдатель - патерн, publisher-subscribe

}

export default state