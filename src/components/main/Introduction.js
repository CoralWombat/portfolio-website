import React from 'react';
import { MdWavingHand } from 'react-icons/md'

class Introduction extends React.Component {

    render() {
        return (
            <div className='min-h-screen flex flex-col items-center gap-4 justify-center lg:flex-row bg-colored-smoke bg-custom bg-no-repeat'>
                {this.introductionPicture()}
                <div className='bg-custom-dark w-7/12 h-custom-thin-line rounded-custom-border-radius custom-shadow lg:h-44 lg:w-custom-thin-line-lg dark:bg-custom-light' />
                {this.introductionText()}
            </div>
        );
    }

    introductionText() {
        return (
            <h1>
                <div className='flex justify-center lg:justify-start'>Hi, &nbsp;<MdWavingHand className='wave' /></div>
                <div>I'm Kristóf,</div>
                <div>Full stack developer.</div>
            </h1>
        );
    }

    introductionPicture() {
        return (
            <img className='rounded-picture w-96 lg:w-56' src={process.env.PUBLIC_URL + '/images/profpic.jpg'} />
        );
    }
}

export default Introduction;
