import s from './Friend.module.css'

export type FriendType = {
    name: string
    surname: string
    avatar: string
}

export function Friend (props: FriendType) {
    return (
        <div className={s.friend}>
            <img src={props.avatar} alt={props.name} className={s.friendAvatar}/>
            <div className={s.friendName}>{props.name}</div>
        </div>
    )
}