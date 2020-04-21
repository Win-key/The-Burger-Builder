import React, { Component } from 'react';
import Auxilary from '../hoc/Auxilary';
import Modal from './Modal/Modal';

const withErrorHandler = (WrappedComponent, axios)=>{
    return class extends Component{
        state = {
            error : null
        }

        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({
                    error : null
                });
                return req;
            });
            axios.interceptors.response.use(res=>res,  error=>{
                this.setState({
                    error : error
                });
            });
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