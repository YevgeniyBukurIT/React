import {renderEntireTree} from '../render'

let state = {

    profilePage: {
        dialogsData: [
            {message: 'firs dialog', likesCount: 12},
            {message: 'second dialog', likesCount: 10},
            {message: '3 dialog', likesCount: 12}
        ]
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

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        message: postMessage,
        likesCount: 333
    }

    state.profilePage.dialogsData.push(newPost)

    renderEntireTree(state)
}

export default state