import React from "react";
import s from './Contacts.module.css'
import sContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={` ${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactsForm} action='URL'>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea/>
                    <button type='submit' className={s.button}>Send</button>
                </form>

            </div>

        </div>
    )
}

export default Contacts