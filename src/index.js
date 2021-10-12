import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './redux/reduxStore'
import reportWebVitals from './reportWebVitals'
import storeContext from './storeContext'


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <storeContext.Provider value={store}>
                    <App/>
                </storeContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'),
    )
}
renderEntireTree(store.getState())

store.subscribe(() => {
    renderEntireTree()
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
