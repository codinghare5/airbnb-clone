import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header" >
            <div className="header__left">
                <Link to="/">
                    <img 
                        className="header__icon"
                        src="https://i.pinimg.com/736x/3c/bf/be/3cbfbe148597341fa56f2f87ade90956--spare-room-logo-ideas.jpg"
                        alt=""
                    />
                </Link>
            </div>
            <div className="header__center">
                <input type="text" className="header__searchInput"/>
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />

            </div>
        </div>
    )
}

export default Header;
