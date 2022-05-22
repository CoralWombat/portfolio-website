import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/main/Contact';
import Experience from './components/main/Experience';
import Introduction from './components/main/Introduction';
import Projects from './components/main/Projects';
import './input.css';

ReactDOM.render(
    <div className='max-w-screen-lg m-auto bg-custom-light text-custom-dark pb-4 px-8'>
        <Introduction />
        <Projects />
        <Experience />
        <Contact />
    </div>,
    document.getElementById('root')
);
