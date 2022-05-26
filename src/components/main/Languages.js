import React from 'react';
import Card from '../widgets/Card';
import CompactCard from '../widgets/CompactCard';

class Languages extends React.Component {
    render() {
        return (
            <div className='my-32  flex flex-col items-center justify-center'>
                <h2>Spoken Languages</h2>
                <div className='mx-8 grid grid-cols-2 gap-4 max-w-screen-lg lg:m-auto'>
                    <CompactCard title='Hungarian' subTitle='Native' />
                    <CompactCard title='English' subTitle='Conversational (B2)' />
                </div>
            </div>
        );
    }
}

export default Languages;