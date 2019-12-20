import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/Comp.css';

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProductsPage from './components/ProductsPage'; 
import CartMessage from './components/CartMessage';
import CartPage from './components/CartPage';
import ProductInfoPage from './components/ProductInfoPage';
import SettingsPage from './components/SettingsPage';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
            <Navbar />
            <CartMessage/>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/products" component={ProductsPage}/>
              <Route path="/cart" component={CartPage} />
              <Route path="/product-info" component={ProductInfoPage} />
              <Route path="/settings" component={SettingsPage} />
            </Switch>
            <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
