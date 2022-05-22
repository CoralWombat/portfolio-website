import React from 'react';

class ExperienceCard extends React.Component {
    render() {
        return (
            <div>
                <div className='m-auto bg-custom-color w-custom-thin-line h-8 lg:w-custom-thin-line-lg' />
                <p className='shadow-2xl rounded-2xl border-custom-thin-line border-custom-color px-4 py-1 text-center text-3xl lg:border-custom-thin-line-lg lg:text-xl'>{this.props.from}</p>
                <div className='m-auto bg-custom-color w-custom-thin-line h-8 lg:w-custom-thin-line-lg' />
                <div className='border-custom-thin-line border-custom-color bg-custom-light text-custom-dark text-center rounded-2xl p-6 shadow-2xl w-full max-w-screen-md lg:border-custom-thin-line-lg'>
                    <h3>{this.props.companyName}</h3>
                    <h5>as {this.props.roleName}</h5>
                </div>
            </div>
        );
    }
}

export default ExperienceCard;
