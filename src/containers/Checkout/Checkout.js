import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Spinner from '../../UI/Spinner/Spinner';
import ContactData from '../ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component{

    state = {
        ingredients : null,
        totalPrice : 0
    }

    checkoutContinue = ()=>{
        this.props.history.replace("/checkout/contact-data");
    }

    checkoutCancel = ()=>{
        this.props.history.goBack();
    }

    componentDidMount(){
        let ingredient = {}, totalPrice = 0;
        let querys = new URLSearchParams(this.props.location.search);
        console.log(querys)
        for(let query of querys.entries()){
            if(query[0] === 'totalPrice')
                totalPrice = query[1];
            else 
                ingredient[query[0]] = parseInt(query[1]);
        }
        console.log(ingredient);

        this.setState({ingredients : ingredient, totalPrice : totalPrice});
    }

    render(){
        let checkOutSummary = <Spinner />;
        if(this.state.ingredients){
            checkOutSummary =<CheckoutSummary 
                                ingredients ={this.state.ingredients}
                                checkoutContinue={this.checkoutContinue}
                                checkoutCancel={this.checkoutCancel}    
                                />
        }
        return(
            <div style={{textAlign : "center", height:"100%"}}>
                {    checkOutSummary    }    
                <Route 
                    path={this.props.match.url + "/contact-data"} 
                    render={()=><ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...this.props}/>} />
            </div>
        )
    }

}

export default Checkout;