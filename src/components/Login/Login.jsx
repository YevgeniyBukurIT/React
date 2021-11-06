import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validator'
import { createField, Input } from '../common/FormsControls/FromsControls'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'
import s from './../common/FormsControls/FormsControls.module.css'
import style from './Login.module.css'

let maxLength = maxLengthCreator(10)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength]} component={Input} name={'email'} placeholder={'Email'}/>
        </div>
        <div>
            <Field validate={[required, maxLength]} component={Input} name={'password'} placeholder={'Password'}
                   type={'password'}/>
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
        </div>
        <div className={style.captcha}>
            {props.captchaUrl && <img  src={props.captchaUrl}/>}
        </div>
        <div>
            {props.captchaUrl && createField('symbols', 'captcha', [required], Input, {}) }
        </div>
        <div>
            <button>login</button>
        </div>

        {props.error && <div className={s.formError}> {props.error} </div>}
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (dataForm) => {
        props.login(dataForm.email, dataForm.password, dataForm.rememberMe, dataForm.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login form</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)