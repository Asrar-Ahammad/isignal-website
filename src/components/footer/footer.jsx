import "./footer.css"
import logo from "../../assets/images/isignal-logo.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <Link to='/'>
                        <div className="logo-content">
                            <img src={logo} alt="" />
                            <p>Passion sparks innovation, kindling boundless creativity.</p>
                        </div>
                    </Link>
                    <div className="company-contents">
                        <div className="company-content">
                            <div className="research">
                                <a href="#">White papers</a>
                                <a href="#">Patents</a>
                                <a href="#">Content 1</a>
                                <a href="#">Content 2</a>
                            </div>
                        </div>
                        <div className="company-content">
                            <div className="research">
                                <a href="#">White papers</a>
                                <a href="#">Patents</a>
                                <a href="#">Content 1</a>
                                <a href="#">Content 2</a>
                            </div>
                        </div>
                        <div className="company-content">
                            <div className="research">
                                <a href="#">White papers</a>
                                <a href="#">Patents</a>
                                <a href="#">Content 3</a>
                                <a href="#">Content 4</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="legal">
                    <div className="copy-right">
                        <a href="#">©2024 iSignal</a>
                    </div>
                    <div className="terms">
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