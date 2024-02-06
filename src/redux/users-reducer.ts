export type UsersActionsType =
    ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof changeCurrentPageAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof fetchingAC>
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
export type UsersReducer = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state: UsersReducer = initialState, action: UsersActionsType): UsersReducer => {
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
                ...state,
                users: action.users
            }
        case "CHANGE-CURRENT-PAGE":
            return {
                ...state, currentPage: action.pageNum
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.totalUsers
            }
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
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

export const changeCurrentPageAC = (pageNum: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        pageNum
    } as const
}
export const setTotalUsersCountAC = (totalUsers: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsers
    } as const
}

export const fetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}
export default usersReducer;