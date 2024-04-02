import { ProfileType } from "../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";


type ProfileProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfileProps) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;