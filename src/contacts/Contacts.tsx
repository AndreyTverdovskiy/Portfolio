import React from "react";
import s from './Contacts.module.css'
import sContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={` ${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactsForm} action='URL'>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button className={s.button}>Send</button>
            </div>

        </div>
    )
}

export default Contacts