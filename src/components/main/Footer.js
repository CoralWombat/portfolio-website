import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

class Footer extends React.Component {
    render() {
        return <div className='w-screen bg-custom-color p-16' >
            <footer>Handcrafted by me &nbsp;<BiCopyright />&nbsp; with React <FaReact />&nbsp; and Tailwind CSS <SiTailwindcss />.</footer>
        </div>
    }
}

export default Footer;