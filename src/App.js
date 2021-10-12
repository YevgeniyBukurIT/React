import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/navbar/HavBar'
import Profile from './components/profile/Profile'
import { Route } from 'react-router-dom'
import DialogsContainer from './components/dialogs/DialogsContainer'


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>

                <Route path={'/profile'} render={() => <Profile  />} />

                <Route path={'/dialogs'} render={() => <DialogsContainer  />} />
            </div>
        </div>

    )
}

export default App


