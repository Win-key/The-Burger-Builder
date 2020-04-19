import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import Backdrop from '../../../UI/BackDrop/BackDrop';
import Auxilary from '../../../hoc/Auxilary';

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Auxilary>
            <Backdrop show={props.open} close={props.close} />
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}><Logo /></div>
                <nav><NavigationItems /></nav>
            </div>
        </Auxilary>
    );
}

export default SideDrawer;