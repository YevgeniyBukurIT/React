import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validator'
import { Input, Textarea } from '../common/FormsControls/FromsControls'

let maxLength = maxLengthCreator(10)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength]} component={Input} name={'login'} placeholder={'Login'}/>
        </div>
        <div>
            <Field validate={[required, maxLength]} component={Input} name={'password'} placeholder={'Password'}/>
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember me
        </div>
        <div>
            <button>login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (dataForm) => {
        console.log(dataForm)
    }

    return <div>
        <h1>Login form</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login