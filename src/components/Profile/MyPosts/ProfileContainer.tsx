import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {AppRootStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type OnPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {


    componentDidMount() {
        let userId = this.props.match.params.userId || '30574'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                    console.log(response)
                    this.props.setUserProfile(response.data)
                }
            )
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


let DataWithURLContainerComponent = withRouter(ProfileContainer)

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(DataWithURLContainerComponent)