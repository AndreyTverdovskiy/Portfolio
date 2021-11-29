import React from "react";
import s from './Footer.module.css'
import sContainer from "../common/styles/Container.module.css";

function Footer() {
    return(
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Andrey Tverdovskiy</h2>
                <div className={s.footer}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
            </div>

        </div>
    )
}

export default Footer