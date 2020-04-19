import React from 'react';
import Auxilary from '../../../hoc/Auxilary';

const OrderSummary = props => {
    return(
        <Auxilary>
            <h4>The Burger</h4>
            <h4>Ingredients needed : </h4>
            <ul>
                {
                    Object.keys(props.ingredients).map(
                        key =>{
                            return <li key={key}>{key} : {props.ingredients[key]}</li>
                        }
                    )
                }
            </ul>
            <button disabled={!props.purchasable}>Buy</button>
        </Auxilary>
    );
}

export default OrderSummary;