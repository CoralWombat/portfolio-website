import React from 'react';
import ProjectsCard from '../widgets/ProjectsCard';
import {RiBankLine} from 'react-icons/ri';
import {GiSwissArmyKnife} from 'react-icons/gi';

class Projects extends React.Component {
    render() {
        return (
            <div className='mb-32'>
                <h2>Projects</h2>
                <div className='my-8 grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <ProjectsCard
                        lifeSpan='May 2018 - Oct 2021'
                        role='Backend Developer'
                        title='Takarékbank'
                        icon={<RiBankLine/>}
                        text='Takarékbank is a major bank based in Hungary with over 1.9 million customers. The goal of the project that I participated in was to create an investment software that can modernizate the securities trading system.'
                        tehcnologies={['Java', 'Spring MVC', 'Oracle Weblogic 12c, later WildFly', 'Oracle Database', 'Docker']} />

                    <ProjectsCard
                        lifeSpan='Oct 2021 - Present'
                        role='Frontend Developer'
                        title='Major Swiss Bank'
                        icon={<GiSwissArmyKnife/>}
                        text='My task was to maintain around 70 different front end applications. Each projects have different business purpose, only the framework was common. Maintaining means implementing new requirements, fixing issues, and doing code quality reviews.'
                        tehcnologies={['Java', 'Spring MVC Boot', 'ReactJS']} />
                </div >
            </div>
        );
    }
}

export default Projects;
