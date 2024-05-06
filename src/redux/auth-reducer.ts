import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";

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
    isAuth: true
}

const authReducer = (state: AuthData = initialState, action: AuthActionsType): AuthData => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload.data}
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

export type AuthResponse<T = AuthData> = {
    resultCode: number
    messages: string[]
    data: T
}


export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.data.resultCode == 0) {
                const authData = res.data.data
                dispatch(setAuthUserData(authData))
            }
        })
}

export type LoginPropsType = {
    email: string,
    password: string,
    rememberMe?: boolean
}
export const login = (data: LoginPropsType): AppThunk => (dispatch) => {
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode == 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const logout = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode == 0) {
                dispatch(setAuthUserData({login: null, email: null, id: null, isAuth: false}))
            }
        })
}

export default authReducer;