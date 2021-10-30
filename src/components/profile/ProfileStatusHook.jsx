import React, { useState } from 'react'

const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return <div>
        <div>
            {!editMode &&
            <span onDoubleClick={activateEditMode}>{props.status || 'Write status'}</span>
            }
        </div>
        <div>
            {editMode &&
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            }
        </div>
    </div>
}

export default ProfileStatusHook