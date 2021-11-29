import React from 'react';
import s from './Project.module.css';

type projectPropsType = {
    title: string
    description: string
}


function Project(props: projectPropsType) {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <button className={s.button}>See</button>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Project;
