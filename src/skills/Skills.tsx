import React from 'react';
import s from './Skills.module.css';
import sContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet, ex illo, iusto natus neque nobis officia praesentium, quaerat sint sit. Eos error fugiat hic ipsa minus?'}/>
                    <Skill title={'Css'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet, ex illo, iusto natus neque nobis officia praesentium, quaerat sint sit. Eos error fugiat hic ipsa minus?'}/>
                    <Skill title={'Js'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet, ex illo, iusto natus neque nobis officia praesentium, quaerat sint sit. Eos error fugiat hic ipsa minus?'}/>

                </div>
            </div>

        </div>
    );
}


export default Skills;


