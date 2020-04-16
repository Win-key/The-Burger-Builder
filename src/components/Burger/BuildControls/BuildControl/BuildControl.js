import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = props => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <div className={classes.Less} onClick={props.less}>Less</div>
            <div className={classes.More} onClick={props.more}>More</div>
        </div>
    )
}
export default BuildControl;