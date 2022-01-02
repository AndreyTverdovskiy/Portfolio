import React from "react";
import s from './Footer.module.scss'
import Title from "../common/components/title/Title";

function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${s.container}`}>
                <Title title={'Andrey Tverdovskiy'}/>
                <div className={s.icons}>
                    <div className={s.icon}>
                        <a href={''}>
                            <img src={''} alt={''}/>
                        </a>
                    </div>
                    <div className={s.icon}>
                        <a href={''}>
                            <img src={''} alt={''}/>
                        </a>
                    </div>
                    <div className={s.icon}>
                        <a href={''}>
                            <img src={''} alt={''}/>
                        </a>
                    </div>
                    <div className={s.icon}>
                        <a href={''}>
                            <img src={''} alt={''}/>
                        </a>
                    </div>
                </div>
                <span className={s.copyright}>2022 All Right Reserved</span>
            </div>
        </div>
    )
}

export default Footer