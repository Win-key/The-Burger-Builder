import React, { Component } from 'react';
import Auxilary from '../hoc/Auxilary';
import Modal from './Modal/Modal';

const withErrorHandler = (WrappedComponent, axios)=>{
    return class extends Component{
        state = {
            error : null
        }

        //componentDidMount - called once all the child components are rendered. 
        // Since withErrorHandler is wrapping the BurgerBuilder, componentDidMount of BurgerBuilder(child) will get called before the componentDidMount of withErrorHandler(Parent)  
        // So using componentWillMount in withErrorHandler will get called before render of child, so child will be having access to modified axios
        // constructor() also can be used in the place of componentWillMount   
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req=>{
                console.log(req);
                this.setState({
                    error : null
                });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res=>res,  error=>{
                console.log(error);
                this.setState({
                    error : error
                });
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = ()=>{
            this.setState((prevState,props)=>{
                return {
                    error : null
                }
            });
        }

        render(){
            return (
                <Auxilary>
                    <Modal show={this.state.error} modalClose={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxilary>
            )
        }
    }
}

export default withErrorHandler;