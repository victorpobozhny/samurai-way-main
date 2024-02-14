import React from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthData, AuthResponse, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type HeaderContainerProps = {
    setAuthUserData: (data: AuthData) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerProps, {}> {
    componentDidMount() {
        axios.get<AuthResponse>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(res => {
                if (res.data.resultCode == 0) {
                    const authData = res.data.data
                    this.props.setAuthUserData(authData)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}


const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);