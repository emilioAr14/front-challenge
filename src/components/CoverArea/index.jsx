import React from "react";
import './index.scss';
import CoverImage from '../../assets/cover.jpg'

export function CoverArea() {
    return(
        <header className="image-container">
            <img id="cover-image" src={ CoverImage } alt="Cover"/>
        </header>
    )
}   