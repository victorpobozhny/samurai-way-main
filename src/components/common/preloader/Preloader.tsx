import React from 'react';
import loading from "../../../images/loader.svg";

type PreloaderProps = {

}

export const Preloader = (props: PreloaderProps) => {
    return (
        <div>
            <img src={loading} alt={'preloader'} style={{background: '#8c79d7', width: '65px'}}/>
        </div>
    );
};

