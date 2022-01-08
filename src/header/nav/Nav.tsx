import React from 'react';
import s from './Nav.module.scss';

function Nav() {
    return (
        <div className={s.nav}>
            <a className={s.point} href="#">Main</a>
            <a className={s.point}  href="#">Skills</a>
            <a className={s.point}  href="#">Projects</a>
            <a className={s.point}  href="#">Contacts</a>
        </div>
    );
}

export default Nav;
