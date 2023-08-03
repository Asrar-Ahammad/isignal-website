import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Services from "../../components/services/services";
import "./homePage.css"


const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home-page">
                <div className="home-content">
                    <h1><span style={{ color: "#C10000" }}>i</span>Signal<sup>®</sup></h1>
                    <p>Passion Innovates</p>
                </div>
                <div className="home-content-image">
                </div>
            </div>
            {/* <h2 className="homeh2" style={{marginTop:'7rem'}}>Why Choose Us</h2> */}
            <h2 className="homeh2">Why Choose Us</h2>
            <Services />
            <Footer />
        </>
    );
};

export default HomePage;
