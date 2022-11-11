import React from "react";
import './index.scss';

export function NavMenu(props) {
    return(
        <nav className="nav-container">
            <ul className="nav">
                {props.children}
            </ul>
        </nav>
    )
}