import HomePage from "./pages/homePage/homePage";

import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import CompanyProfile from "./pages/companyProfile/companyProfile";
import CareerPages from "./pages/careersPage/CareerPages";
import Header from "./components/header/header";


function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/companyProfile">
            <CompanyProfile />
          </Route>
          <Route path="/career">
            <CareerPages />
          </Route>
          <Route path="/">
            <Header/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
