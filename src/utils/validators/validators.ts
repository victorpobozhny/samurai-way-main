export const required = (value: string) => {
    const errorMessage = 'Field is required'
    return value ? errorMessage : undefined
}


export const maxLengthCreator = (maxLength: number) => (value: string) => {
    const errorMessage = `Max length is ${maxLength} symbols`
    return value && value.length > maxLength ? errorMessage : undefined
}
