import s from './ProfileInfo.module.css'
import React, {useState} from "react";
import mainImg from "../../../../images/main1.jpg";
import {changeStatus, ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/preloader/Preloader";
import {useDispatch} from "react-redux";

type ProfileInfoProps = {
    profile: ProfileType
}

export function ProfileInfo(props: ProfileInfoProps) {
    const dispatch = useDispatch()
    const [status, setStatus] = useState<string>('')

    const onChangeStatus = (status: string) => {
        dispatch(changeStatus(status))
    }

    if (!props.profile.userId) {
        return <Preloader/>
    }


    return (
        <div className={s.profileInfo}>
            <div className={s.main_image}>
                <img
                    src={mainImg}
                    alt={'Main picture'}/>
            </div>
            <div className={s.descriptionBlock}>
                <div>Name: {props.profile.fullName}</div>
                <div>Status: {props.profile.status}</div>
                <input type={"text"} value={status} onChange={(e) => setStatus(e.currentTarget.value)}/>
                <button onClick={() => onChangeStatus(status)}>ChangeStatus</button>
                <div><img alt={'small photo'} src={props.profile.photos.small}/></div>

                ava+description
            </div>
        </div>
    )
}