import React from "react";
import styles from './users.module.css'
import axios from "axios";
import defaultUserPhoto from './../../images/defaultUser.avif'

import {UserType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (currentPageNum: number) => void
    setTotalUsersCount: (usersCount: number) => void
}

class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    console.log(response)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged = (page: number) => {
        this.props.changeCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                    console.log(response)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                                className={this.props.currentPage == el ? styles.selectedPage : styles.page}
                                onClick={() => this.onPageChanged(el)}
                            >
                                {el}
                            </span>
                        )
                    })}
                </div>
                {this.props.users.map(el => {
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
                                    this.props.unfollow(el.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(el.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default Users