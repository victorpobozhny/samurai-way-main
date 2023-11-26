import React from 'react'
import s from './Sidebar.module.css'
import {Friend, FriendType} from "./Friend/Friend";

type SidebarPropsType = {
    friends: Array<FriendType>
}


const Sidebar = (props: SidebarPropsType) => {
    const friendsList = props.friends.map(el => {
        return <Friend name={el.name} avatar={el.avatar} surname={el.surname}/>
    })

    return (
        <div className={s.sidebar}>
            {friendsList}
        </div>
    )
}

export default Sidebar;