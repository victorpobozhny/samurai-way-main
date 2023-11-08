import React from 'react'
import mainImg from "../images/main.jpg";
import './../css/Profile.css'



const Profile = () => {
    return (
        <div className={'profile'}>
            <div className={'main-image'}><img
                src={mainImg}
                alt={'Main picture'}/>
            </div>
            <div>ava+description</div>
            <div>My posts
                <div> new post</div>
                <div>Post1</div>
                <div>Post2</div>
                <div>post3</div>
            </div>
            <p>Main Content</p>
        </div>
    )
}

export default Profile;