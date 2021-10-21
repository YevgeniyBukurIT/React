import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/navbar/HavBar'
import Profile from './components/profile/Profile'
import { Route } from 'react-router-dom'
import DialogsContainer from './components/dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'


const App = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
            </div>
        </div>

    )
}

export default App


