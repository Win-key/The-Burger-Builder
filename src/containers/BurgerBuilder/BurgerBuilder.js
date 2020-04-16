import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component{

    state = {
        ingredient : {
            salad : 1,
            bacon : 0,
            cheese : 2,
            meat : 1
        }
    }

    render(){
        return(
            <Auxilary>
                <Burger ingredients={this.state.ingredient} />
                <BuildControls />
            </Auxilary>
        );
    }
}

export default BurgerBuilder;