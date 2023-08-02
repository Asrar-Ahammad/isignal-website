import "./companyProfile.css"
import Header from "../../components/header/header"
import { ArrowDownIcon, FrameIcon, LayersIcon, RocketIcon, PaddingIcon, DesktopIcon, GlobeIcon } from "@radix-ui/react-icons"
import Footer from "../../components/footer/footer"

const CompanyProfile = () => {
    return (
        <>
            <Header />
            <div className="company-profile" id="company-profile">
                <div className="blob"></div>
                <div className="blobBx">
                    <h2>Company <span>Profile</span></h2>
                    {/* <img src="" alt="" /> */}
                    <p>ISRL Research Labs aims to revolutionize wireless communication through 5G product innovation and empowering youth through university research partnerships using expertise in embedded systems, AI and machine learning.</p>
                    <a href="#companyContent">
                        <button className="btn companybtn">
                            Learn more<ArrowDownIcon className="btnIcon"/>
                        </button>
                    </a>
                </div>
            </div>
            <div className="companyContent" id="companyContent">
                <div className="section">
                    <div className="sectionImage">
                        <img src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9uJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <div className="sectionContent">
                        <h2>Who we are</h2>
                        <p>We are a team of highly skilled professionals with extensive experience of over 15 years in various domains. Our expertise lies in driving innovation in product development, ensuring top-notch quality and cutting-edge solutions.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="sectionImage">
                        <img src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9uJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <div className="sectionContent">
                        <h2>Our Vision</h2>
                        <p>Our goal is to establish ourselves as the frontrunners in the 5G industry, catering to both the Indian and international markets. We specialize in IoT, Embedded Systems, and DSP Systems, offering comprehensive R&D solutions in the field of Signal Processing.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="sectionImage">
                        <img src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9uJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <div className="sectionContent">
                        <h2>Our mission</h2>
                        <p>Our mission is to make significant contributions to society by providing innovative wireless solutions in the telecom space, with a particular focus on wireless technologies. We aim to be the preferred choice for competency development in the corporate, academic, and R&D sectors, specifically in the realm of next-generation 5G and 6G solutions.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="sectionImage">
                        <img src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9uJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>
                    <div className="sectionContent">
                        <h2>Our Core Values</h2>
                        <img src="" alt="" />
                        <p>System on chip integrates multiple components, VLSI/PCB design handles electronics layout, AI/IoT enables smart automation, DSP processes signals, Embedded Systems perform specific tasks, 4G-LTE/5G-NR ensure seamless connectivity.</p>
                    </div>
                </div>

                <h2>Core Objectives</h2>
                <div className="workAreas">
                    <div className="area">
                        <FrameIcon />
                        <h3>Soc</h3>
                        <img src="" alt="" />
                        <p>Integrated circuit containing multiple components on a single chip.</p>
                    </div>
                    <div className="area">
                        <LayersIcon />
                        <h3>VLSI/PCB Design</h3>
                        <img src="" alt="" />
                        <p>Electronic circuit design on microchips or printed circuit boards (PCBs).</p>
                    </div>
                    <div className="area">
                        <RocketIcon />
                        <h3>AI/IOT</h3>
                        <img src="" alt="" />
                        <p>AI enhances IoT with intelligent automation, enabling smart connected devices.</p>
                    </div>
                    <div className="area">
                        <PaddingIcon />
                        <h3>Digital Signal Processing</h3>
                        <img src="" alt="" />
                        <p>Mathematical manipulation of signals for analysis and transmission in electronics.</p>
                    </div>
                    <div className="area">
                        <DesktopIcon />
                        <h3>Embedded Systems</h3>
                        <img src="" alt="" />
                        <p>Compact computers in devices for specific tasks; self-contained functionalities.</p>
                    </div>
                    <div className="area">
                        <GlobeIcon />
                        <h3>4G-LTE/5G-NR</h3>
                        <img src="" alt="" />
                        <p>4G-LTE: Fourth-generation wireless.<br />5G-NR: faster data, low latency.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CompanyProfile