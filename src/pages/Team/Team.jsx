import React from "react";
import "./Team.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import director from "../../assets/images/director.png";
import seniorArchitect from "../../assets/images/Lavanya.jpeg";
import surya from "../../assets/images/Surya.png";
import viswa from "../../assets/images/vishwaraj.jpeg";

function Team() {
  return (
    <>
      <Header />
      <div className="team-page">
        <div className="team-card">
          <div className="team-img">
            <img src={director} alt="" />
          </div>
          <div className="team-info">
            <h2>Mr.Ram</h2>
            <h3>Wireless R&D | Head of Standards</h3>
            <h4>Experience</h4>
            <p className="xp">
              Ex-Infosys, Ex-L&T with several Engagements with Samsung,
              Intel,Mediatek, Nortel, Nokia with Expertise in 5G RAN Protocols |
              Trainings & Lab Setups| B5G,6G, mmWave Research | IEEE ComSoc
            </p>
            <h4>Professional work</h4>
            <p>
              15-year experienced Chief Mentor at iSignal Research Labs.
              Extensive expertise in Cellular Air Interface Technologies,
              including OAM, Configurations, 4G, 5G Protocol Stack
              implementation for Samsung, L&T, Infosys, MediaTek, Rohde &
              Schwarz, Nortel.
            </p>
            <p>
              He is the Active member of various IEEE Societies of Bangalore
              Chapter, IEEE ComSoc, Signal Processing Society, attended and
              conducted various IEEE events in the past in Bangalore.
            </p>
            <p>
              He has conducted several Guest Lectures, Invited Tech Talks,
              Workshops, Seminars and Webinars in the past.
            </p>
            <p>
              Currently Engaged in 5G/6G R&D, 3GPP Standards, career enablement,
              training, lab setups, on-demand projects, and supporting academia
              from an industry perspective.
            </p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img">
            <img src={seniorArchitect} alt="" />
          </div>
          <div className="team-info">
            <h2>Lavanya HM</h2>
            <h3>Senior Architect</h3>
            <h4>Experience</h4>
            <p className="xp">
              Lavanya HM, Software Architect at iSignal Research Labs,
              Bangalore, with 10+ years in 4G/5G. Expertise spans BTS, OAM, LTE
              RAN protocols, C/C++, Linux (Ubuntu/Contiki), base station/UE dev.
              Proficient in IETF RFCs, 6lowPAN (IoT). Engaged with IISc
              Bangalore, Mindtree, Alcatel Lucent, and 3 years in university
              faculty roles.
            </p>
            <h4>Professional work</h4>
            <p>
              <span>Conference Visits:</span>
              <br /> Contributed to Mindtree Osmosis showcasing LTE Access in
              2014. Received in-depth LTE training. Organized IoT workshops at
              IISc (2016) and CDAC, Trivandrum (2017).
            </p>
            <p>
              <span>Research Focus:</span>
              <br /> 5G, 6G, IoT, AI, ML, Blockchain. Routing Protocols: RPL,
              AODV, ongoing work on asymmetrical link-based AODV for LLNs.
              Lavanya H M, Satish A, Charles Perkins, Malati Hegde, Anand S V R.
            </p>
            <p>
              <span>Book Chapter Publications:</span>
              <br /> ScienceDirect:
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/B9780323991995000161"
                style={{ color: "blue" }}
              >
                {" "}
                Visit website
              </a>
              <br />
              DoI:{" "}
              <a
                style={{ color: "blue" }}
                href="https://doi.org/10.1016/B978-0-323-99199-5.00016-1"
              >
                {" "}
                Visit website
              </a>
              <br />
              <br />
              <span>Responsibility:</span>
              <br />
              C, Advanced Data Structures, Linux Sys Programming, Algorithm
              Design for Air Interface, Python for Wireless Automation,
              Practical C++ on Linux.
            </p>
            <p>
              Engaged in academic research, supporting LTE RAN, 5G/NR RAN - Air
              Interface Access Protocols for UE and gNB.
            </p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img">
            <img className="portait-image" src={surya} alt="" />
          </div>
          <div className="team-info">
            <h2>Surya Patar Munda</h2>
            <h3>Cheif Mentor</h3>
            <h4>Experience</h4>
            <p className="xp">
              Bally Technology | Sasken Networks Engg | Spirent Communacation |
              Nortel Networks | Motorola | HCL Tech. | ITI Ltd.35+ years
              experience in wireless telecom industry from 1G to 5G, architected
              solutions in product development, testing, training, and business
              development.
            </p>
            <h4>Professional work</h4>
            <p>
              Technical expertise across 4G/5G standards, protocols, interfaces;
              LTE enhancements for IoT; 5G system and protocol implementation.
            </p>
            <p>
              Recent work on developing 5G IoT gateway enabling IoT devices as
              5G compliant for registration, connectivity, QoS requests.
            </p>
            <p>
              Built components for 5G network access, core network, modes,
              interfaces; expertise in NAS, RRC, MAC, scheduler for 4G/5G
              systems.
            </p>
            <p>
              Experience with AT commands, VoIP applications, disaster
              management apps using LTE ProSe services, SIP clients over
              Asterisk server.
            </p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img">
            <img src={viswa} alt="" />
          </div>
          <div className="team-info">
            <h2>Dr.Vishwaraj</h2>
            <h3>Research and IP Consultant</h3>
            <h4>Experience</h4>
            <p className="xp">
              Dr. Vishwaraj has over 8 years of experience in academia,
              research, industry, and Intellectual Property (IP).
            </p>
            <h4>Professional work</h4>
            <p>
              He has a B.E. degree in Electronics and Communication Engineering
              and an M.Tech in Digital Communication and Networking.
            </p>
            <p>
              He earned his PhD in Wireless Communication from the Central
              University of Karnataka (CUK).
            </p>
            <p>
              He is a registered and practicing Patent Agent (IN/PA 5325) with
              expertise in all aspects of patent processes.
            </p>
            <p>
              His research interests are primarily in Wireless Communication and
              Signal Processing, and he is an active member of several
              professional organizations, including the IEEE and the Institute
              of Engineers (India).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
