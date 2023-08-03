import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/images/isignal-logo.png";
import "./header.css"

const Header = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </Link>

            <div className="nav-items">
                <div className="navbar-item">
                    <Link to="/" className="nav-link">
                        <p>Home</p>
                    </Link>
                </div>
                <div className="navbar-item">
                    Company
                    <div className="dropdown">
                        <Link to="/CompanyProfile">About Us</Link>
                        <Link to="/team">Team</Link>
                    </div>
                </div>
                <Link to='/' className="navbar-item">
                    Wireless Portfolio
                    <div className="dropdown">
                        <Link to="/solutions" className="dditem">Solutions
                            <div className="subitems">
                                <Link to='/' className='subdditem'>Health Care</Link>
                                <Link to='/' className='subdditem'>Education</Link>
                                <Link to='/' className='subdditem'>Defense</Link>
                                <Link to='/' className='subdditem'>Agriculture</Link>
                                <Link to='/' className='subdditem'>Private Enterprises</Link>
                            </div>
                        </Link>
                        <Link to="#section2" className="dditem">Technologies
                            <div className="subitems">
                                <Link to='/' className='subdditem'>AI</Link>
                                <Link to='/' className='subdditem'>Embedded Systems</Link>
                                <Link to='/' className='subdditem'>Soc Chip Design</Link>
                                <Link to='/' className='subdditem'>Software Defined Radio</Link>
                                <Link to='/' className='subdditem'>Cloud</Link>
                            </div>
                        </Link>
                        <Link to="#section3" className="dditem">Products
                            <div className="subitems">
                                <Link to='/' className='subdditem'>SDR</Link>
                                <Link to='/' className='subdditem'>SethuKrite™</Link>
                                <Link to='/' className='subdditem'>RadOs™</Link>
                                <Link to='/' className='subdditem'>NAISig™</Link>
                            </div>
                        </Link>
                        <Link to="#section3" className="dditem">Research areas
                            <div className="subitems">
                                <Link to='/' className='subdditem'>3gpp</Link>
                                <Link to='/' className='subdditem'>5G/6G
                                    <Link to='/' className='subdditem'>MassiveMIMO</Link>
                                    <Link to='/' className='subdditem'>Beamforming</Link>
                                    <Link to='/' className='subdditem'>AI/ML</Link>
                                    <Link to='/' className='subdditem'>Channel Modeling</Link>
                                    <Link to='/' className='subdditem'>L2 Lean Protocol</Link>
                                    <Link to='/' className='subdditem'>Mobility Enhancements</Link>
                                </Link>
                                <Link to='/'>Papers and journels</Link>
                            </div>
                        </Link>
                    </div>
                </Link>
                <div className="navbar-item">
                    Knowledge Center
                    <div className="dropdown">
                        <Link to="/FGD">4G RAN Domain</Link>
                        <Link to="/FG">4G Development</Link>
                        <Link to="/FivGD">5G RAN Domain</Link>
                        <Link to="/FivGDev">5G Development</Link>
                        <Link to="/ORAN">O-RAN</Link>
                        <Link to="/Fot">FOT</Link>
                    </div>
                </div>
                <div className="navbar-item">
                    <Link to='career'>
                        <p className="nav-link">Career</p>
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link to='/news'>
                        <p className="nav-link">News</p>
                    </Link>
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
