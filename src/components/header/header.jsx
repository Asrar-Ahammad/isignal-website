import React, { useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/images/isignal-logo.png";
import "./header.css"
import { HiMenuAlt1 } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
    return (
        <>
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
                    <div className="navbar-item">
                        Wireless Portfolio
                        <div className="dropdown">
                            <Link to="/solutions" className="dditem">Solutions
                                {/* <div className="subitems">
                                <Link to='/' className='subdditem'>Health Care</Link>
                                <Link to='/' className='subdditem'>Education</Link>
                                <Link to='/' className='subdditem'>Defense</Link>
                                <Link to='/' className='subdditem'>Agriculture</Link>
                                <Link to='/' className='subdditem'>Private Enterprises</Link>
                            </div> */}
                            </Link>
                            <Link to="/technologies" className="dditem">Technologies
                                {/* <div className="subitems">
                                <Link to='/' className='subdditem'>AI</Link>
                                <Link to='/' className='subdditem'>Embedded Systems</Link>
                                <Link to='/' className='subdditem'>Soc Chip Design</Link>
                                <Link to='/' className='subdditem'>Software Defined Radio</Link>
                                <Link to='/' className='subdditem'>Cloud</Link>
                            </div> */}
                            </Link>
                            <Link to="/products" className="dditem">Products
                                {/* <div className="subitems">
                                <Link to='/' className='subdditem'>SDR</Link>
                                <Link to='/' className='subdditem'>SethuKrite™</Link>
                                <Link to='/' className='subdditem'>RadOs™</Link>
                                <Link to='/' className='subdditem'>NAISig™</Link>
                            </div> */}
                            </Link>
                            <Link to="/research" className="dditem">Research areas
                                {/* <div className="subitems">
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
                            </div> */}
                            </Link>
                        </div>
                    </div>
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
                <Link to='/contact'>
                    <div className="nav-contact">
                        Contact Us
                    </div>
                </Link>
                <div className="burger-menu">
                    <div className={isMenuOpen ? 'open hidden' : 'open'} onClick={handleToggleMenu}>
                        <HiMenuAlt1 />
                    </div>
                    <div className={isMenuOpen ? 'close' : 'close hidden'} onClick={handleToggleMenu}>
                        <RiCloseLine />
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="menu">
                    <div className="menu-items">
                        <div className="menu-item">
                            <Link to='/'>
                            <h5>Home</h5>
                            </Link>
                        </div>
                        <div className="menu-item">
                            <h5>Company</h5>
                            <div className="menu-sub-item">
                                <Link to='/companyProfile'>
                                About us
                                </Link></div>
                            <div className="menu-sub-item">
                                <Link></Link>
                                Team</div>
                        </div>
                        <div className="menu-item">
                            <h5>Wireless Profolio</h5>
                            <div className="menu-sub-item">About us</div>
                            <div className="menu-sub-item">Solutions</div>
                            <div className="menu-sub-item">Technologies</div>
                            <div className="menu-sub-item">Products</div>
                            <div className="menu-sub-item">Research Areas</div>
                        </div>
                        <div className="menu-item">
                            <h5>Knowledge Center</h5>
                            <div className="menu-sub-item">About us</div>
                            <div className="menu-sub-item">4G RAN Domain</div>
                            <div className="menu-sub-item">4G Development</div>
                            <div className="menu-sub-item">5G RAN Domain</div>
                            <div className="menu-sub-item">5G Development</div>
                            <div className="menu-sub-item">O-RAN</div>
                            <div className="menu-sub-item">FOT</div>
                        </div>
                        <div className="menu-item">
                            <h5>Career</h5>
                        </div>
                        <div className="menu-item">
                            <h5>News</h5>
                        </div>
                        <div className="menu-item">
                            <h5>Contact us</h5>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Header;

// const mainColor = 'rgb(49,133,155)';
// const largeFont = '14px';
// const mediumFont = '12px';
// const smallFont = '11px';
// const lightFont = '300';
// const heavyFont = '600';
