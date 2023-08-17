import HomePage from "./pages/homePage/homePage";
import { Route, Routes } from "react-router-dom";
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
import Team from "./pages/Team/Team";


function App() {
  return (

    <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/companyProfile" element={<CompanyProfile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/careers" element={<CareerPages />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/research" element={<ResearchAreas />} />
          <Route path="/fourGncloud" element={<Fgcloud />} />
          <Route path="/fiveGncloud" element={<Figncloud />} />
          <Route path="/fourGcloud" element={<FourGcloud />} />
          <Route path="/fiveGcloud" element={<FiveGCloud />} />
          <Route path="/team" element={<Team />} />

        </Routes>
    </div>

  );
}

export default App;
