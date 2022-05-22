import React from 'react';
import ExperienceCard from '../widgets/ExperienceCard';

class Experience extends React.Component {
    render() {
        return (
            <div className='my-32'>
                <h2>Experience</h2>
                <div className='flex flex-col items-center justify-center'>
                    <ExperienceCard companyName='Dorsum | Investment Software' roleName='Java Software Engineer' from='May 2018' />
                    <ExperienceCard companyName='EPAM Systems' roleName='Java Software Engineer' from='Oct 2021' />
                </div>
            </div>
        );
    }
}

export default Experience;