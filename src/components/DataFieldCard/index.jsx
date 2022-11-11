import React from "react";
import './index.scss';

export function DataFieldCard(props) {
    return(
        <div className="dataField-card">
            {props.children}
        </div>
    )
}