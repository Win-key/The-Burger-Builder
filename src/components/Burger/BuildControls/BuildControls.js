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
            <div className={classes.PriceContainer}>
                <p className={classes.Price} ><strong>Current Price : ${props.price.toFixed(2)}</strong></p>
                <button
                    disabled={!props.purchasable} 
                    className={[classes.OrderButton,classes.Price].join(' ')}
                    onClick={props.order}>Order</button>
            </div>
            {
                controls.map((control) => {
                    return <BuildControl 
                            label={control.label}  
                            key={control.type} 
                            more={()=>props.more(control.type)}
                            less={()=>props.less(control.type)}
                            disable={props.disable[control.type]}/>
                })
            }
        </div>
}

export default BuildControls;