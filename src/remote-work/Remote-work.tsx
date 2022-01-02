import React from "react";
import s from "./Remote-work.module.scss";
import Button from "../common/components/button/Button";

function RemoteWork() {
    return (
        <div className={s.workBlock}>
            <div className={`${s.workContainer}`}>
                <h2 className={s.title}>I am considering the option of remote work</h2>
                {/*<button className={s.button}>Hire me</button>*/}
                <Button description={'Hire me'}/>
            </div>
        </div>
    )
}

export default RemoteWork