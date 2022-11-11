import React from "react";
import './index.scss';
import empty from '../../assets/empty.jpg'
import { APIContext } from "../../services/context";

export function ProfileCard() {
    const {
        info
    } = React.useContext(APIContext);

    const { picture, name, login } = info;
    
    return(
        <div className="profile-card">
            <img className="profile-card__image" src={picture ? picture.large : empty} alt="profile" />
            <div className="profile-card__info-container">
                <p className="info-name">{name ? `${name.title} ${name.first} ${name.last}` : ""}</p>
                <p>{login ? login.username : ""}</p>
            </div>
            <div className="profile-card__info-wrapper">
                <div className="info-container">
                    <p className="info-name">Email:</p>
                    <p className="info-data">{info.email}</p>
                </div>
                <div className="info-container">
                    <p className="info-name">Phone:</p>
                    <p className="info-data">{info.phone}</p>
                </div>
            </div>
        </div>
    )
}