import React from "react";
import NavBar from "./components/home/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Detail from "./components/cart/Detail";
import Completed from "./components/cart/Completed";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/beli/" component={Detail} />
        <Route path="/complete" component={Completed} />
      </Switch>
    </div>
  );
}

export default App;
