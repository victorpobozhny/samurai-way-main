export type AuthActionsType = ReturnType<typeof setAuthUserData>

export type AuthData = {
    id: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: AuthData = initialState, action: AuthActionsType): AuthData => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthData) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            data
        }
    } as const
}

export type AuthResponse = {
    resultCode:number
    messages: string[]
    data: AuthData
}

export default authReducer;