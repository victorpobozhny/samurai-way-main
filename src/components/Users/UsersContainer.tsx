import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import store, {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        usersPage: state.usersPage.users
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;


