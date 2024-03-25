import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followUser, getUsers, toggleFollowingProgress, unfollowUser, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export type UsersPropsType = {
    users: UserType[]
    isFetching: boolean
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    followingProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}


class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return (

            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    followingProgress={this.props.followingProgress}
                />
            </>
        )
    }
}

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUsers
}))(UsersContainer)
