import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/images/isignal-logo.png";
import "./header.css"

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="nav-items">
                <div className="navbar-item">
                    <Link to="/">
                        <p className="nav-link">Home</p>
                    </Link>
                </div>
                <div className="navbar-item">
                    Company
                    <div className="dropdown">
                        <Link to="/CompanyProfile">About Us</Link>
                        <a href="#section4">Team</a>
                    </div>
                </div>
                <div className="navbar-item">
                    Wireless Portfolio
                    <div className="dropdown">
                        <a href="#section1" className="dditem">Solutions</a>
                        <a href="#section2" className="dditem">Technologies</a>
                        <a href="#section3" className="dditem">Products
                            <div className="ddcontents">SethuKriti
                                <a href="#">4G/LTE</a>
                                <a href="#">5G/NR</a>
                            </div>
                            <div href="#" className="ddcontents">NAISig<sup>TM</sup>
                                <a href="#">Advanced 5G in the eyes of AI</a>
                            </div>
                            <a href="#" className="ddcontents">Soc/FPGA</a>
                            <a href="#" className="ddcontents">RadOS<sup>TM</sup></a>
                        </a>
                        <a href="#section3" className="dditem">Research areas</a>
                    </div>
                </div>
                <div className="navbar-item">
                    Knowledge Center
                </div>
                <div className="navbar-item">
                    <Link to='career'>
                        <p className="nav-link">Career</p>
                    </Link>
                </div>
                <div className="navbar-item">
                    News
                </div>

            </div>
            <div className="contact">
                Contact us
            </div>
        </nav>

    );
}
export default Header;

// const mainColor = 'rgb(49,133,155)';
// const largeFont = '14px';
// const mediumFont = '12px';
// const smallFont = '11px';
// const lightFont = '300';
// const heavyFont = '600';
