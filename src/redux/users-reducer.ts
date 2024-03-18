export type UsersActionsType =
    ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof follow>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
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
    followingProgress: number[]
}

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
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
        case "TOGGLE-FOLLOWING-IN-PROGRESS":
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(el => el != action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export const changeCurrentPage = (pageNum: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        pageNum
    } as const
}

export const setTotalUsersCount = (totalUsers: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsers
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        userId, isFetching
    } as const
}

export default usersReducer;