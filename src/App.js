import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/navbar/HavBar'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            {/*<Profile/>*/}
            <div className={"app-wrapper-content"}>
                <Dialogs/>
            </div>
        </div>
    )
}

export default App


