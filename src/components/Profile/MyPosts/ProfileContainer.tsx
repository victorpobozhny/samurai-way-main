import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {AppRootStateType} from "../../../redux/redux-store";

type ProfilePropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfilePropsType, {}> {


    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${'30574'}`)
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

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile
    }

}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)