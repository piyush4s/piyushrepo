import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/headerComponent';
import RegisterComponent from './components/registerationComponent';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import ItemsComponent from './components/itemsComponent';
import ItemComponent from './components/itemComponent';
import CartComponent from './components/cartComponent';
import HomePageComponent from './components/homePageComponent';
import CarouselComponent from './components/carouselComponent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : 'iphone'
    }
  }

  render() {
    return (
      <div className="App">
        {/* <RegisterComponent /> */}
        
        <HeaderComponent/>
        <BrowserRouter>
          <nav>
            <ul>
              <li className="navLink">
                <Link to="/">Home</Link>
              </li>
              <li className="navLink">
                <Link to="/register">Register</Link>
              </li>
              <li className="navLink">
                <Link to="/items">Items</Link>
              </li>
              <li className="navLink">
                <Link to={`item/${this.state.data}`}>Item</Link>
              </li>
              <li className="navLink">
                <Link to="/cart">cart</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={HomePageComponent}></Route>
            <Route exact path="/register" component={RegisterComponent}></Route>
            <Route path="/items" component={ItemsComponent}></Route>
            <Route path="/item/:id" component={ItemComponent}></Route>
            <Route exact path="/cart" component={CartComponent}></Route>
            <Redirect to="/"></Redirect>
          </Switch>

          <CarouselComponent/>

        </BrowserRouter>

        

        <a className="App-link" href="http://3.130.189.0/" target="_blank"
                    rel="noopener noreferrer"
                >
                     My Blogging Site
        </a>

      </div>
    )
  }
}

export default App;



//APIs - Promise, axios, nouns and verbs of it
//Redux - store, reducer, actions
//unit testing - Jest