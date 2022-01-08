import React from "react";
import s from './Footer.module.scss'
import Title from "../common/components/title/Title";
import linkedIn from '../assets/image/linkedIn.png'
import telegram from '../assets/image/telegram.png'
import facebook from '../assets/image/facebook.png'

function Footer() {


    return (
        <div className={s.footer}>
            <div className={`${s.container}`}>
                <Title title={'Andrey Tverdovskiy'}/>
                <div className={s.icons}>
                    <div className={s.icon}>
                        <a href={'https://www.linkedin.com/in/andrey-tverdovskiy-2848a5173/'}>
                            <img src={linkedIn} alt={'linkedIn'}/>
                        </a>
                    </div>
                    <div className={s.icon}>
                        <a href={'https://t.me/luxe966'}>
                            <img src={telegram} alt={'telegram'}/>
                        </a>
                    </div>
                    <div className={s.icon}>
                        <a href={'https://www.facebook.com/profile.php?id=100001687814711'}>
                            <img src={facebook} alt={'facebook'}/>
                        </a>
                    </div>
                </div>
                <span className={s.copyright}>2022 All Right Reserved</span>
            </div>
        </div>
    )
}

export default Footer