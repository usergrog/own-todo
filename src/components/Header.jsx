import React from 'react'
import {Link} from 'react-router-dom'

export const Header = (props) => (
    <header>
        <nav>
            <Link className="link" to='/'>Home</Link>
            {props.username
                ? <Link className="link" to='/logout'>Logout</Link>
                : <Link className="link" to='/login'>Login</Link>}

            <Link className="link" to='/about'>About</Link>
            {props.username
                ? <span>You logged as {props.username}</span>
                : <span/>}
            <span>oops3</span>
        </nav>

    </header>
)



