import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/navbar/HavBar'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'

const App = (props) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>

                    <Route path={'/profile'} render={ () => <Profile dialogsData={props.dialogsData} />} />

                    <Route path={'/dialogs'} render = { () => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App


