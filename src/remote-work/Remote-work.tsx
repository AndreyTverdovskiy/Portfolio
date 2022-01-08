import React from "react";
import s from "./Remote-work.module.scss";
import Button from "../common/components/button/Button";
import Title from "../common/components/title/Title";

function RemoteWork() {
    return (
        <div className={s.workBlock}>
            <div className={`${s.workContainer}`}>
                <Title title={'I am considering the option of remote work'}/>
                <Button description={'Hire me'}/>
            </div>
        </div>
    )
}

export default RemoteWork