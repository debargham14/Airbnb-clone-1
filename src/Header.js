import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img className="header_icon" src="/images/images/airbnb_logo.jpg" /></Link>
            
            <div className="header_center">
                <input type="text"/>
                <SearchIcon className="header_search"/>
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
               <div class="header_two_icon"><DehazeIcon/>    <AccountCircleIcon/></div> 
               

            </div>
        </div>
    )
}

export default Header
