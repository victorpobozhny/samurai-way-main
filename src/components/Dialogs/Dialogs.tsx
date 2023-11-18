import React from 'react'
import s from './Dialogs.module.css'

type DialogsPropsType = {
    name?: string
}


const Dialogs = (props: string) => {
    return (
        <div>
            My Dialogs ------- hardcode
            {/*{props.name}*/}

        </div>
    )
}

export default Dialogs;