import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img 
                className='headerIcon' 
                src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png' 
                alt='logo'/>
            </Link>
            
            <div className='headerSearch'>
                <input type='text' />
                <Link to='/search'>
                    <SearchIcon />
                </Link>
            </div>

            <div className='headerUser'>
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon />
                <Avatar />

            </div>
        </div>
    )
}

export default Header
