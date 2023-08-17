import "./footer.css"
import logo from "../../assets/images/isignal-logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="logo-content">
                        <img src={logo} alt="" />
                        <p>Passion sparks innovation, kindling boundless creativity.</p>
                    </div>
                    <div className="company-contents">
                        <Link to='/' className="company-content-link">Home</Link>
                        <Link to='/companyProfile' className="company-content-link">Company</Link>
                        <Link to='/products' className="company-content-link">Wireless Portfolio</Link>
                        <Link to='/' className="company-content-link">Knowledge Center</Link>
                        <Link to='/jobs' className="company-content-link">Career</Link>
                        <Link to='/news' className="company-content-link">News</Link>
                        <Link to='/contact' className="company-content-link">Contact us</Link>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990780.844118128!2d75.26378535625!3d12.956243000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1358f1aa901b%3A0xd79715c816d07d85!2siSignal%20Research%20Labs!5e0!3m2!1sen!2sin!4v1691745697977!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className="legal">
                    <div className="copy-right">
                        <a href="#">©2024 iSignal</a>
                    </div>
                    <br />
                    <div className="terms" style={{marginBottom:'2rem'}}>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>cookies</p>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Footer;