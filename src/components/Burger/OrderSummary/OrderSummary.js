import React from 'react';
import Auxilary from '../../../hoc/Auxilary';
import Button from '../../../UI/Buttom/Button'

const OrderSummary = props => {
    return(
        <Auxilary>
            <h4>The Burger Builder</h4>
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
            <p><strong>Current Price : ${props.totalPrice}</strong></p>
            <Button type="Danger" clicked={props.modalClose}>Cancel</Button>
            <Button type="Success" clicked={props.buy}>Continue</Button>
        </Auxilary>
    );
}

export default OrderSummary;