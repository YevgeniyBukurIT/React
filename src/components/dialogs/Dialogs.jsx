import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import MessageItem from './messageItem/MessageItem'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FromsControls'
import { maxLengthCreator, required } from '../../utils/validators/validator'


class Dialogs extends React.Component {



    render() {

        console.log('Render Dialogs')
        let state = this.props.dialogsPage

        let dialogItems = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
        let messageItems = state.messages.map(m => <MessageItem id={m.id} message={m.message}/>)


        let addNewMessage = (value) => {
            this.props.sendMessage(value.newMessageText)
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogItems}
                </div>
                <div className={s.message}>
                    {messageItems}
                    <div>
                        <AddMessageReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        )
    }
}

let maxLength = maxLengthCreator(30)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength]} component={Textarea} name={'newMessageText'} placeholder={'New message'}/>
        </div>
        <div>
            <button>add message</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'newMessageText'})(AddMessageForm)

export default Dialogs