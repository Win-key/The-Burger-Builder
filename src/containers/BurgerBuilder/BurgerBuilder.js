import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad : 0.4,
    bacon : 0.7,
    cheese : 1.2,
    meat : 0.6
}

class BurgerBuilder extends Component{

    state = {
        ingredient : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 0
    }

    addIngredientHandler = type=>{
        let ingredient = {...this.state.ingredient};
        ingredient[type] = ingredient[type] + 1;
        let totalPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState((prevState, props)=> {
            return { ingredient : ingredient, totalPrice:totalPrice } 
        });
    }

    removeIngredientHandler = type=>{
        let ingredient = {...this.state.ingredient};
        if(ingredient[type] > 0){
            ingredient[type] = ingredient[type] - 1;
            let totalPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
            this.setState((prevState, props)=> {
                return { ingredient : ingredient, totalPrice:totalPrice } 
            }); 
        }
    }
    
    render(){
        let disabledInfo = {...this.state.ingredient};
        for(let ingr in disabledInfo){
            disabledInfo[ingr] = disabledInfo[ingr] <=0;
        }
        return(
            <Auxilary>
                <Burger ingredients={this.state.ingredient} />
                <BuildControls 
                    more={this.addIngredientHandler}
                    less={this.removeIngredientHandler}
                    disable={disabledInfo} 
                    price={this.state.totalPrice}/>
            </Auxilary>
        );
    }
}

export default BurgerBuilder;