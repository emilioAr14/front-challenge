import React from "react";
import './index.scss';
/* <-------- components ---------> */
import { CoverArea } from "../components/CoverArea";
import { NavMenu } from "../components/NavMenu";
import { NavItem } from "../components/NavItems";
import { ProfileCard } from "../components/ProfileCard";
import { DataFieldCard } from "../components/DataFieldCard";
import { DataFieldItem } from "../components/DataFieldItem";
import { ActionButton } from "../components/ActionButton";

export function AppUI() {
    return(
        <div id="App">
            <CoverArea></CoverArea>
            <NavMenu>
                <NavItem iconName='Home'></NavItem>
                <NavItem iconName='Search'></NavItem>
                <NavItem iconName='Profile'></NavItem>
                <NavItem iconName='Settings'></NavItem>
                <NavItem iconName='Message'></NavItem>
            </NavMenu>
            <ProfileCard>
            </ProfileCard>
            <ActionButton></ActionButton>
            <DataFieldCard>
                <DataFieldItem dataName='First Name'></DataFieldItem>
                <DataFieldItem dataName='Last Name'></DataFieldItem>
                <DataFieldItem dataName='Age'></DataFieldItem>
                <DataFieldItem dataName='Gender'></DataFieldItem>
                <DataFieldItem dataName='Country'></DataFieldItem>
                <DataFieldItem dataName='City'></DataFieldItem>
                <DataFieldItem dataName='State'></DataFieldItem>
                <DataFieldItem dataName='Post Code'></DataFieldItem>
            </DataFieldCard>
        </div>
    )
}