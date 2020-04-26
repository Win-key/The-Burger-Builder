import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../../UI/Buttom/Button';

const CheckoutSummary = props => {
    return(
        <div>
            <h1>Hope It tastes well...</h1>
            <div >
                <Burger ingredients={props.ingredients} />
                <Button type="Danger" clicked={props.checkoutCancel}>Cancel</Button>
                <Button type="Success" clicked={props.checkoutContinue}>Continue</Button>
            </div>
        </div>
    );
}

export default CheckoutSummary;