import React from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {AppRootStateType} from "../../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type OnPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {


    componentDidMount() {
        let userId = +this.props.match.params.userId || 30574
        this.props.getUserProfile(userId)
    }

    render() {

        if(!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }


        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


let DataWithURLContainerComponent = withRouter(ProfileContainer)

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getUserProfile})(DataWithURLContainerComponent)