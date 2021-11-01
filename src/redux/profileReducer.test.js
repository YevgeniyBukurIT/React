import React from 'react'
import profileReducer, { addPostActionCreator, deletePost } from './profileReducer'

let initialState = {
    dialogsData: [
        {id: 1, message: 'firs dialog', likesCount: 12},
        {id: 2, message: 'second dialog', likesCount: 10},
        {id: 3, message: '3 dialog', likesCount: 12},

    ]}

it('array will be increment', () => {
    // 1. test data
    let action = addPostActionCreator('My profile reducer')

    // 2. action
    let newState = profileReducer(initialState, action)

    // 3. expectation
    expect(newState.dialogsData.length).toBe(4)

})

it('message should be correct', () => {
    let action = addPostActionCreator('My profile reducer')

    let newState = profileReducer(initialState, action)

    expect(newState.dialogsData[3].message).toBe('My profile reducer')

})

test('after deleting the array should shrink', () => {
    let action = deletePost(2)

    let newState = profileReducer(initialState, action)

    expect(newState.dialogsData.length).toBe(2)

})



