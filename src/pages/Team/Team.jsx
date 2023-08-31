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
                            • Chief Mentor, Instructor for iSignal Research Labs, with 15years of Industrial work experience in Cellular Air Interface Technologies for various projects like OAM, Configurations, 4G,5G Protocol Stack implementation for Samsung, L & T Technologies, Infosys, 3G Network Solutions, Rohde & Schwarz for Intel UEs, worked for MediaTek chipsets in 3G WCDMA and 4G LTE OFDMA, MIMO, and Core network for Nortel Client. He is the Active member of various IEEE Societies of Bangalore Chapter, IEEE ComSoc, Signal Processing Society, attended and conducted various IEEE events in the past in Bangalore. He has conducted several Guest Lectures, Invited Tech Talks, Workshops, Seminars and Webinars in the past. Currently he is involved in Next Generation 5G/6G Air Interface Research and Development of Proof of Concepts and Contributions to 3gpp Standards, along with activities like career enablement, Trainings, Lab-Setups and involved in on demand Projects and dedicated to support academia from industry stand point.<br/><br/>
                            • Research Focus: B5G,6G, Signal processing with AI, ML, DL for the development/creation of the solutions involving MIMO, massiveMIMO, mmWave, beamforming advanced technologies.<br/><br/>
                            • PoC Focus: SDR Setups, DSP, 4G, 5G EN-DC NR PoC Setups 6G Simulations, B5G. 3gpp Contributions,</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Team