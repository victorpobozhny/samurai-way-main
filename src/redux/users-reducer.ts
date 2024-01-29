type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
export type UsersActionsType = FollowACType | UnfollowACType | SetUsersACType
export type UserType = {
    id: string
    photoURL: string
    fullName: string
    status: string
    followed: boolean
    location: {
        country: string
        city: string
    }
}
type UsersReducerState = {
    users: UserType[]
}

let initialState = {
    users: [
        {
            id: '1',

            fullName: 'Dmitry',
            photoURL: 'https://img07.rl0.ru/afisha/e1200x1200i/daily.afisha.ru/uploads/images/e/e6/ee61603b83298547cb43d2c70c8af339.jpg',
            status: `I'm a boss`,
            followed: false,
            location: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            id: '2',
            fullName: 'Nastya',
            photoURL: 'https://img07.rl0.ru/afisha/e1200x1200i/daily.afisha.ru/uploads/images/e/e6/ee61603b83298547cb43d2c70c8af339.jpg',
            status: `I'm a Nastya`,
            followed: false,
            location: {
                country: 'Belarus',
                city: 'Grodno'
            }
        },
        {
            id: '3',
            fullName: 'Max',
            photoURL: 'https://img07.rl0.ru/afisha/e1200x1200i/daily.afisha.ru/uploads/images/e/e6/ee61603b83298547cb43d2c70c8af339.jpg',
            status: `I'm a in Moscow`,
            followed: true,
            location: {
                country: 'Russia',
                city: 'Moscow'
            }
        }
    ]
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
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollowAC = (userId: string) => {
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