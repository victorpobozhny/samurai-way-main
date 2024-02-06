import React from 'react';
import {connect} from "react-redux";
import store, {AppRootStateType} from "../../redux/redux-store";
import {
    changeCurrentPageAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";

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

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = () => {
    return {
        follow: (userId: number) => {
            store.dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            store.dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            store.dispatch(setUsersAC(users))
        },
        changeCurrentPage: (currentPageNum: number) => {
            store.dispatch(changeCurrentPageAC(currentPageNum))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            store.dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

class UsersContainer extends React.Component<UsersPropsType, {}> {

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
        return (
            <div>
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                />
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


