import React from 'react';
import s from './Button.module.scss'

type buttonPropsType = {
    description: string
}

function Button(props:buttonPropsType) {
    return (
        <a href={''} className={s.btn}>{props.description}</a>
    )
}

export default Button