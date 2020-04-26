import React, { Component } from 'react';
import Button from '../../UI/Buttom/Button';
import classes from './ContactData.module.css';
import axios from '../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';


class ContactData extends Component{

    state = {
        name : "Winkey",
        email : "winkey@winkey.com",
        address : "Chennai",
        pinCode : "600001",
        phoneNo : 7639321256,
        loading : false
    }

    orderHandler = (event)=>{
        event.preventDefault();
        this.setState({loading : true});
        console.log(this.props);
        const order = {
            ingredients : this.props.ingredients,
            price : Number(this.props.price).toFixed(2),
            customer : {
                name : this.state.name,
                address : this.state.address,
                email : this.state.email,
                phoneNo : this.state.phoneNo
            }
        }
        axios.post('orders.json',order)
            .then(response =>{
                this.setState({loading : false, purchasing : false});
                this.props.history.push("/burger");
            })
            .catch(error =>{
                this.setState({loading : false, purchasing : false});
                this.props.history.push("/burger");
            });
    }

    render(){

        let form = this.state.loading ? <Spinner /> :
                    <form>
                        <input className = {classes.Input} type="text" name="name" placeholder="Name" value={this.state.name} />
                        <input className = {classes.Input} type="text" name="phone" placeholder="Phone" value={this.state.phoneNo}/>
                        <input className = {classes.Input} type="email" name="email" placeholder="Email"  value={this.state.email}/>
                        <input className = {classes.Input} type="text" name="address" placeholder="Address"  value={this.state.address}/>
                        <input className = {classes.Input} type="text" name="pin" placeholder="PIN"  value={this.state.pinCode}/>
                        <Button type="Success" clicked={this.orderHandler}>Order</Button>
                    </form>;

        return <div className={classes.ContactData}>
                    {form}
                </div>
    }

} 

export default ContactData;