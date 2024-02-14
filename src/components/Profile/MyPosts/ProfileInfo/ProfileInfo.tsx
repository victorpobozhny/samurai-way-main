import s from './ProfileInfo.module.css'
import React from "react";
import mainImg from "../../../../images/main1.jpg";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/preloader/Preloader";

type ProfileInfoProps = {
    profile: ProfileType
}

export function ProfileInfo( props: ProfileInfoProps) {
    if(!props.profile.userId) {
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
                <div>Status: {props.profile.aboutMe}</div>
                <div><img alt={'small photo'} src={props.profile.photos.small}/></div>

                ava+description
            </div>
        </div>
    )
}