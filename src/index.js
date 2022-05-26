import React from 'react';
import ReactDOM from 'react-dom';
import './input.css';
import Contact from './components/main/Contact';
import Experience from './components/main/Experience';
import Introduction from './components/main/Introduction';
import Projects from './components/main/Projects';
import Footer from './components/main/Footer';
import Languages from './components/main/Languages';
import Skills from './components/main/Skills';

ReactDOM.render(
    <div>
        <div>
            <Introduction />
            <Projects />
            <Skills />
            <Experience />
            <Languages />
            <Contact />
        </div>
        <Footer />
    </div>,
    document.getElementById('root')
);