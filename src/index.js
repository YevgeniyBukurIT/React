import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import state, { addPost, subscribe } from './redux/state'
import {updateNewPostChange} from './redux/state'
import reportWebVitals from './reportWebVitals'


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostChange={updateNewPostChange} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'),
    )
}
renderEntireTree(state);

subscribe(renderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
