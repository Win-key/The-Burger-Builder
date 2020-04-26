import React , { Component } from "react";
import Order from "../../components/Order/Order";
import axios from '../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner'
import withErrorHandler from "../../UI/withErrorHandler";
import NoData from "../../UI/NoData/NoData";

class Orders extends Component{
    state ={
        orders : [],
        loading : false
    }

    componentDidMount(){
        this.setState({loading : true});
        axios.get('orders.jon')
            .then(res => {
                let order = Object.entries(res.data).map(order => {
                    return {...{'key':order[0]},...order[1]}
                });
                this.setState({orders : order, loading : false});
            })
            .catch(error => {this.setState({loading : false});});
    }

    render(){
        let orders = <Spinner />
        if(!this.state.loading){
            orders = this.state.orders.map(order => {
                let ingredients = [];
                for(let i in order.ingredients){
                    ingredients.push(i+' ('+order.ingredients[i]+')');
                }
                return <Order key={order.key} ingredients={ingredients.join(" , ")} price={order.price} />; 
            })
            if(orders.length === 0){
                orders = <NoData />
            }
        }
        return <React.Fragment>
                    {orders}
                </React.Fragment>
    }
}

export default withErrorHandler(Orders,axios);