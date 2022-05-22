import React from 'react';
import { BsLinkedin } from 'react-icons/bs'

class Contact extends React.Component {
    render() {
        return (
            <div className='flex justify-center'>
                <a href='https://www.linkedin.com/in/kristofgonczo/'>
                    Contact me at &nbsp;<BsLinkedin />!
                </a>
            </div>
        );
    }
}

export default Contact;