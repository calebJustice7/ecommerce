import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/Comp.css';
import './components/mediaQ.css';

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProductsPage from './components/ProductsPage'; 
import CartMessage from './components/CartMessage';
import CartPage from './components/CartPage';
import ProductInfoPage from './components/ProductInfoPage';
import SettingsPage from './components/SettingsPage';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage';
import WishListPage from './components/WishListPage';
import WishListMessage from './components/WishListMessage';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
            <Navbar />
            <CartMessage/>
            <WishListMessage />
            <Switch>
              <Route exact path="/ecommerce" component={HomePage}/>
              <Route path="/products" component={ProductsPage}/>
              <Route path="/cart" component={CartPage} />
              <Route path="/product-info/:id" component={ProductInfoPage} />
              <Route path="/settings" component={SettingsPage} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/wish-list" component={WishListPage} />
            </Switch>
            <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
