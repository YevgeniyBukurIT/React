import React from 'react'
import s from './FormsControls.module.css'

const FormControler = ({input, child, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, child, meta, ...restProps} = props
    return <FormControler {...props}><textarea {...input} {...restProps}  /></FormControler>
}

export const Input = (props) => {
    const {input, child, meta, ...restProps} = props
    return <FormControler {...props}><input {...input} {...restProps}  /></FormControler>
}