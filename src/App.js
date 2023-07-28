import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./components/homePage/homePage";
import Services from "./components/services/services";


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Services />
      <Footer/>
    </div>
  );
}

export default App;
