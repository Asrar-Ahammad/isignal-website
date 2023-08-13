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
                            </Link>
                            <Link to="/technologies" className="dditem">Technologies
                            </Link>
                            <Link to="/products" className="dditem">Products
                                <div className="subitems">
                                    <Link to='/' className='subdditem'>Non Cloud based Solutions
                                        <Link to='/fourGncloud'>4G Solutions</Link>
                                        <Link to='/fiveGncloud'>5G Solutions</Link>
                                    </Link>
                                    <Link to='/' className='subdditem'>Cloud based Solutions
                                        <Link to='/fourGcloud'>4G Solutions</Link>
                                        <Link to='/fiveGcloud'>5G Solutions</Link>
                                    </Link>
                                </div>
                            </Link>
                            <Link to="/research" className="dditem">Research areas
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-item">
                        Knowledge Center
                        <div className="dropdown">
                            <Link to="/">iSignal Learning</Link>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <Link to='/jobs'>
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
                                    <div className="menu-content">About us</div>
                                </Link></div>
                            <div className="menu-sub-item">
                                <Link to='/team'>
                                <div className="menu-content">Team</div>
                                </Link>
                            </div>
                        </div>
                        <div className="menu-item">
                            <h5>Wireless Profolio</h5>
                            <div className="menu-sub-item">
                                <Link to='/solutions'>
                                <div className="menu-content">Solutions</div>
                                    </Link>
                            </div>
                            <div className="menu-sub-item">
                                <Link to='/technologies'>
                                <div className="menu-content">Technologies</div>
                                    </Link>
                            </div>
                            <div className="menu-sub-item">
                                <Link to='/products'>
                                <div className="menu-content">Products</div>
                                    </Link>
                                <div className="semi-sub">
                                    <Link to='/fourGcloud'>
                                    <div className="menu-content">4G Cloud based solutions</div>
                                        </Link><br />
                                    <Link to='/fiveGcloud'>
                                    <div className="menu-content">5G Cloud based solutions</div>
                                        </Link><br />
                                    <Link to='/fourGncloud'>
                                    <div className="menu-content">4G Non Cloud based solutions</div>
                                        </Link><br />
                                    <Link to='/fiveGncloud'>
                                    <div className="menu-content">5G Non Cloud based solutions</div>
                                        </Link>
                                </div>
                            </div>
                            <div className="menu-sub-item">
                                <Link to='/research'>
                                <div className="menu-content">Research Areas</div>
                                    </Link>
                            </div>
                        </div>
                        <div className="menu-item">
                            <h5>Knowledge Center</h5>
                            <Link to='/'>
                            <div className="menu-content">iSignal Learning</div>
                                </Link>

                        </div>
                        <div className="menu-item">
                        <Link to='/jobs'><h5>Career</h5></Link>
                        </div>
                        <div className="menu-item">
                        <Link to='/news'><h5>News</h5></Link>
                        </div>
                        <div className="menu-item">
                        <Link to='/contact'><h5>Contact us</h5></Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Header;
