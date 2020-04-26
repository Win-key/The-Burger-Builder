import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../../UI/Buttom/Button';

const CheckoutSummary = props => {
    return(
        <div>
            <h1>Hope It tastes well...</h1>
            <div >
                <Burger ingredients={props.ingredients} />
                <Button type="Danger" clicked>Cancel</Button>
                <Button type="Success" clicked>Continue</Button>
            </div>
        </div>
    );
}

export default CheckoutSummary;