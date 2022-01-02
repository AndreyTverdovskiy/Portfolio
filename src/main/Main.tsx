import React from 'react';
import s from './Main.module.scss'

import me from '../assets/image/me.jpg'

function Main() {

    const meImg = {
        backgroundImage: `url(${me})`
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <span>I am Andrey <span>Tverdovskiy</span></span>
                    <h1>Front-end Developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.image} style={meImg}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
