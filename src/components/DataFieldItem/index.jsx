import React from "react";
import './index.scss';
import { APIContext } from "../../services/context";


export function DataFieldItem({ dataName }) {
    const {
        info
    } = React.useContext(APIContext);

    const { 
        name,
        location
    } = info;

    const dataNames = {
        "First Name": {
            type: name,
            prop: "first"
        },   
        "Last Name": {
            type: name,
            prop: "last"
        },
        "Age": {
            type: info,
            prop: "age"
        },
        "Gender": {
            type: info,
            prop: "gender"
        },
        "Country": {
            type: location,
            prop: "country"
        },
        "City": {
            type: location,
            prop: "city"
        },
        "State": {
            type: location,
            prop: "state"
        },
        "Post Code": {
            type: location,
            prop: "postcode"
        }
    }

    console.log(info);

    return(
        <div className="dataField-item">
            <p className="dataField-item__name">{dataName}</p>
            <div className="dataField-item__value-wrapper">
                <p className="dataField-item__value">{(name && location) ? dataNames[dataName].type[dataNames[dataName].prop] : ""}</p>
            </div>
        </div>
    )
}