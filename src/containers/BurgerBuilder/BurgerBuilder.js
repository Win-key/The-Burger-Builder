import React, { Component } from 'react';
import axios from '../../axios-orders';

import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import Modal from '../../UI/Modal/Modal';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../UI/Spinner/Spinner';

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
        totalPrice : 0,
        purchasable : false,
        purchasing : false,
        loading : false
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
        console.log('buy');
        this.setState({loading : true});
        const order = {
            ingredients : this.state.ingredient,
            price : this.state.totalPrice,
            customer : {
                name : 'Winkey',
                address : {
                    street : 'Test Street',
                    pincode : '010101',
                    country : 'India'
                },
                email : 'winkey@gmail.com'
            },
            deliveryMethod : 'fastest',
            deliveryComment : 'Vegama vada .. Paradesi paradesi.. Paduthuranya'
        }
        axios.post('orders.json',order)
            .then(response =>{
                this.setState({loading : false, purchasing : false});
            })
            .catch(error =>{
                this.setState({loading : false, purchasing : false});
            });
    }
    
    render(){
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

export default BurgerBuilder;