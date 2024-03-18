import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type HeaderContainerProps = {
    setAuth: () => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerProps, {}> {
    componentDidMount() {
        this.props.setAuth()
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

export default connect(mapStateToProps, {setAuth})(HeaderContainer);