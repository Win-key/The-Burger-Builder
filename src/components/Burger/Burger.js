import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css'

const Burger = props => {
    let burgerIngredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_,i) => {
            return <BurgerIngredient type={ingredient} key={ingredient+i}/>
        })
    }).reduce((ar,el)=>{
        return ar.concat(el);
    },[]);
    if(burgerIngredients.length <= 0){
        burgerIngredients = <p>Please add some ingredients</p>
    }
    return(
        
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;