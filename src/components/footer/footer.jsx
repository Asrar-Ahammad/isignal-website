import "./footer.css"
import logo from "../../assets/images/isignal-logo.png"

const Footer = ()=>{
    return (
        <>
            <div className="footer">
                {/* <div className="research-areas">
                    <h3>Research areas</h3>
                    <button>
                        <a href="#">
                            Papers
                        </a>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </button>
                </div> */}
                <div className="footer-content">
                    <div className="logo-content">
                        <img src={logo} alt="" />
                        <p>Passion sparks innovation, kindling boundless creativity.</p>
                    </div>
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