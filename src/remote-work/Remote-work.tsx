import React from "react";
import s from "./Remote-work.module.css";
import sContainer from "../common/styles/Container.module.css";

function RemoteWork() {
    return (
        <div className={s.workBlock}>
            <div className={`${sContainer.container} ${s.workContainer}`}>
                <h2 className={s.title}>I am considering the option of remote work</h2>
                <button className={s.button}>Hire me</button>
            </div>
        </div>
    )
}

export default RemoteWork