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
import Users from "./Users";


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;


