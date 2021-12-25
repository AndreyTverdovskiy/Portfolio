import React from 'react';
import s from './Skill.module.scss';

type skillPropsType = {
    title: string
    style: {
        backgroundImage: string
    }
    description: string
}


function Skill(props: skillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}/>
            <div className={s.skillInfo}>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <span className={s.description}>
                    {props.description}
                </span>
            </div>
        </div>
    );
}

export default Skill;
