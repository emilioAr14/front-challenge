import React from "react";
import './index.scss';
import { TfiExport } from "react-icons/tfi";

export function ActionButton() {
    return(
        <button className="export-btn">
            <p className="export-btn__text">Export</p>
            <TfiExport className="export-btn__icon"></TfiExport>
        </button>
    )
}