import React from 'react';
import TimelineCard from '../widgets/TimelineCard';

class Experience extends React.Component {
    render() {
        return (
            <div className='my-32'>
                <h2>Experience</h2>
                <div className='flex flex-col items-center justify-center'>
                    <TimelineCard companyName='Dorsum | Investment Software' roleName='Java Software Engineer' from='May 2018' />
                    <TimelineCard companyName='EPAM Systems' roleName='Java Software Engineer' from='Oct 2021' />
                </div>
            </div>
        );
    }
}

export default Experience;