import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './users.module.css'
import axios from "axios";
import defaultUserPhoto from './../../images/defaultUser.avif'

type UsersPropsType = {
    usersPage: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
    function getUsers () {if(props.usersPage.length==0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=> {
            console.log(response)
            props.setUsers(response.data.items)
        })

    }}
    return (

        <div>
            {props.usersPage.length
                ? ''
                :<button onClick={getUsers}>Get Users</button>}
            {props.usersPage.map(el => {
                return <div key={el.id}>
                    <div>
                        <img
                            alt={el.name}
                            src={el.photos.small
                                ? el.photos.small
                            : defaultUserPhoto}
                            className={styles.userPhoto}/>
                    </div>
                    <div>
                        <div>{el.name}</div>
                        <div>
                            <span>{'el.location.country'}</span>
                            <span>{'el.location.city'}</span>
                        </div>
                        <div>{el.status}</div>
                        <div>{el.followed ? `You are following` : `You aren't following`}</div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
                            }}>Follow</button>
                        }
                    </div>
                </div>
            })}
        </div>
    );
};