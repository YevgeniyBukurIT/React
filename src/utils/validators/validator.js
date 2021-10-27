export const required = (value) => {
    if(value) return undefined
    return 'Field required'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length > 30) return `Max length ${maxLength} symbols `
    return undefined
}