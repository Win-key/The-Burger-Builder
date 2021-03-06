import React, { Component } from 'react';
import axios from '../../axios-orders';

import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import Modal from '../../UI/Modal/Modal';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../UI/withErrorHandler';

const INGREDIENT_PRICE = {
    salad : 0.4,
    bacon : 0.7,
    cheese : 1.2,
    meat : 0.6
}

class BurgerBuilder extends Component{

    state = {
        ingredient : null,
        totalPrice : 0,
        purchasable : false,
        purchasing : false,
        loading : false
    }

    componentDidMount(){
        this.setState({loading : true});
        axios.get("ingredient.json")
            .then(response => {
                this.setState((prevState,props)=>{return {ingredient : response.data, loading : false}});
            })
            .catch(error=>{
                this.setState({loading : false});
                console.log(error)
            });
    }

    addIngredientHandler = type=>{
        let ingredient = {...this.state.ingredient};
        ingredient[type] = ingredient[type] + 1;
        let totalPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState((prevState, props)=> {
            return { ingredient : ingredient, totalPrice:totalPrice } 
        });
        this.updatePurchasable(ingredient);
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
        this.updatePurchasable(ingredient);
    }

    updatePurchasable = (ingredients)=>{
        let sum = Object.values(ingredients).reduce((sum,el)=>sum+el,0);
        this.setState((prevState, props)=>{
            return {purchasable : sum > 0}
        });
    }

    purchaseHandler = ()=>{
        this.setState((prevState, prosp)=>{
            return {purchasing : true}
        });
    }

    modalCloseHandler = ()=>{
        this.setState((prevState, prosp)=>{
            return {purchasing : false}
        });
    }

    purchaseContinueHandler = () => {
        console.log('Contine');
        console.log(this.props)
        let query = [];
        for(let i in this.state.ingredient){
            query.push(encodeURIComponent(i) +"="+ encodeURIComponent(this.state.ingredient[i]));
        }
        query.push("totalPrice="+this.state.totalPrice);
        this.props.history.push(
            {
                pathname :"/checkout",
                 search : "?"+query.join("&") 
            }
        );
    }
    
    render(){
        if(!this.state.ingredient){
            return <Spinner />;
        }
        let disabledInfo = {...this.state.ingredient};
        for(let ingr in disabledInfo){
            disabledInfo[ingr] = disabledInfo[ingr] <=0;
        }
        let orderSummary = <Spinner />;
        if(!this.state.loading){
            orderSummary = <OrderSummary 
                            ingredients={this.state.ingredient} 
                            purchasable={this.state.purchasable}
                            totalPrice= {this.state.totalPrice.toFixed(2)}
                            modalClose={this.modalCloseHandler}
                            buy = {this.purchaseContinueHandler}/>
        }
        return(
            <Auxilary>
                <Modal 
                    show={this.state.purchasing}
                    modalClose={this.modalCloseHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredient} />
                <BuildControls 
                    more={this.addIngredientHandler}
                    less={this.removeIngredientHandler}
                    disable={disabledInfo} 
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    order = {this.purchaseHandler}/>
            </Auxilary>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);