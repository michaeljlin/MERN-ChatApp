import React from 'react';
import { Link } from 'react-router-dom';

export default props =>{
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Chat App</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign in</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}