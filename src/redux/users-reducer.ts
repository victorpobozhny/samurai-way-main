type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
export type UsersActionsType = FollowACType | UnfollowACType | SetUsersACType
export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: {
        small: string | null
        big: string | null
    }
    status: string | null
    uniqueUrlName: string | null
}
type UsersReducerState = {
    users: UserType[]
}

let initialState = {
    users: []
}

const usersReducer = (state: UsersReducerState = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id == action.userId ? {...el, followed: true} : el)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id == action.userId ? {...el, followed: false} : el)
            }
        case "SET-USERS":
            return {

                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export default usersReducer;