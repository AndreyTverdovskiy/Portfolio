import React from 'react';
import s from './Main.module.scss'
import sContainer from '../common/styles/Container.module.css'
import me from '../assets/image/me.jpg'

function Main() {

    const meImg = {
        backgroundImage:`url(${me})`
    }

    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Andrey Tverdovskiy</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo} style={meImg}/>
            </div>
        </div>
    );
}

export default Main;
