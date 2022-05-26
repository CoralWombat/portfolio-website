import React from 'react';

class CompactCard extends React.Component {
    render() {
        return (
            <div className='rounded-2xl p-6 custom-shadow custom-border flex flex-col justify-center items-center'>
                <h3 className='h3'>{this.props.title}</h3>
                <div className='w-3/4 m-2 horizontal-line' />
                <h5 className='h5'>{this.props.subTitle}</h5>
            </div>
        );
    }
}

export default CompactCard;
