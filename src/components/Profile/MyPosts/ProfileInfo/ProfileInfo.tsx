import s from './ProfileInfo.module.css'
import React from "react";
import mainImg from "../../../../images/main1.jpg";


export function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            <div className={s.main_image}>
                <img
                    src={mainImg}
                    alt={'Main picture'}/>
            </div>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>
    )
}