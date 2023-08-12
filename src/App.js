import HomePage from "./pages/homePage/homePage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import CompanyProfile from "./pages/companyProfile/companyProfile";
import CareerPages from "./pages/careersPage/CareerPages";
import NewsPage from "./pages/NewsPage/NewsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Products from "./pages/Products/Products";
import Solutions from "./pages/Solutions/Solutions";
import Technologies from "./pages/Technologies/Technologies";
import ResearchAreas from "./pages/ResearchAreas/ResearchAreas";
import Jobs from "./pages/jobs/jobs";
import Fgcloud from "./pages/fgcloud/Fgcloud";
import Figncloud from "./pages/figncloud/Figncloud";
import FourGcloud from "./pages/FourGCLoud/FourGcloud";
import FiveGCloud from "./pages/FIveGCloud/FiveGCloud";


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
          <Route path="/jobs">
            <Jobs/>
          </Route>
          <Route path="/careers">
            <CareerPages/>
          </Route>
          <Route path="/team">
            <HomePage/>
          </Route>
          <Route path="/news">
            <NewsPage/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/solutions">
            <Solutions/>
          </Route>
          <Route path="/technologies">
            <Technologies/>
          </Route>
          <Route path="/research">
            <ResearchAreas/>
          </Route>
          <Route path="/fourGncloud">
            <Fgcloud/>
          </Route>
          <Route path="/fiveGncloud">
            <Figncloud/>
          </Route>
          <Route path="/fourGcloud">
            <FourGcloud/>
          </Route>
          <Route path="/fiveGcloud">
            <FiveGCloud/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
