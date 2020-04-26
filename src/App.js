import React, {Component} from 'react';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
class App extends Component{
  render(){
    return (
      <div>
        <Layout>
          <Switch>  
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/burger" component={BurgerBuilder}/>
            <Redirect exact from="/" to="/burger" />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;
