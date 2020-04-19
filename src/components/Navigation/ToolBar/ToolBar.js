import React from 'react';
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';

const ToolBar = props => (
    <header className={classes.ToolBar}>
        <DrawToggle clicked={props.drawToggleClicked}/>
        <div className={classes.Logo}><Logo/></div>
        <nav className={classes.DisplayOnly}><NavigationItems /></nav>
    </header>
);

export default ToolBar;