import "./companyProfile.css"
import Header from "../../components/header/header"
import { ArrowDownIcon, FrameIcon, LayersIcon, RocketIcon, PaddingIcon, DesktopIcon, GlobeIcon } from "@radix-ui/react-icons"
import Footer from "../../components/footer/footer"
import whoimg from '../../assets/images/who-we.svg'
import visionimg from '../../assets/images/vision.svg'
import missionimg from '../../assets/images/mission.svg'
import coreimg from '../../assets/images/core.svg'

const CompanyProfile = () => {
    return (
        <>
            <Header />
            <div className="company-profile" id="company-profile">
                <div className="blob"></div>
                <div className="blobBx">
                    <h2>Company <span>Profile</span></h2>
                    <p>iSignal Research Labs aims to revolutionize wireless communication through 5G product innovation and empowering youth through university research partnerships using expertise in embedded systems, AI and machine learning.</p>
                    <a href="#companyContent">
                        <button className="btn companybtn">
                            Learn more<ArrowDownIcon className="btnIcon" />
                        </button>
                    </a>
                </div>
            </div>
            <div className="companyContent" id="companyContent">
                <div className="section">
                    <div className="sectionImage">
                        <img src={whoimg} alt="" />
                    </div>
                    <div className="sectionContent">
                        <h2>Who we are</h2>
                        <p>iSignal Research Labs Pvt. Ltd is a 6 Year Old Indian based Wireless Startup, Bangalore who involved in innovative wireless 4G and 5G technology creating the industry impactful AI-Native and AI-Enabled RAN solutions to integrate with the hardware vendors. Also involved in competency development in the area of the protocol stack development with the involvement of small cell base station with the cost-effective Software Defined Radio and Cloud Variants of 4G and 5G Solutions. Extensively contributing for 6G Research and Standardization by working on inspiring innovations in the Field like Embedded, DSP, IoT, AI, ML, and DL Fields for various business Use cases targeting Indian and International Markets.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="sectionImage">
                        <img src={visionimg} alt="" />
                    </div>
                    <div className="sectionContent">
                        <h2>Our Vision</h2>
                        <p>To Be the Top Leader and Contribute to the Wireless Industry and transform the lives we live in the connectivity world.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="sectionImage">
                        <img src={missionimg} alt="" />
                    </div>
                    <div className="sectionContent">
                        <h2>Our mission</h2>
                        <p>To be the Best Class of Choice for Customers in Various 4G and 5G End to End Solutions in Wireless Space in Both Indian and International Market Independently to create a mark in the Industry.</p>
                    </div>
                </div>

                <div className="section">
                    <div className="sectionImage">
                        <img src={coreimg} alt="" />
                    </div>
                    <div className="sectionContent">
                        <h2>Our Core Values</h2>
                        <img src="" alt="" />
                        <p>With an inventive approach and fearless determination, we have established a legacy of dependability, earning the trust of our clients through open collaboration.</p>
                    </div>
                </div>

                <h2>Core Domains</h2>
                <div className="workAreas">
                    <div className="areaWrapper">
                        <div className="areaImg">
                            
                        </div>

                        <div className="area">
                            <FrameIcon />
                            <h3>Soc</h3>
                            <p>Integrated circuit containing multiple components on a single chip.</p>
                        </div>
                    </div>
                    <div className="areaWrapper">
                        <div className="areaImg">
                           
                        </div>

                        <div className="area">
                            <LayersIcon />
                            <h3>VLSI/PCB Design</h3>
                            <p>Electronic circuit design on microchips or printed circuit boards (PCBs).</p>
                        </div>
                    </div>
                    <div className="areaWrapper">
                        <div className="areaImg">
                           
                        </div>

                        <div className="area">
                            <RocketIcon />
                            <h3>AI/IOT</h3>
                            <p>AI enhances IoT with intelligent automation, enabling smart connected devices.</p>
                        </div>
                    </div>
                    <div className="areaWrapper">
                        <div className="areaImg">

                        </div>

                        <div className="area">
                            <PaddingIcon />
                            <h3>Digital Signal Processing</h3>
                            <p>Mathematical manipulation of signals for analysis and transmission in electronics.</p>
                        </div>
                    </div>
                    <div className="areaWrapper">
                        <div className="areaImg">

                        </div>

                        <div className="area">
                            <DesktopIcon />
                            <h3>Embedded Systems</h3>
                            <p>Compact computers in devices for specific tasks; self-contained functionalities.</p>
                        </div>
                    </div>
                    <div className="areaWrapper">
                        <div className="areaImg">
                            
                        </div>

                        <div className="area">
                            <GlobeIcon />
                            <h3>4G-LTE/5G-NR</h3>
                            <p>4G-LTE: Fourth-generation wireless.5G-NR: faster data, low latency.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CompanyProfile