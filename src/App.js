import './App.css'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './components/navbar/HavBar'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/reduxStore'
import { withSuspense } from './hoc/withSuspense'


const DialogsContainer = React.lazy(() => import(`./components/dialogs/DialogsContainer`))
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initializeApp) {
            return <Preloader/>
        }
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>} />
                        <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                        <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={withSuspense(Login)}/>
                        <Route path={'*'} render={() => <div><h1><b>404 Not found</b></h1></div>}/>
                    </Switch>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const MainApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

