import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'}
]
const BuildControls = props => {
        return <div className={classes.BuildControls}>
            {
                controls.map((control) => {
                    return <BuildControl 
                            label={control.label}  
                            key={control.type} 
                            more={()=>props.more(control.type)}
                            less={()=>props.less(control.type)}/>
                })
            }
        </div>
}

export default BuildControls;