import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {Link} from 'react-router-dom';

const Header = (props) => (
    <div className='header'>

        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
            
        <div className='options'>
            
            <Link to='/invoice' className='option'>Invoice</Link>
            
        </div>

    </div>
);

export default Header;

    // <div className='logo-container'>
    //     <Logo className='logo'></Logo>
    // </div>