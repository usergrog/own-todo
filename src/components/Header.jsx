import React from 'react'
import {Link} from 'react-router-dom'

export const Header = (props) => (
    <header className='header'>
        <nav>
            <Link className="header-link" to='/'>Home</Link>
            {props.username
                ? <Link className="header-link" to='/logout'>Logout</Link>
                : <Link className="header-link" to='/login'>Login</Link>}

            <Link className="header-link" to='/about'>About</Link>
            {props.username
                ? <span>You logged as {props.username}</span>
                : <span/>}
        </nav>

    </header>
)



