import React from 'react';
import styles from "./users.module.css";
import defaultUserPhoto from "../../images/defaultUser.avif";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom'
import axios from "axios";

type UsersPropsType = {
    currentPage: number
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (page: number) => void
    totalUsersCount: number
    pageSize: number
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={styles.numberOfPages}>
                {pages.map(el => {
                    return (
                        <span
                            className={props.currentPage == el ? styles.selectedPage : styles.page}
                            onClick={() => props.onPageChanged(el)}
                        >
                                {el}
                            </span>
                    )
                })}
            </div>
            {props.users.map(el => {
                return <div key={el.id}>
                    <div>
                        <NavLink to={'profile/' + el.id}>
                            <img
                                alt={el.name}
                                src={el.photos.small
                                    ? el.photos.small
                                    : defaultUserPhoto}
                                className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        <div>{el.name}</div>
                        <div>
                            <span>{'el.location.country'}</span>
                            <span>{'el.location.city'}</span>
                        </div>
                        <div>{el.status}</div>
                        <div>{el.followed ? `You are following` : `You aren't following`}</div>
                        {!el.followed
                            ? <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {withCredentials: true})
                                    .then(res => {
                                        if(res.data.resultCode==0) {
                                            props.follow(el.id)
                                        }
                                    })
                                //props.unfollow(el.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {withCredentials: true})
                                    .then(res => {
                                        if(res.data.resultCode==0) {
                                            props.unfollow(el.id)
                                        }
                                    })
                                //props.unfollow(el.id)
                            }}>Unfollow</button>
                        }
                    </div>
                </div>
            })}
        </div>
    );
};

