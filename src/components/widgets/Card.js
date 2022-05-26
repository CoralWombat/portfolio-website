import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className='p-12 custom-rounded custom-border dark:bg-custom-dark'>

                <div className='lg:rounded-t-xl'>
                    <h4>{this.props.subTitle}</h4>
                    <h3>{this.props.mainTitle}</h3>
                    <h5>{this.props.subSubTitle}</h5>
                    <h3 className='flex justify-center'>{this.props.icon}</h3>
                </div>
                <div className='horizontal-line my-4' />
                <div>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Card;
