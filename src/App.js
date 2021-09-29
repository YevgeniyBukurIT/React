import './App.css'
import React from 'react'
import Header from './Header'
import NavBar from './HavBar'
import Profile from './Profile'

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <Profile />
        </div>
    )
}

export default App


