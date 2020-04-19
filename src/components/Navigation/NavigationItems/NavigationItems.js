import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active> The Burger</NavigationItem>
        <NavigationItem link="/"> Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;