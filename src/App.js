import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/navbar/HavBar'
import Profile from './components/profile/Profile'

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


