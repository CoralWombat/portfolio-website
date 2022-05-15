import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/main/Header';
import Body from './components/main/Body';
import Footer from './components/main/Footer';

ReactDOM.render(
    <div>
        <Header />
        <Body />
        <Footer />
    </div>,
    document.getElementById('root')
);
