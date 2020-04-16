import React, {Component} from 'react';
import classes from './App.module.css';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component{
  render(){
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
