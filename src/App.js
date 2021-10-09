import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/navbar/HavBar'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import { Route } from 'react-router-dom'


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>

                <Route path={'/profile'}
                       render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}

                       />}
                />

                <Route path={'/dialogs'}
                       render={() => <Dialogs  store={props.store}/>}
                />
            </div>
        </div>

    )
}

export default App


