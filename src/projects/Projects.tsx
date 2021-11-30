import React from 'react';
import s from './Projects.module.scss';
import sContainer from '../common/styles/Container.module.css'
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import todoImage from '../assets/image/todolist.jpg'
import socialImage from '../assets/image/social-network.jpg'

function Projects() {

    const todo = {
        backgroundImage: `url(${todoImage})`
    }

    const social = {
        backgroundImage: `url(${socialImage})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={'My projects'}/>
                <div className={s.projects}>
                    <Project title={'TodoList'}
                             style={todo}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur distinctio eligendi eveniet'}
                    />
                    <Project title={'Social network'}
                             style={social}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    />

                </div>
            </div>

        </div>
    );
}


export default Projects;