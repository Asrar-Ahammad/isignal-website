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
                    Home
                </div>
                <div className="navbar-item">
                    Company
                    <div className="dropdown">
                        <a href="#section1">Company Profile</a>
                        <a href="#section2">Team</a>
                    </div>
                </div>
                <div className="navbar-item">
                    Research Areas
                    <div className="dropdown">
                        <a href="#section1">Academica</a>
                        <a href="#section2" className="d">Trainings</a>
                    </div>
                </div>
                <div className="navbar-item">
                    Training
                </div>
                <div className="navbar-item">
                    Contact us
            </div>

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
