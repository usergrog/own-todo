import React from 'react'
import {Link} from 'react-router-dom'
import ErrorAlertBox from "./ErrorAlertBox";

export const Header = (props) => (
    <div className='headerContainer'>
        <header className='header'>
            <nav>
                <Link className="header-link" to='/'>Home</Link>
                {props.username
                    ? <Link className="header-link" to='/logout'>Logout</Link>
                    : <Link className="header-link" to='/login'>Login</Link>}

                <Link className="header-link" to='/about'>About</Link>
                {props.username
                    ? <span>You are logged as {props.username}</span>
                    : <span/>}
            </nav>
        </header>

        {props.appError && <ErrorAlertBox/>}
    </div>
)




