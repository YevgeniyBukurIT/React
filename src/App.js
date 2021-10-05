import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/navbar/HavBar'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { addPost } from './redux/state'


const App = (props) => {


    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>

                    <Route path={'/profile'} render={() =>
                        <Profile state={props.state.profilePage}
                                 addPost={props.addPost}
                        />}
                    />

                    <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>

    )
}

export default App


