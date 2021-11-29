import React from 'react';
import s from './Projects.module.css';
import sContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    <Project title={'To do list'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet'}/>
                    <Project title={'Counter'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet'}/>
                    <Project title={'Social network'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet'}/>

                </div>
            </div>

        </div>
    );
}


export default Projects;