import React from 'react';
import {connect} from "react-redux";
import store, {AppRootStateType} from "../../redux/redux-store";
import {
    changeCurrentPageAC, fetchingAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import loading from './../../images/Internet.gif'
import {Preloader} from "../common/preloader/Preloader";

export type UsersPropsType = {
    users: UserType[]
    isFetching: boolean
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (currentPageNum: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            store.dispatch(fetchingAC(isFetching))
        }
    }
}

class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.toggleIsFetching(false)
                    console.log(response)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.changeCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.toggleIsFetching(false)
                    console.log(response)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                />
            </>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


