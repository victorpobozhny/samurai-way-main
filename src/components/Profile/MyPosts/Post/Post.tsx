import React, {FC} from 'react'
import Audrey from '../../../../images/firends/AudreyHorn.png'
import s from './Post.module.css'

type PostPropsType = {
    text: string,
    author: string
    id: number
    likesCount: number
}

const Post: FC<PostPropsType> = (props) => {
    return (
        <div className={s.post}>
            <div><img src={Audrey} alt={'Logo'}/>
                <span>{props.author}</span></div>
            <span>{props.text}</span>
            <button>Like</button>
            <span>{props.likesCount}</span>
        </div>
    )
}

export default Post;