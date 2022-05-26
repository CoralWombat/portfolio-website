import React from 'react';
import { RiBankLine } from 'react-icons/ri';
import { GiSwissArmyKnife } from 'react-icons/gi';
import Card from '../widgets/Card';

class Projects extends React.Component {
    render() {
        return (
            <div className='mb-32'>
                <h2>Projects</h2>
                <div className='mx-8 grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-screen-lg lg:m-auto'>
                    <Card
                        mainTitle='Takarékbank'
                        subTitle='May 2018 - Oct 2021'
                        subSubTitle='as Backend Developer'
                        icon={<RiBankLine />}
                        content={this.produceContent(
                            'Takarékbank is a major bank based in Hungary with over 1.9 million customers. The goal of the project that I participated in was to create an investment software that can modernizate the securities trading system.',
                            ['Java', 'Spring Boot', 'Oracle Weblogic 12c, later WildFly', 'Oracle Database', 'Docker']
                        )}
                    />

                    <Card
                        mainTitle='Major Swiss Bank'
                        subTitle='Oct 2021 - Present'
                        subSubTitle='as Frontend Developer'
                        icon={<GiSwissArmyKnife />}
                        content={this.produceContent(
                            'My task was to maintain around 70 different front end applications. Each projects have different business purpose, only the framework was common. Maintaining means implementing new requirements, fixing issues, and doing code quality reviews.',
                            ['Java', 'Spring Boot', 'ReactJS']
                        )}
                    />
                </div >
            </div>
        );
    }

    produceContent(text, tehcnologies) {
        return (
            <div>
                <p>
                    {text}
                </p>
                <br />
                <p className='font-medium'>Used technologies:</p>
                {this.getTechList(tehcnologies)}
            </div>
        );
    }

    getTechList(tehcnologies) {
        const listItems = tehcnologies.map(element => {
            return (<li>{element}</li>);
        });
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default Projects;
