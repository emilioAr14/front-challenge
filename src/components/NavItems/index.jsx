import React from "react";
import './index.scss';
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export function NavItem({ iconName }) {
    const Icons = {
        Home: AiFillHome,
        Message: AiFillMessage,
        Search: FiSearch,
        Profile: FaRegUserCircle,
        Settings: IoSettingsOutline
    };

    const Icon = Icons[iconName];

    return(
        <li className="item-container">
            <a href="#App" className="item">
                <Icon className="item__icon" id={"icon-" + iconName}/>
                <p className="item__text">{iconName}</p>
            </a>
        </li>
    )
}