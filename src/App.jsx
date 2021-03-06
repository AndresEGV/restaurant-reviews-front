import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";
import RestaurantDetail from "./routes/RestaurantDetail";
import UpdateRestaurant from "./routes/UpdateRestaurant";
const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdateRestaurant}
            />
            <Route exact path="/restaurants/:id" component={RestaurantDetail} />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
