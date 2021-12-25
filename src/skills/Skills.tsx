import React from 'react';
import s from './Skills.module.scss';
import sContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactImage from '../assets/image/react.png'
import cssImage from '../assets/image/css.png'
import jsImage from '../assets/image/js.png'

function Skills() {

    const react = {
        backgroundImage: `url(${reactImage})`
    }
    const css = {
        backgroundImage: `url(${cssImage})`
    }
    const js = {
        backgroundImage: `url(${jsImage})`
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'React'}
                           style={react}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet, ex illo, iusto natus neque nobis officia praesentium, quaerat sint sit. Eos error fugiat hic ipsa minus?'}/>
                    <Skill title={'Css'}
                           style={css}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet, ex illo, iusto natus neque nobis officia praesentium, quaerat sint sit. Eos error fugiat hic ipsa minus?'}/>
                    <Skill title={'Js'}
                           style={js}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet, ex illo, iusto natus neque nobis officia praesentium, quaerat sint sit. Eos error fugiat hic ipsa minus?'}/>

                </div>
            </div>

        </div>
    );
}


export default Skills;


