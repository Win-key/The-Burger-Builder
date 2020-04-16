import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

    state = {
        ingredient : {
            salad : 0,
            bacon : 0,
            cheese : 2,
            meat : 1
        }
    }

    render(){
        return(
            <Auxilary>
                <Burger ingredients={this.state.ingredient} />
                <div>Build Controls</div>
            </Auxilary>
        );
    }
}

export default BurgerBuilder;