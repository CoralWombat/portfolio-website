import React from 'react';

class ExperienceCard extends React.Component {
    render() {
        return (
            <div>
                {this.verticalLine()}
                <p className='px-4 py-2 justify-center custom-shadow custom-border rounded-full'>{this.props.from}</p>
                {this.verticalLine()}
                <div className='rounded-2xl p-6 custom-shadow custom-border flex flex-col justify-center items-center'>
                    <h3 className='h3'>{this.props.companyName}</h3>
                    <div className='w-3/4 m-2 horizontal-line' />
                    <h5 className='h5'>as {this.props.roleName}</h5>
                </div>
            </div>
        );
    }

    verticalLine() {
        return <div className='m-auto h-8 bg-custom-dark w-custom-thin-line lg:w-custom-thin-line-lg dark:bg-custom-light' />;
    }
}

export default ExperienceCard;
