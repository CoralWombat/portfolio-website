import React from 'react';
import CompactCard from './CompactCard';

class TimelineCard extends React.Component {
    render() {
        return (
            <div>
                {this.verticalLine()}
                <p className='px-4 py-2 justify-center custom-shadow custom-border rounded-full'>{this.props.from}</p>
                {this.verticalLine()}
                <CompactCard title={this.props.companyName} subTitle={"as " + this.props.roleName} />
            </div>
        );
    }

    verticalLine() {
        return <div className='m-auto h-8 bg-custom-dark w-custom-thin-line lg:w-custom-thin-line-lg dark:bg-custom-light' />;
    }
}

export default TimelineCard;
