import React from 'react';
import './Team.css';
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
import ProductPara from '../../components/ProductPara/ProductPara';
import img from '../../assets/images/director.png';

function Team() {
    return (
        <>
            <Header />
            <div className="team-page">
                <div className="team-container">
                    <div className="team-img">
                        <img src={img} alt="Director Image" />
                        <p>Ex-Infosys, Ex-L&T with several Engagements with Samsung, Intel, Mediatek, Nortel, Nokia with Expertise in 5G RAN Protocols | Trainings & Lab Setups| B5G,6G, mmWave Research |IEEE ComSoc</p>
                    </div>
                    <div className="team-info">
                        <h2>Mr.Ram</h2>
                        <p><span>Profile:</span><br /><br />
                            • Worked on 4G/LTE Wireless Technology in Telecom Space.<br />
                            • ~15Yrs of Experience in the Development of Wireless Technologies.<br />
                            • Involved in the Implementation of UE and eNB features based on 3gpp Releases.<br />
                            • Worked on Development and Testing on 3G, and LTE for various clients such as Mediatek, Intel, Samsung,
                            Rohde & Schwarz, and Nortel.<br />
                            • Worked on various Platforms for Mediatek chipsets.<br />
                            • Delivered Professional Training on 5G/LTE in L & T Tech Services.<br />
                            • Delivered Multiple Professional “C, C++ on Linux” Trainings Especially from the Telecom context.<br />
                            • Conducted Interviews for Senior Level Recruitments at L&T Technology Services.<br />
                            • Currently heading “iSignal Research Labs” to support Corporates for on Demand Consultation for various
                            LTE/5G projects, recruitment support, and Academia for Research in 5G Technologies like Massive MIMO, NOMA and Adaptive Beam-forming/steering Solutions.<br /><br />
                            <span>Training Responsibility:</span><br /><br />
                            • Essential C, Advanced Data Structures<br />
                            • Linux System Programming [Inter Process Communication, Multi-Threading, Socket Programming]<br />
                            • Algorithm Design & Development for Various Air Interface Protocol layers<br />
                            • Essential Python Required for Wireless Automation<br />
                            • 4G/LTE Protocols – Access Protocols [PHY, MAC, RLC, PDCP, RRC] for Both UE and eNB<br />
                            • 4G/LTE Protocols – Non-Access Protocols NAS[UE - MME], EPC Call Flows, Handovers, CSFB, SRVCC, VoLTE, SIP, IMS<br />
                            • Practical C++ on Linux, OOPS, STL, C++11, C++14, C++17.<br />
                            • 5G/NR RAN – Air Interface Access Protocols [PHY, MAC, RLC, PDCP, RRC, SDAP] for Both UE and gNB.<br /><br />
                            <span>Product Delivery:</span><br /><br />
                            • Wireless Head & Delivery for Architecture, Design of the SethuKrithe 5G Product and AirSig Product and Cloud Solutions<br />
                            • Product Showcasing at various Indian and International Conferences
                            Academic Partnership Responsibilities:<br />
                            • FDPs, Guest Lectures, Seminars, Lab Setups, Workshops, M.Tech Internship Supports, Publishing</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Team