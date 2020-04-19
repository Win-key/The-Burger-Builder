import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    
    state = {
        showBackDrop : false
    }

    closeBackdrop = () => {
        this.setState({showBackDrop : false});
    }

    drawToggleHandler = () => {
        this.setState((prevState)=>{
            return {showBackDrop : !this.state.showBackDrop}
        })
    }

    render(){
        return(
            <Auxilary>
                <ToolBar drawToggleClicked={this.drawToggleHandler}/>
                <SideDrawer open={this.state.showBackDrop} close={this.closeBackdrop}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilary>
        )
    }
}

export default Layout;