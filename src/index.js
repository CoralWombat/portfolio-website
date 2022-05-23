import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/main/Contact';
import Experience from './components/main/Experience';
import Introduction from './components/main/Introduction';
import Projects from './components/main/Projects';
import Footer from './components/main/Footer';
import './input.css';

ReactDOM.render(
    <div>
        <div className='max-w-screen-lg m-auto bg-custom-light text-custom-dark px-8 dark:bg-custom-dark'>
            <Introduction />
            <Projects />
            <Experience />
            <Contact />
        </div>
        <Footer />
    </div>,
    document.getElementById('root')
);