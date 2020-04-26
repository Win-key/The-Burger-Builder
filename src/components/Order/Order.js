import React from 'react';
import classes from './Order.module.css'
const Order = props => {
    return (
        <div className={classes.Order}>
            <p>Ingredients : {props.ingredients}</p>
            <p>Price : <strong>${props.price}</strong></p>
        </div>
    );
}

export default Order;