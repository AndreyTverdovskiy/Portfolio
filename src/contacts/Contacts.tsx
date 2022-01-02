import React from "react";
import s from './Contacts.module.scss'
import Title from "../common/components/title/Title";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.container}`}>
                <Title title={'Contacts'}/>
                <form className={s.form}>
                    <input type='text' className={s.formArea} placeholder={'Name'}/>
                    <input type='text' className={s.formArea} placeholder={'e-mail'}/>
                    <textarea className={s.massageArea} placeholder={'Message'}/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts