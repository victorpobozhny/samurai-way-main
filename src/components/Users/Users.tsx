import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './users.module.css'

type UsersPropsType = {
    usersPage: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
    if(props.usersPage.length==0){
        props.setUsers([
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
        ])
    }
    return (
        <div>
            {props.usersPage.map(el => {
                return <div key={el.id}>
                    <div>
                        <img alt={el.fullName} src={el.photoURL} className={styles.userPhoto}/>
                    </div>
                    <div>
                        <div>{el.fullName}</div>
                        <div>
                            <span>{el.location.country}</span>
                            <span>{el.location.city}</span>
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