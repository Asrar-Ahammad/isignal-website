import HomePage from "./pages/homePage/homePage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import CompanyProfile from "./pages/companyProfile/companyProfile";
import CareerPages from "./pages/careersPage/CareerPages";
import FourGRANDomain from "./pages/FourGRANDomain/FourGRANDomain";
import FourDev from "./pages/FourDev/FourDev";
import FiveGRAN from "./pages/FiveGRAN/FiveGRAN";
import FiveDev from "./pages/FiveDev/FiveDev";
import Oran from "./pages/Oran/Oran";
import Fot from "./pages/Fot/Fot";
import NewsPage from "./pages/NewsPage/NewsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Products from "./pages/Products/Products";
import Solutions from "./pages/Solutions/Solutions";
import Technologies from "./pages/Technologies/Technologies";
import ResearchAreas from "./pages/ResearchAreas/ResearchAreas";


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
          <Route path="/team">
            <HomePage/>
          </Route>
          <Route path="/FGD">
            <FourGRANDomain/>
          </Route>
          <Route path="/FG">
            <FourDev/>
          </Route>
          <Route path="/FivGD">
            <FiveGRAN/>
          </Route>
          <Route path="/FivGDev">
            <FiveDev/>
          </Route>
          <Route path="/ORAN">
            <Oran/>
          </Route>
          <Route path="/FOT">
            <Fot/>
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
        </Switch>
      </div>
    </Router>

  );
}

export default App;
