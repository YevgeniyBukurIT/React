import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('Profile status', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'Well great'} />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Well great')
    })

    test('span should be displayed', () => {
        const component = create(<ProfileStatus status={'Well great'} />)
        const root = component.root
        const span = root.findByType('span')
        expect(span).not.toBeNull()
    })

    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status={'Well great'} />)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe('Well great')
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'Well great'} />)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('Well great')
    })

    test('callback should be status', () => {
        const mollCallback = jest.fn()
        const component = create(<ProfileStatus status={'Well great'} updateStatus={mollCallback} />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mollCallback.mock.calls.length).toBe(1)
    })
})