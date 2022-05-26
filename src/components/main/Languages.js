import React from 'react';
import Card from '../widgets/Card';

class Languages extends React.Component {
    render() {
        return (
            <div className='my-32  flex flex-col items-center justify-center'>
                <h2>Spoken Languages</h2>
                <div className='mx-8 grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-screen-lg lg:m-auto'>
                    <Card
                        mainTitle='Hungarian'
                        subSubTitle='Native'
                        content={<p>Hungarian is my native language.</p>} />
                    <Card
                        mainTitle='English'
                        subSubTitle='Conversational'
                        content={<p>I have a certification of Common European Framework of Reference at B2 level for both written and conversational skills.</p>} />
                </div>
            </div>
        );
    }
}

export default Languages;